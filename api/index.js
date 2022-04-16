// import all necessary modules
import express from "express";
import fetch from "node-fetch";
import Redis from "ioredis";
import dotenv from "dotenv";
import { URL, URLSearchParams } from "url";
import cors from 'cors';
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// import config file from .env
dotenv.config();



// import all configurations
const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const GITHUB_URL = process.env.GITHUB_URL;
const GITHUB_USER_URL = process.env.GITHUB_USER_URL;



// initialize redis server
const redis = new Redis({
    'port': REDIS_PORT
})



// initialize express server
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "github user search",
            description: "This is a REST API which acts as a middleware for the frontend and the github API.",
            servers: ["http://localhost:3000"]
        }
    },
    // ['.routes/*.js']
    apis: ["index.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));



async function getSearchFromAPI(req, res, next) {
    try {
        const url = createGITHUBSearchRequestURL(req);
        const response = await fetch(url);
        const data = await response.json();
        if (data.items) {
            const cleanedData = await cleanSearchData(data);
            const cacheKey = SearchCacheKeyGenerator(req);
            redis.set(cacheKey, JSON.stringify(cleanedData), 'ex', 7200)
            res.send({ ...cleanedData, source: 'api' });
        }
        else {
            res.send({ message: 'API limit' })
        }
    }
    catch (err) {
        console.log(err)
    }
}

async function getUserFromAPI(req, res, next) {
    try {
        const url = createGITHUBUserRequestURL(req);
        const response = await fetch(url);
        const data = await response.json();
        const cleanedData = await cleanUserData(data);
        const cacheKey = cacheKeyUserGenerator(req);
        redis.set(cacheKey, JSON.stringify(cleanedData), 'ex', 7200)

        res.send({ ...cleanedData, source: 'api' });
    }
    catch (err) {
        console.log(err)
    }
}


async function getSearchFromCache(req, res, next) {
    try {
        const cacheKey = SearchCacheKeyGenerator(req);
        let cacheEntry = await redis.get(cacheKey);
        if (cacheEntry) {
            cacheEntry = JSON.parse(cacheEntry)
            res.send({ ...cacheEntry, source: 'cache' })
            return
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err)
    }
}
async function getUserFromCache(req, res, next) {
    try {
        const cacheKey = cacheKeyUserGenerator(req);
        let cacheEntry = await redis.get(cacheKey);
        if (cacheEntry) {
            cacheEntry = JSON.parse(cacheEntry)
            res.send({ ...cacheEntry, source: 'cache' })
            return
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err)
    }
}



function createGITHUBSearchRequestURL(req) {
    const { page, per_page, q } = req.body;
    const url = new URL(GITHUB_URL);
    const params = { q, page, per_page }
    url.search = new URLSearchParams(params).toString();
    return url;
}

function createGITHUBUserRequestURL(req) {
    const { user } = req.body;
    const url = new URL(`${GITHUB_USER_URL}/${user}`);
    return url;
}


function SearchCacheKeyGenerator(req) {
    const { q, page, per_page } = req.body;
    return `users:${q}:${page}:${per_page}`
}
function cacheKeyUserGenerator(req) {
    const { user } = req.body;
    return `user:${user}`

}



function cleanSearchData(data) {
    for (let i in data.items) {
        const { login, avatar_url, id } = data.items[i];
        data.items[i] = { login, avatar_url, id }
    }
    return data;
}
function cleanUserData(data) {
    const { login, avatar_url, html_url, name, location, email, public_repos, followers, following, bio } = data;
    data = { login, avatar_url, html_url, name, location, email, public_repos, followers, following, bio }
    return data;
}

async function clearCache(req, res, next) {
    await redis.flushdb();
    res.send('flushed')
}



/**
 * @swagger
 * /search:
 *    post:
 *      description: return the search
 *    parameters:
 *      - Page: page no.
 *        in: page
 *        description: page no.
 *        schema:
 *          type: integer
 *          format: int64
 *        required: true
 *      - per_page: items per page
 *        in: per_page
 *        description: items per page
 *        schema:
 *          type: integer
 *          format: int64
 *        required: true
 *      - q: query
 *        in: q
 *        description: search query
 *        schema:
 *          type: string
 *          format: string
 *        required: true
 * 
 *    responses:
 *      '200':
 *       
 */

app.post('/search', getSearchFromCache, getSearchFromAPI);
/**
 * @swagger
 * /user:
 *    post:
 *      description: return the user
 *    parameters:
 *      - user: user
 *        in: q
 *        description:  user login
 *        schema:
 *          type: string
 *          format: string
 *        required: true
 * 
 *    responses:
 *      '200':
 *        description: Successfully created user
 */
app.post('/user', getUserFromCache, getUserFromAPI);

// Routes
/**
 * @swagger
 * /clear-cache:
 *  get:
 *    description: clear redis cache
 *    responses:
 *      '200':
 *        description: A successful response
 */

app.get('/clear-cache', clearCache);




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
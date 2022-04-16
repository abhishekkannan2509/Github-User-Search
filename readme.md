<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">Github User Search App</h1>
</div>




<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This is a fullstack application for search github users. the user types the search query in the textbox and the api returns the users.



I would like to thank Invygo for this wonderful oppurtunity.


<p align="right">(<a href="#top">back to top</a>)</p>



## Built With

This project was built with the following technologies.

* [React.js](https://reactjs.org/)
* [MaterialUI](https://mui.com/)
* [express.js](https://expressjs.com/)
* [node.js](https://nodejs.org/en/)
* [redis](https://redis.io/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
### Backend:
* Install Node.js in your machine.

  ```sh
  npm install npm@latest -g
  ```
* install redis
  ```sh
  brew install redis
  ```
* Start redis server 
  ```sh
  brew services start redis
  ```
* Clone this github project.
* Go to the API Directory.

  ```sh
  cd api
  ```
* Install all the dependancies for api

  ```sh
  npm install
  ```
* add .env file to your project

  ```
  PORT = "3000"
  GITHUB_URL = "https://api.github.com/search/users"
  GITHUB_USER_URL = "https://api.github.com/users"
  ```
* start the server

  ```sh
  npm start
  ```
### Frontend:
* Go to the frontend Directory.

  ```sh
  cd frontend
  ```
* Install all the dependancies for frontend

  ```sh
  npm install
  ```
* start the server

  ```sh
  npm start
  ```
* The frontend application is running in port 3001, and api on 3000.




<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Checklist
- Frontend
    - [✓] Debounce input function(created a custom function)
    - [✓] Resposive
    - [✓] Storing api results to localstorage
- Backend
    - [✓] /api/search" POST request
    - [✓] /api/users/{user}" POST request
    - [✓] Caching in redis
    - [✓] "/api/clear-cache" : Clear Backend Caching



<!-- ROADMAP -->
## Devlopment Roadmap

- Step 1:
    - Creating a figma design for the UI.
    - [Figma File](https://www.figma.com/file/8QkGwYl5KOiPaVknFz88j6/Github-users-search)
- step 2:
    - Creating the api server.
    - Three endpoints.
        - /search - to get search results
        - /user - to get details of a specific user
        - /clear-cache - to clear redis cache
- step 3:
    - Creating the frontend.
    - creating components.
    - styiling.
    - api connection using axios.
    - adding debounce to the input.


## Edge Cases:
- Github API restriction:
    - Github api allows only 10 requests per minute. So when the user the user hits more than 10 calls per minute, we send an alert to the user.
- If user not found:
    - We do conditional redering for the frontend.
 
- If user not found:
    - We do conditional redering for the frontend.
    - 
## useful endpoints:
- frontend:
    - http://localhost:3001/ - search page
    - http://localhost:3001/:login - user page
- backend:
    - http://localhost:3000/search - with post method - q, page, per_page in params.
    - http://localhost:3000/user - with post method - user in params.
    - http://localhost:3000/clear-cache - get method to clear cache.
    - http://localhost:3000/api-docs - swagger documentation.

## Future scope:
- add pagination. in the current project we display only top 10 users per search. in the future it can be modified in such a way that thhe user can input the no. of items per page and the page number. Due to the current github api limitions, it could not be implemented.

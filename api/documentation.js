export const swaggerDocumentation = {
    openapi: '3.0.0',
    info:{
        title: 'Github user search',
        version: "0.0.1",
        description: "API documentation"

    },
    servers:[{
        url: "http://localhost:3000"
    }
    ],
    paths:[{
        "/search" :{
            post:{
                description: "receives a post request and returns the search results",
                content: {
                    }
                }
            }
        }
    }]
}

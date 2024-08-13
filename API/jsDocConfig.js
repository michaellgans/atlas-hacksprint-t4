// Configures Swagger-JSDoc
import swaggerJsDoc from 'swagger-jsdoc';

// Defines options for swagger docs
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pokemon Companion API",
      version: "1.0.0",
      description: "A Pokemon Type Companion API"
    },
    servers: [
      {
        url: "http://localhost:5000"
      }
    ],
  },
  apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(options);

export default specs;

const swaggerUi = require("swagger-ui-express")
const swaggereJsdoc = require("swagger-jsdoc")

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "GAMJA API",
      description: "DMU GAMJA PROJECT",
    },
    servers: [
      {
        url: "http://localhost:3030",
      },
    ],
  },
  apis: ["../index.ts"],
}
const specs = swaggereJsdoc(options)

export { swaggerUi, specs }

import swaggerJsdoc from 'swagger-jsdoc';
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Olivanders Shop API',
      version: '1.0.0',
      description: 'API para la tienda de Olivanders',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec
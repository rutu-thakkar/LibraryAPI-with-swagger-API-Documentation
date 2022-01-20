const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const db = require('./models')
require('dotenv').config();
const bookRoutes = require('./routes/booksRoutes');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
// const swaggerJSDoc = require('swagger-jsdoc');
const swaggerJSDoc = YAML.load('./api.yaml');

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/books", bookRoutes)

//Swagger== 
// const options = {
//     definition: {
//         openapi: "3.0.0",
//         info: {
//             title: "Library Api",
//             version: "1.0.0",
//             description: "A simple express Library API"
//         },
//         servers: [
//             {
//                 url: "http://localhost:3000"
//             }
//         ],
//     },
//     apis: ["./routes/*.js"]
// }

// const specs = swaggerJSDoc(options);
    
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc))


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`server listing on http://localhost:${port}`);
    });
}).catch((error) => {
    console.log('Error : ' + error);
});
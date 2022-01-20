const express = require("express");
const { append } = require("vary");
const route = express.Router()
const bookController = require('../controller/bookController')

/* 
@swagger
    components:
        schemas:
            Book:
                type: object
                required: 
                    - bookname
                    - authorname
                    - price
                properties:
                    id:
                        type: string
                        description: The Auto generated Id of Books 
                    bookname:
                        type: string
                        description: Book Name
                    authorname: 
                        type: string
                        description: Author name of Book
                    price: 
                        type: float
                        description: Book price
*/


route.get('/demourl', bookController.demourl);
route.get('/', bookController.home);
route.get('/:id', bookController.getBookById);
route.post('/', bookController.postBooks);
route.put('/', bookController.UpdateBook);
route.delete('/:id', bookController.deleteBook);

module.exports = route
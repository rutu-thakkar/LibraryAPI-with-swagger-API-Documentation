const db = require('../models');

exports.demourl = (req, res) => {
    res.send("Demo String")
}

exports.home = (req, res) => {

    db.books.findAll().then((data) => {
        if (Object.keys(data).length === 0) {
            res.json({
                message: "No data Found"
            })
            return
        }
        res.json({
            data
        })
    }).catch((error) => {
        res.json({
            message: "Error : " + error
        })
    });

}

exports.getBookById = (req, res) => {

    db.books.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        if (!data) {
            res.json({
                message: "No data Found"
            })
            return
        }
        res.json({
            data
        })
    }).catch((error) => {
        res.json({
            message: "Error : " + error
        })
    });

}

exports.postBooks = (req, res) => {
    db.books.create({
        bookname: req.body.bookname,
        authorname: req.body.authorname,
        price: req.body.price
    }).then((data) => {
        if (!data) {
            res.json({ message: 'No Data Inserted!' })
        } else {
            res.json({
                message: "Data inserted Successfully!",
                data
            })
        }
    }).catch((error) => {
        res.json({
            message: "Error : " + error
        });
    });
}

exports.UpdateBook = (req, res) => {
    db.books.findOne({
        where: {
            id: req.body.id
        }
    }).then((data) => {
        if (!data) {
            res.json({
                message: "Data with id " + req.body.id + " doesnot exist."
            })
            return
        }
        db.books.update({
            bookname: req.body.bookname,
            authorname: req.body.authorname,
            price: req.body.price
        }, {
            where: {
                id: req.body.id
            }
        }).then((data) => {
            if (data === 0) {
                res.json({
                    message: "No data Updated"
                })
            } else {
                res.json({
                    message: data + " data updated"
                })
            }
        }).catch((error) => {
            res.json({
                message: "Error : " + error
            })
        })
    }).catch()

}

exports.deleteBook = (req, res) => {
    db.books.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        if (!data) {
            res.json({
                message: "No data Found"
            })
        } else {
            db.books.destroy({
                where: {
                    id: req.params.id
                }
            }).then((data) => {
                if (data === 0) {
                    res.json({
                        message: "No data Deleted"
                    })
                } else {
                    res.json({
                        message: data + " data deleted!"
                    })
                }
            }).catch((error) => {
                res.json({
                    message: "Error : " + error
                })
            })

        }
    })
}
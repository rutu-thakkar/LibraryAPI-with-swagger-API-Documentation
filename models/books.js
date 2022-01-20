module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define("books", {
        bookname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        authorname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    })
    return Books
}
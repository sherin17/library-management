const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Book_Detail = new Schema({

    book_title:String,
    author:String,
    publisher:String,
    price:Number,
    content:String

})

const BookData = mongoose.model('book',Book_Detail);
module.exports = BookData;
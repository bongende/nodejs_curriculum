const Author = require("../models/Author");
const Book = require("../models/Book");

const createAuthor = async (req, res) => {
  try {
    console.log(req.body);
    const author = new Author(req.body);
    await author.save();

    res.status(201).json({
      successs: true,
      message: "Author created successfully",
      data: author,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Sorry an error occured whil creating an author!",
    });
  }
};

const createBook = async () => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();

    res.status(201).json({
      success: true,
      message: "Book created successfully!",
      data: newBook,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Sorry an error occured whil creating an author!",
    });
  }
};

const getBookWithAuthor = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("author");

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Sorry an error occured whil creating an author!",
    });
  }
};

module.exports = { createAuthor, createBook, getBookWithAuthor };

/**
 * Represents a book
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {number} rating - The rating of the book.
 * @param {string} review - The review of the book.
 */
export function Book(title, author, rating, review) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.review = review;
};
/**
 * Represents a article in a blog
 * @constructor
 * @param {string} title
 * @param {string} content
 * @param {string} author
 */
export default function Article(title, content, author, id) {
  this.id = id;
  this.title = title;
  this.content = content;
  this.author = author;
  this.createAt = currentDateFormatted();
}

/**
 * Function that get the current day formated;
 *  example: "December 14, 2018"
 */
function currentDateFormatted() {
  const currentDate = new Date();
  const monthsOfTheYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = currentDate.getDate();
  const month = monthsOfTheYear[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return `${month} ${day}, ${year}`;
}

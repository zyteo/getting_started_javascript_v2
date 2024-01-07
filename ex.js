// 07 Jan 2024, ZY

// TODO: define addFavoriteBook(..) function
const addFavoriteBook = (bookName) => {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
};
// TODO: define printFavoriteBooks() function
const printFavoriteBooks = () => {
  console.log(`Favourite Books: ${favoriteBooks.length}`);
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
};
var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();
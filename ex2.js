class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }
  // TODO: define methods `addFavoriteBook(..)`
  // and `printFavoriteBooks()`
  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }
  printFavoriteBooks() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of this.favoriteBooks) {
      console.log(String(bookName));
    }
  }
}

function loadBooks(/* .. */) {
  // TODO: call fakeAjax( .. );
}

var BOOK_API = "https://some.url/api";

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}

var English = new Bookshelf();

English.addFavoriteBook("A Song of Ice and Fire");
English.addFavoriteBook("The Great Gatsby");
English.printFavoriteBooks();

export function getSortedData(type) {
    // // if type and data provided then return that data in sorted format
    // if (type === "rating" && data.length !== 0) {
    //   return data.sort((a, b) => b.rating - a.rating);
    // }
  
    let sortedReadBooks;
    let sortedWhislistBooks;
  
    //   get data from localStorage
    const readBooks = JSON.parse(localStorage.getItem("books")) || [];
    const wishlistBooks = JSON.parse(localStorage.getItem("wish-list-book")) || [];
  
    //   sorts based on type
    if (type === "rating") {
      sortedReadBooks = readBooks.sort((a, b) => b.rating - a.rating);
  
      sortedWhislistBooks = wishlistBooks.sort((a, b) => b.rating - a.rating);
    } else if (type === "pages") {
      sortedReadBooks = readBooks.sort((a, b) => b.totalPages - a.totalPages);
  
      sortedWhislistBooks = wishlistBooks.sort(
        (a, b) => b.totalPages - a.totalPages
      );
    } else if (type === "year") {
      sortedReadBooks = readBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
  
      sortedWhislistBooks = wishlistBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    } else {
      sortedReadBooks = [];
      sortedWhislistBooks = [];
    }
  
    return { sortedReadBooks, sortedWhislistBooks };
  }
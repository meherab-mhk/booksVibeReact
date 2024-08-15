import { toast } from 'react-toastify';
export const getReadBook = () => {
    let books = [];
    const storedBook = localStorage.getItem("book");
    if(storedBook){
        books = JSON.parse(storedBook);
    }
    return books;
}

export const saveReadBook = (book) => {
    let books = getReadBook();
    const isExist = books.find((b)=> b.bookId === book.bookId);
    if(isExist){
        return toast.error("This book is already in the read list");
    }
    let wishlistBooks = getWishlistBook();
    wishlistBooks = wishlistBooks.filter((b) => b.bookId !== book.bookId);
    localStorage.setItem("wish-list-book", JSON.stringify(wishlistBooks));
    books.push(book);
    localStorage.setItem("book", JSON.stringify(books));
    toast.success("This book is added to the read list");
    
}

export const getWishlistBook = () => {
    let books = [];
    const storedBook = localStorage.getItem("wish-list-book");
    if(storedBook){
        books= JSON.parse(storedBook);
    }
    return books;
}

export const saveWishListBook = (book) => {
    const readBooks = getReadBook();
    const isExistInRead = readBooks.find((b) => b.bookId === book.bookId);
    if (isExistInRead) {
        return toast.error("This book is already in the read list, cannot be added to the wishlist");
    }
    let books = getWishlistBook();
    const isExist = books.find((b)=> b.bookId === book.bookId);
    if(isExist){
        return toast.error("This book is already in the wish list");
    }
    books.push(book);
    localStorage.setItem("wish-list-book", JSON.stringify(books));
    toast.success("This book is added to the wish list");
}
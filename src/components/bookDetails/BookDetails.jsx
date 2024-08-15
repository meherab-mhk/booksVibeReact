import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveReadBook, saveWishListBook } from "../../utils/localStorage";
const BookDetails = () => {
  const bookDetails = useLoaderData();
  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const book = bookDetails.find((book) => book.bookId === bookIdInt);

  const {
    bookName,
    image,
    author,
    category,
    review,
    totalPages,
    rating,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleRead = (book) => {
    saveReadBook(book);
  };
  const handleWishList = (book) => {
    saveWishListBook(book);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8">
      <div className="col-span-1 bg-base-200 flex justify-center py-10 rounded-3xl">
        <img className="w-[420px]" src={image} alt="" />
      </div>
      <div className="col-span-1">
        <h3 className="playfair font-bold text-[40px] mb-4">{bookName}</h3>
        <p className="font-medium text-xl mb-4">By: {author}</p>
        <hr />
        <p className="font-medium text-xl my-4">{category}</p>
        <hr />
        <p className="text-base my-4">
          <strong>Review:</strong> {review}
        </p>
        <div className="flex gap-2 lg:gap-4 items-center my-4">
          <strong>Tag</strong>
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className="btn btn-sm btn-outline btn-error rounded-full bg-[#fe8e8e25]"
            >
              #{tag}
            </button>
          ))}
        </div>
        <hr />
        <div className="my-4">
          <p>
            Number of Pages: <span className="font-bold">{totalPages}</span>
          </p>
        </div>
        <div className="my-4">
          <p>
            Publisher: <span className="font-bold">{publisher}</span>
          </p>
        </div>
        <div className="my-4">
          <p>
            Year of Publishing:{" "}
            <span className="font-bold">{yearOfPublishing}</span>
          </p>
        </div>
        <div className="my-4">
          <p>
            Rating: <span className="font-bold">{rating}</span>
          </p>
        </div>
        <div className="my-4">
          <ToastContainer></ToastContainer>
          <button
            onClick={() => handleRead(book)}
            className="btn btn-error mr-4 font-semibold text-lg"
          >
            Read
          </button>
          <button
            onClick={() => handleWishList(book)}
            className="btn btn-info font-semibold text-lg"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

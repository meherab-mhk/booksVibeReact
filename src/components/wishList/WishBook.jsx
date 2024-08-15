import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import mapIcon from "/map.svg";
import pageIcon from "/paper.svg";
import peopleIcon from "/people.svg";
const WishBook = ({ wishBook }) => {
  const {
    bookId,
    bookName,
    image,
    author,
    category,
    totalPages,
    rating,
    tags,
    publisher,
    yearOfPublishing,
  } = wishBook;
  return (
    <div className="border p-6 rounded-3xl flex flex-col lg:flex-row gap-6">
      <div className="bg-base-200 p-4 rounded-3xl flex justify-center items-center">
        <img src={image} alt="" />
      </div>
      <div className="flex-auto">
        <h3 className="playfair font-bold text-2xl mb-3">{bookName}</h3>
        <p className="font-medium text-base mb-3">By: {author}</p>
        <div className="mb-3">
          <span className="font-bold text-base mr-3">Tag</span>
          {tags.map((tag, idx) => (
            <button
              className="mb-3 lg:mb-0 mr-3 text-red-500 px-2 py-1  bg-red-200 rounded-full"
              key={idx}
            >
              #{tag}
            </button>
          ))}
        </div>
        <div className="flex gap-3 items-center mb-3">
          <img src={mapIcon} alt="" />
          <p>Year of Publishing: {yearOfPublishing}</p>
        </div>
        <div className="flex gap-3 items-center mb-3">
          <img src={peopleIcon} alt="" />
          <p>Publisher: {publisher}</p>
        </div>
        <div className="flex gap-3 items-center mb-3">
          <img src={pageIcon} alt="" />
          <p>Page: {totalPages}</p>
        </div>
        <hr />
        <div className="my-3 flex gap-4 items-center">
          <p className="text-sky-500 p-3 bg-sky-100 rounded-xl lg:rounded-full text-center">
            Category: {category}
          </p>
          <p className="text-yellow-500 p-3 bg-yellow-100 rounded-xl lg:rounded-full text-center">
            Rating: {rating}
          </p>
          <Link to={`/book-details/${bookId}`}>
            <button className="btn btn-error lg:rounded-full lg:text-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishBook;
WishBook.propTypes = {
  wishBook: PropTypes.object,
};

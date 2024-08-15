import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ratingIcon from "/rating.svg";

const SingleBook = ({ singleBook }) => {
  const { bookId, bookName, image, tags, author, category, rating } =
    singleBook;
  return (
    <div>
      <Link to={`/book-details/${bookId}`}>
        <div className="card border px-5 pt-5 h-full">
          <figure className="bg-base-200 p-6 rounded-3xl">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0 ">
            <div className="flex flex-col lg:flex-row gap-3">
              {tags.map((tag, idx) => (
                <button
                  key={idx}
                  className="btn btn-sm btn-outline btn-error rounded-full bg-[#fe8e8e25]"
                >
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title playfair font-bold text-2xl">
              {bookName}
            </h2>
            <p className="font-medium text-base mb-3">By: {author}</p>
            <hr />
            <div className="flex justify-between items-center mt-3 font-medium text-base mb-3">
              <p>{category}</p>
              <span className="flex items-center gap-3">
                {rating} <img src={ratingIcon} alt="" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleBook;

SingleBook.propTypes = {
  singleBook: PropTypes.object,
};

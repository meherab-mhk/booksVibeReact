import PropTypes from "prop-types";
import SingleBook from "../singleBook/SingleBook";
const AllBooks = ({ allBooksData }) => {
  return (
    <div>
      <h3 className="playfair text-center font-bold text-[40px] mb-6">Books</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {allBooksData.map((singleBook) => (
          <SingleBook
            key={singleBook.bookId}
            singleBook={singleBook}
          ></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
AllBooks.propTypes = {
  allBooksData: PropTypes.array,
};

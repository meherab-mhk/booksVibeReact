import PropTypes from "prop-types";
import authorImg from "/user.avif";
const Author = ({ singleAuthor }) => {
  const { author, bookName } = singleAuthor;
  return (
    <div className="text-center bg-base-200 p-6 rounded-xl">
      <img className="w-[250px] mx-auto" src={authorImg} alt="" />
      <h3 className="font-bold text-3xl my-4">Author Name: {author}</h3>
      <p className="font-medium text-xl my-4">Book Name: {bookName}</p>
    </div>
  );
};

export default Author;
Author.propTypes = {
  singleAuthor: PropTypes.object,
};

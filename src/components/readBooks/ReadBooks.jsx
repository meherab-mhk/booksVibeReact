import { getReadBook } from "../../utils/localStorage";
import ReadBook from "./ReadBook";

const ReadBooks = () => {
  const readBooks = getReadBook();
  return (
    <div className="flex flex-col gap-6">
      {readBooks.map((readBook, idx) => (
        <ReadBook key={idx} readBook={readBook}></ReadBook>
      ))}
    </div>
  );
};

export default ReadBooks;

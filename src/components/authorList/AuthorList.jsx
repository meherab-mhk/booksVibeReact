import { useLoaderData } from "react-router-dom";
import Author from "./Author";

const AuthorList = () => {
  const authorList = useLoaderData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {authorList.map((singleAuthor, idx) => (
        <Author key={idx} singleAuthor={singleAuthor}></Author>
      ))}
    </div>
  );
};

export default AuthorList;

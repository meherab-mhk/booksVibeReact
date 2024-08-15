import { useLoaderData } from "react-router-dom";
import AllBooks from "../allBooks/AllBooks";
import Banner from "../banner/Banner";

const Home = () => {
  const allBooksData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <AllBooks allBooksData={allBooksData}></AllBooks>
    </div>
  );
};

export default Home;

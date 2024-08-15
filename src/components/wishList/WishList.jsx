import { getWishlistBook } from "../../utils/localStorage";
import WishBook from "./WishBook";

const WishList = () => {
  const wishBooks = getWishlistBook();

  return (
    <div className="flex flex-col gap-6">
      {wishBooks.map((wishBook, idx) => (
        <WishBook key={idx} wishBook={wishBook}></WishBook>
      ))}
    </div>
  );
};

export default WishList;

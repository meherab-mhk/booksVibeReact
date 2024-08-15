import { Link } from "react-router-dom";
import bannerImg from "/book1.jpg";
const Banner = () => {
  return (
    <div>
      <div className="min-h-screen bg-base-200 rounded-3xl mb-28">
        <div className="flex items-center flex-col-reverse lg:flex-row lg:justify-evenly  py-20">
          <div className="text-center lg:text-center">
            <h1 className="playfair text-[56px] font-bold py-6">
              Books to freshen up <br /> your bookshelf
            </h1>
            <Link to="/listed-books">
              <button className="btn btn-error font-bold text-xl text-white">
                View The List
              </button>
            </Link>
          </div>
          <img src={bannerImg} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import MyContext from "../context/MyContext";
import { useDealsQuery } from "../service/product";
import Loader from "../components/Loader";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const truncateTitle = (title, length = 30) => {
  if (!title) return "N/A";
  return title.length <= length ? title : title.substring(0, length) + "...";
};

const Product = () => {
  const { mode } = useContext(MyContext);
  const {
    data: dealsData,
    // error: dealsError,
    isLoading: dealsLoading,
  } = useDealsQuery();
  console.log(dealsData);

  if (dealsLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <section
      className={`ezy__epgrid8 light py-14 md:py-24 ${
        mode === "dark"
          ? "bg-[#0b1727] text-white border border-slate-700"
          : "bg-white text-zinc-900"
      } relative overflow-hidden z-10`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-end pb-5">
          <h2 className="text-3xl font-bold pb-2">Our Latest Collection</h2>
          <span className="font-medium text-blue-600">
            {" "}
            <a href="#">See more</a>{" "}
          </span>
        </div>
        <div className="">
          {!dealsLoading ? (
            <Carousel responsive={responsive}>
              {dealsData?.data?.deals
                ?.slice(0, 10)
                .filter(
                  (deal) =>
                    deal?.deal_title &&
                    deal?.deal_photo &&
                    deal?.deal_price &&
                    deal?.deal_price?.amount &&
                    deal?.deal_state &&
                    deal?.list_price?.amount
                )
                .map((deal) => (
                  <div key={deal?.deal_id}>
                    {/* <h2>{data?.deal_title}</h2> */}
                    <div
                      className={`  rounded-lg overflow-hidden max-w-sm mx-auto my-4 border ${
                        mode === "dark"
                          ? "bg-[#0b1727] text-white  border-slate-700"
                          : "bg-white text-zinc-900   border-gray-300"
                      }`}
                    >
                      <div className="w-full bg-white py-3">
                        <img
                          src={deal?.deal_photo}
                          alt={deal?.deal_title}
                          className="w-full h-64 object-contain  "
                        />
                      </div>
                      <div className="px-5 pt-5 pb-8 ">
                        {/* <h2 className="text-lg font-semibold">{deal?.deal_title}</h2> */}
                        <a href="#!">
                          <h5
                            className={`text-[17px] font-medium hover:underline mb-1 ${
                              mode === "dark" ? "text-white" : "text-black"
                            }`}
                          >
                            {truncateTitle(deal?.deal_title) || "N/A"}
                          </h5>
                        </a>
                        <p className="mt-2 text-gray-600">
                          <div className="py-2 flex items-center">
                            <h5 className="text-2xl font-medium text-blue-600">
                              ₹{deal?.deal_price?.amount || "N/A"}
                            </h5>
                            <h5
                              className={`text-[15px] opacity-70 line-through ml-2 ${
                                mode === "dark"
                                  ? " text-white"
                                  : " text-zinc-900"
                              } `}
                            >
                              ₹
                              {deal?.list_price?.amount ||
                                deal?.deal_price?.amount}
                            </h5>
                          </div>
                        </p>
                        <div className="flex justify-between items-end">
                          <h6 className="text-sm font-medium">
                            Stock:{" "}
                            <span className="text-emerald-500 font-normal">
                              {deal?.deal_state}
                            </span>
                          </h6>
                          <div className="flex">
                            <button
                              className={`text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded py-1 px-3 text-sm mr-2 ${
                                mode === "dark"
                                  ? "dark:bg-slate-800"
                                  : "bg-white"
                              }`}
                            >
                              <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <button className="bg-blue-600 border border-blue-600 text-white hover:bg-opacity-90 py-1 px-3 rounded text-sm">
                              <FontAwesomeIcon icon={faShoppingCart} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Carousel>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;

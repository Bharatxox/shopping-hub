import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import MyContext from "../../context/MyContext";
import { useProductSearchQuery } from "../../service/product";
import Loader from "../../components/Loader";
import Rating from "../../components/Rating";

export const ProductPageList = () => {
  const { productCatId } = useParams();
  const { mode } = useContext(MyContext);
  const [page, setPage] = useState(1);
  console.log(productCatId);

  console.log(productCatId);
  const {
    data: searchData,
    // error: searchError,
    isLoading: searchIsLoading,
  } = useProductSearchQuery({ search: productCatId, page: page });

  const truncateTitle = (title, length = 30) => {
    if (!title) return "N/A";
    return title.length <= length ? title : title.substring(0, length) + "...";
  };

  if (searchIsLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  console.log(searchData);
  console.log(page);

  return (
    <div className="">
      <div className="px-10 mt-5">
        <h1
          className={`text-[30px] font-bold hover:underline mb-1 ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          {productCatId}
        </h1>
      </div>
      <div className="">
        {!searchIsLoading ? (
          <div className="grid grid-cols-12 gap-6">
            {searchData?.data?.products
              ?.slice(0, 10)

              .map((deal) => (
                <div
                  className="col-span-12 md:col-span-6 xl:col-span-4"
                  key={deal?.product_title}
                >
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
                        src={deal?.product_photo}
                        alt={deal?.product_title}
                        className="w-full h-64 object-contain  "
                      />
                    </div>
                    <div className="px-5 pt-5 pb-8 ">
                      {/* <h2 className="text-lg font-semibold">{deal?.deal_title}</h2> */}
                      <a href="#!">
                        <h5
                          className={`text-[20px] font-medium hover:underline mb-1 ${
                            mode === "dark" ? "text-white" : "text-black"
                          }`}
                        >
                          {truncateTitle(deal?.product_title) || "N/A"}
                        </h5>
                      </a>
                      <p className="mt-2 text-gray-600">
                        <div className="py-2 flex items-center">
                          <h5 className="text-2xl font-medium text-blue-600">
                            {deal?.product_price}
                          </h5>
                        </div>
                      </p>
                      <div className="flex gap-3">
                        <Rating rating={deal?.product_star_rating} />
                        <p className=" text-gray-600 dark:text-gray-400">
                          {deal?.product_star_rating} (
                          {deal?.product_num_ratings} ratings)
                        </p>
                      </div>
                      <div className="flex justify-between items-center ">
                        <p className=" text-gray-600 dark:text-gray-400">
                          {truncateTitle(deal.delivery)}
                        </p>
                        <div className="flex">
                          <button
                            className={`text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded py-1 px-3 text-sm mr-2 ${
                              mode === "dark" ? "dark:bg-slate-800" : "bg-white"
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
          </div>
        ) : (
          <Loader />
        )}
        <button
          className="bg-blue-500 text-white font-medium text-xl"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

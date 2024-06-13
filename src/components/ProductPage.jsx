import React, { useContext, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import MyContext from "../context/MyContext";

const products = [
  {
    img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_8_7.jpg",
    new: "New",
    title: "Must Own & Dripper Pour Over All in One Coffee Bean",
    subTitle: "Fashion & Beauty",
    discount: "1433.00",
    real: "2100",
    shipping: "90",
    availibility: "Available",
    rating: 4.3,
    count: "7",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_8_1.jpg",
    new: "New",
    title: "Tall Indoor Tiered Column Tabletop Fountain with 3 Candles",
    subTitle: "Home Decoration",
    discount: "111.11",
    real: "1,420",
    shipping: "0",
    availibility: "Available",
    rating: 4.8,
    count: "11",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_8_2.jpg",
    new: "New",
    title: "The Slimming Foodie: 100+ recipes under 600 calories",
    subTitle: "Kitchen Stuffs",
    discount: "871",
    real: "1783.50",
    shipping: "250",
    availibility: "Available",
    rating: 4.5,
    count: "65",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_8_3.jpg",
    new: "New",
    title: "Around the World in 80 Birds Hardcover – 23 Jun. 2022",
    subTitle: "Computer & Accessories",
    discount: "1710.5",
    real: "2759",
    shipping: "170",
    availibility: "Available",
    rating: 5,
    count: "3",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_8_4.jpg",
    new: "New",
    title: "board book tray for bed, living room, home office",
    subTitle: "Computer & Accessories",
    discount: "5199.20",
    real: "5399",
    shipping: "250",
    availibility: "Available",
    rating: 3.9,
    count: "1",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_8_5.jpg",
    new: "New",
    title: "External Hard Drive,USB 3.0 Gen 1, Black (HDTB410EK3AA",
    subTitle: "Computer & Accessories",
    discount: "3919.5",
    real: "4514",
    shipping: "300",
    availibility: "Available",
    rating: 3.2,
    count: "0",
  },
];

const Rating = ({ rating }) => (
  <span className="flex items-center text-yellow-500">
    {[...Array(5)].map((_, i) => {
      const index = i + 1;
      let content = "";
      if (index <= Math.floor(rating))
        content = <FontAwesomeIcon icon={faStar} className="mr-1" />;
      else if (rating > i && rating < index + 1)
        content = <FontAwesomeIcon icon={faStarHalfAlt} className="mr-1" />;
      else if (index > rating)
        content = <FontAwesomeIcon icon={farStar} className="mr-1" />;

      return <Fragment key={i}>{content}</Fragment>;
    })}
  </span>
);

Rating.propTypes = {
  rating: PropTypes.number,
};

const ProductItem = ({ product }) => {
  const { mode } = useContext(MyContext);

  return (
    <div
      className={`rounded border ${
        mode === "dark" ? "dark:border-slate-700" : "border-gray-300"
      } h-full`}
    >
      <div className="relative">
        <h6 className="absolute top-3 right-5 bg-green-500 text-white py-1 px-3 rounded-2xl">
          {product.new}
        </h6>
        <a href="#!">
          <img src={product.img} alt="..." className="w-full rounded-t" />
        </a>
      </div>
      <div className="p-4 lg:p-6 text-start">
        <a href="#!">
          <h5
            className={`text-[17px] font-medium hover:underline mb-1 ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            {product.title}
          </h5>
        </a>
        <a href="#!">
          <h5
            className={`text-sm leading-none opacity-60 hover:underline font-medium ${
              mode === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {product.subTitle}
          </h5>
        </a>
        <div className="py-2 flex items-center">
          <h5 className="text-2xl font-medium text-blue-600">
            ${product.discount}
          </h5>
          <h5 className="text-[15px] opacity-70 line-through ml-2">
            ${product.real}
          </h5>
        </div>
        <div
          className={`opacity-80 ${
            mode === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          <h6 className="font-medium text-sm mb-1">
            Shipping Cost: ${product.shipping}
          </h6>
          <h6 className="text-sm font-medium">
            Stock:
            <span className="text-emerald-500">{product.availibility}</span>
          </h6>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center text-yellow-500">
            <Rating rating={product.rating} />
            <span
              className={`${
                mode === "dark" ? "text-white" : "text-black"
              } opacity-75`}
            >
              ({product.count})
            </span>
          </div>
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
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

const Product = () => {
  const { mode } = useContext(MyContext);

  return (
    <section
      className={`ezy__epgrid8 light py-14 md:py-24 ${
        mode === "dark" ? "bg-[#0b1727] text-white" : "bg-white text-zinc-900"
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
        <div className="grid grid-cols-12 gap-6 text-center">
          {products.map((product, i) => (
            <div className="col-span-12 md:col-span-6 xl:col-span-4" key={i}>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

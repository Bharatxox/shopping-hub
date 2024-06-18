import { useParams } from "react-router-dom";
import MyContext from "../../context/MyContext";
import { useProductDetailQuery } from "../../service/product";
import Rating from "../../components/Rating";
import { Oval } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

const productData = {
  status: "OK",
  request_id: "34a7f405-7107-4613-90b4-ced6fd42ee26",
  data: {
    asin: "B07ZPKBL9V",
    product_title:
      "Apple iPhone 11, 64GB, (PRODUCT)RED - Fully Unlocked (Renewed)",
    product_price: "$224.75",
    product_original_price: null,
    currency: "USD",
    country: "US",
    product_star_rating: "4.2",
    product_num_ratings: 50673,
    product_url: "https://www.amazon.com/dp/B07ZPKBL9V",
    product_photo: "https://m.media-amazon.com/images/I/41iMRb9fHIL.jpg",
    product_num_offers: 52,
    product_availability: "Only 11 left in stock - order soon.",
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: false,
    climate_pledge_friendly: true,
    sales_volume: "1K+ bought in past month",
    about_product: [
      "This phone is unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).",
      "Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
      "Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.",
    ],
    product_description:
      'The iPhone 11 features a 6.1-inch LCD display that Apple calls a "Liquid Retina HD Display." It features a 1792 x 828 resolution at 326ppi, a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors. The iPhone 11 is available in six different colors: White, Black, Yellow, (PRODUCT)RED, Purple, and Green.',
    product_information: {
      "Product Dimensions": "7 x 5 x 4 inches",
      "Item Weight": "6.7 ounces",
      ASIN: "B07ZPKBL9V",
      "Item model number": "iPhone 11",
      Batteries: "1 Lithium Ion batteries required. (included)",
      "Best Sellers Rank":
        "#2 in Amazon Renewed (See Top 100 in Amazon Renewed) #2 in Renewed Smartphones",
      OS: "iOS 16",
      RAM: "4 GB",
      "Wireless communication technologies": "Cellular",
      "Connectivity technologies": "Bluetooth, Wi-Fi, USB, NFC",
      GPS: "True",
      "Special features": "Built-In GPS",
      "Other display features": "Wireless",
      "Human Interface Input": "Touchscreen",
      "Other camera features": "Front, Rear",
      "Form Factor": "Smartphone",
      Color: "Red",
      "Battery Power Rating": "3600",
      "What's in the box": "Apple iPhone, USB Data Cable",
      Manufacturer: "Apple Computer",
      "Date First Available": "October 28, 2019",
      "Memory Storage Capacity": "64 GB",
      "Standing screen display size": "6.1 Inches",
      "Ram Memory Installed Size": "4 GB",
      Weight: "0.19 Kilograms",
    },
    rating_distribution: {
      1: "11%",
      2: "3%",
      3: "5%",
      4: "13%",
      5: "68%",
    },
    product_photos: [
      "https://m.media-amazon.com/images/I/41iMRb9fHIL.jpg",
      "https://m.media-amazon.com/images/I/31sNDIGO6XL.jpg",
      "https://m.media-amazon.com/images/I/41Sa-e84mbL.jpg",
      "https://m.media-amazon.com/images/I/31bc2TNTaZL.jpg",
      "https://m.media-amazon.com/images/I/41xNME9Y1AL.jpg",
      "https://m.media-amazon.com/images/I/41IJ0fzfqoL.jpg",
      "https://m.media-amazon.com/images/I/41iMRb9fHIL.jpg",
    ],
    product_details: {
      Brand: "Apple",
      "Operating System": "iOS 16",
      "Ram Memory Installed Size": "4 GB",
      "Memory Storage Capacity": "64 GB",
      "Screen Size": "6.1 Inches",
      "Model Name": "iPhone 11",
      "Wireless Carrier": "Unlocked",
      "Cellular Technology": "GSM, EDGE, UMTS, HSPA, HSDPA, CDMA, EV-DO, LTE",
      "Connectivity Technology": "Bluetooth, Wi-Fi, USB, NFC",
      Color: "Red",
    },
    customers_say:
      "Customers like the ease of use of the cellular phone. They say it's easy to set up and handle. They also appreciate the value for money. However, some customers have reported issues with charging the phone correctly or at all. They mention that the phone stops charging at 80%. Customers also dislike the sound quality. Opinions are mixed on scratch resistance, security, quality, and battery life.",
    review_aspects: {
      Value: "POSITIVE",
      "Ease of use": "POSITIVE",
      Quality: "MIXED",
      "Battery life": "MIXED",
      "Scratch resistance": "MIXED",
      Charging: "MIXED",
      Security: "MIXED",
      "Sound quality": "NEGATIVE",
    },
  },
};

const ProductPage = () => {
  const { productId } = useParams();
  const { mode } = useContext(MyContext);
  const {
    data: detailData,
    error: detailError,
    isLoading: deatilIsLoading,
  } = useProductDetailQuery(productId);
  console.log(detailData);
  const product = detailData?.data;

  return (
    <div>
      {deatilIsLoading ? (
        <div className="flex justify-center my-4">
          <Oval
            visible={true}
            height="30"
            width="30"
            color="rgb(37 99 253)"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
            strokeWidth="4"
          />
        </div>
      ) : (
        <div className="container mx-auto p-4">
          {/* Main Section */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section: Images */}
            <div className="flex-1 ">
              <div className="sticky top-28  flex flex-col justify-center items-center mt-24">
                <div className="h-80">
                  <img
                    className="w-full h-full object-contain rounded"
                    src={product.product_photo}
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {product.product_photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Product image ${index + 1}`}
                      className="w-20 h-20 object-contain rounded shadow-md"
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Right Section: Product Details */}
            <div className="flex-1">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">{product.product_title}</h1>

                <div>
                  <div className="flex gap-2">
                    <Rating rating={product.product_star_rating} />
                    <div className="flex gap-3">
                      <p className="text-gray-600">
                        ({product.product_star_rating})
                      </p>
                      <p className="text-gray-600">
                        {product.product_num_ratings} ratings
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs -mt-5 pb-5">
                    {product.sales_volume}
                  </p>
                  <p className="pt-5 border-t-2 text-xl text-gray-700">
                    {product.product_original_price &&
                      product.product_price && (
                        <span className="text-red-600 text-3xl">
                          -
                          {(
                            ((parseFloat(
                              product.product_original_price.replace(
                                /[^0-9.-]+/g,
                                ""
                              )
                            ) -
                              parseFloat(
                                product.product_price.replace(/[^0-9.-]+/g, "")
                              )) /
                              parseFloat(
                                product.product_original_price.replace(
                                  /[^0-9.-]+/g,
                                  ""
                                )
                              )) *
                            100
                          ).toFixed(0)}
                          %
                        </span>
                      )}
                    <span className="text-3xl font-normal pl-3">
                      ₹{product.product_price}
                    </span>
                    <p className="flex gap-2 font-medium text-gray-500">
                      <p className="text-sm">M.R.P:</p>
                      {product.product_original_price && (
                        <span className="text-sm line-through">
                          {product.product_original_price}
                        </span>
                      )}
                    </p>
                  </p>
                </div>
                <p className="text-gray-700">{product.product_availability}</p>
                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded shadow">
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                  </button>
                  <button className="bg-red-600 text-white py-2 px-4 rounded shadow">
                    <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
                  </button>
                </div>
              </div>

              {/* About Section */}
              <div className="mt-5 border-t-2 pt-5">
                <h3 className="text-xl font-semibold mb-4">
                  About this product
                </h3>
                <ul className="list-disc list-inside">
                  {product.about_product.map((point, index) => (
                    <li key={index} className="text-gray-700 mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Description Section */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-700">{product.product_description}</p>
              </div>
              {/* Specifications Section */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <ul className="list-inside">
                  {Object.entries(product.product_information).map(
                    ([key, value], index) => (
                      <li key={index} className="text-gray-700 mb-2">
                        <strong>{key}:</strong> {value}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/* Reviews Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
            <div className="mb-4">
              {Object.entries(product.rating_distribution).map(
                ([rating, percentage], index) => (
                  <div key={index} className="text-gray-700">
                    {rating} stars: {percentage}
                  </div>
                )
              )}
            </div>
            <div className="review-aspects">
              {Object.entries(product.review_aspects).map(
                ([aspect, sentiment], index) => (
                  <div key={index} className="text-gray-700">
                    {aspect}: {sentiment}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;

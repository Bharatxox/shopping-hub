import { useContext } from "react";
import { useSelector } from "react-redux";
import MyContext from "../../context/MyContext";
import ProductItem from "./ProductItem";
import SideBar from "./SideBar";

const Cart = () => {
  const { mode } = useContext(MyContext);
  const cartItems = useSelector((state) => state.cart);

  return (
    <section
      className={`ezy__epcart1 py-14 md:py-24 relative overflow-hidden z-10 ${
        mode === "dark" ? "bg-[#0b1727] text-white" : "bg-white text-zinc-900"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* <!-- products --> */}
          <div className="w-full lg:w-2/3">
            {cartItems.map((item) => (
              <ProductItem item={item} key={item.asin} />
            ))}
          </div>

          {/* <!-- sidebar --> */}
          <div className="w-full lg:w-1/3">
            <SideBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

import { useContext } from "react";
import { useSelector } from "react-redux";
import MyContext from "../../context/MyContext";

const SideBar = () => {
  const { mode } = useContext(MyContext);
  const cartItems = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product_price * item.qty,
    0
  );
  const shippingFee = 99;
  const tax = (subtotal + shippingFee) * 0.08;
  const total = subtotal + shippingFee + tax;

  return (
    <div
      className={`rounded-xl flex flex-col gap-6 p-4 md:p-6 ${
        mode === "dark" ? "bg-slate-800" : "bg-blue-50"
      }`}
    >
      <div>
        <h6 className="font-medium mb-6 opacity-75">Order Summary</h6>

        <div className="flex justify-between items-center">
          <span>Sub total</span>
          <span className="font-bold">₹{subtotal.toFixed(2)}</span>
        </div>
        <hr
          className={`my-4 ${mode === "dark" ? "dark:border-slate-700" : ""}`}
        />
        <div className="flex justify-between items-center">
          <span>Shipping Fee</span>
          <span className="font-bold">₹{shippingFee}</span>
        </div>
        <hr
          className={`my-4 ${mode === "dark" ? "dark:border-slate-700" : ""}`}
        />
        <div className="flex justify-between items-center">
          <span>Tax</span>
          <span className="font-bold">₹{tax.toFixed(2)}</span>
        </div>
        <hr
          className={`my-4 ${mode === "dark" ? "dark:border-slate-700" : ""}`}
        />
        <div className="flex justify-between items-center">
          <span className="fs-5 font-bold">Total</span>
          <span className="font-bold">₹{total.toFixed(2)}</span>
        </div>
      </div>
      <div>
        <button className="w-full bg-blue-600 rounded-md text-white hover:bg-opacity-90 py-2.5">
          BUY ({cartItems.length})
        </button>
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import CartProduct from "../../components/CartPageComponents/CartProduct";
import CartTotal from "../../components/CartPageComponents/CartTotal";

const Cart = () => {
  return (
    <div className=" wrapper py-20">
      <p>Home/Cart</p>

      <div className="py-10 space-y-5">
        <div className="product-info grid grid-cols-4 place-items-center py-5 shadow font-medium">
          <h4>Product</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Subtotal</h4>
        </div>

        <div className="products h-[400px] overflow-auto shadow">
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>

        <div className="pt-4">
        <CartTotal/>

        </div>

      </div>
    </div>
  );
};

export default Cart;

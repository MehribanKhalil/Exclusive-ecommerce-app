import React from "react";
import { IoIosClose } from "react-icons/io";

const CartProduct = () => {
  return (
    <div className="card-product grid grid-cols-4 place-items-center shadow py-2">
      <div className=" relative center gap-2">
        <div className="product-img w-16">
          <img
            src="https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1704067200&Signature=lh~PSVZ4f5ZBRG-rmhpB1xLYGKIBAd81IXbhcYnS~V44M0jORkEENiphfnBIuZ8HN3qV~oc8qjaRcCDvVcO~aYRGbqeeooZT9qKWUVN-rREEc8qg0DIM5ezUf3SeKFoD6sQEVqlP5tIsts3Yjxd2SnADQg1yY3Kp0rdYkhYAle2g66hRUHcEY8uEc~qDbUqkwEcZWmc3fThKuaC8prsuA9tBfg4u6A7vMKcyQzwBpXCz6M1O5z7-Rsxvif~yrARPwHBT95bfLuBn56geI9UxcW1u3rxwAJ1smK~CVJ-TT9~eppiifbINmOVPVZgNEOL8CiKTcZo3sN3zAnHCb9pwdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
        <button className=" absolute top-1 left-0">
          <IoIosClose
            className=" text-white  bg-primary rounded-full"
            size={18}
          />
        </button>
        <h5 className="product-name">LCD Monitor</h5>
      </div>
      <div>
        <p>$650</p>
      </div>
      <div>
        <input
          type="number"
          defaultValue={1}
          className=" max-w-[65px] border-2 border-gray_text focus:outline-gray-400 border_radius p-2  "
        />
      </div>
      <div>
        <span>$650</span>
      </div>
    </div>
  );
};

export default CartProduct;

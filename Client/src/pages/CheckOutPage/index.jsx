import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import Button from "../../components/CommonComponents/button";
import card1 from '../../assets/images/CheckOutImages/image 32.png'
import card2 from '../../assets/images/CheckOutImages/image 31.png'
import card4 from '../../assets/images/CheckOutImages/image 30.png'
import card3 from '../../assets/images/CheckOutImages/image 33.png'


const CheckOutPage = () => {
  const userSchema = Yup.object().shape({
    name: Yup.string().required("First Name is required"),
    address: Yup.string().required("Street Address is required"),
    city: Yup.string().required("City is required"),
    phone: Yup.string()
      .matches(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        "Please enter a valid phone number"
      )
      .required("Phone Number is required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
  });

  return (
    <section id="checkout-page" className="wrapper py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
        <div className="checkout-form">
          <h2 className=" text-[2.2rem] font-medium pb-3">Billing Details</h2>

          <Formik
            initialValues={{
              name: "",
              address: "",
              city: "",
              phone: "",
              email: "",
            }}
            validationSchema={userSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setTimeout(() => {
                alert("Form is validated! Submitting the form...");
                setSubmitting(false);
              }, 1000);
            }}
          >
            {({ errors, touched }) => (
              <Form className=" space-y-3">
                <div className="form-group">
                  <label htmlFor="name" className=" opacity-40 py-1 block">
                    First Name*
                  </label>
                  <Field
                    type="text"
                    name="name"
                    autoComplete="off"
                    className="block border-none outline-none bg-gray_text px-2 py-3 w-full"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className=" text-primary text-sm"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="companyname"
                    className=" opacity-40 py-1 block"
                  >
                    Company Name
                  </label>
                  <Field
                    type="text"
                    name="companyname"
                    autoComplete="off"
                    className="block border-none outline-none bg-gray_text px-2 py-3 w-full"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address" className=" opacity-40 py-1 block">
                    Street Address*
                  </label>
                  <Field
                    type="text"
                    name="address"
                    autoComplete="off"
                    className="block border-none outline-none bg-gray_text px-2 py-3 w-full"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className=" text-primary text-sm"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apartment" className=" opacity-40 py-1 block">
                    Apartment, floor, etc. (optional)
                  </label>
                  <Field
                    type="text"
                    name="apartment"
                    autoComplete="off"
                    className="block border-none outline-none bg-gray_text px-2 py-3 w-full"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city" className=" opacity-40 py-1 block">
                    Town/City*
                  </label>
                  <Field
                    type="text"
                    name="city"
                    autoComplete="off"
                    className="block border-none outline-none bg-gray_text px-2 py-3 w-full"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className=" text-primary text-sm"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className=" opacity-40 py-1 block">
                    Phone Number*
                  </label>
                  <Field
                    type="tel"
                    name="phone"
                    autoComplete="off"
                    className="block border-none outline-none bg-gray_text px-2 py-3 w-full"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className=" text-primary text-sm"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className=" opacity-40 py-1 block">
                    Email Address*
                  </label>
                  <Field
                    type="email"
                    name="email"
                    autoComplete="off"
                    className="block border-none outline-none bg-gray_text px-2 py-3 w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className=" text-primary text-sm"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="checkout-paymets pt-20">
          <div className="products">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 font-medium">
                <div className="w-[50px]">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1704067200&Signature=lh~PSVZ4f5ZBRG-rmhpB1xLYGKIBAd81IXbhcYnS~V44M0jORkEENiphfnBIuZ8HN3qV~oc8qjaRcCDvVcO~aYRGbqeeooZT9qKWUVN-rREEc8qg0DIM5ezUf3SeKFoD6sQEVqlP5tIsts3Yjxd2SnADQg1yY3Kp0rdYkhYAle2g66hRUHcEY8uEc~qDbUqkwEcZWmc3fThKuaC8prsuA9tBfg4u6A7vMKcyQzwBpXCz6M1O5z7-Rsxvif~yrARPwHBT95bfLuBn56geI9UxcW1u3rxwAJ1smK~CVJ-TT9~eppiifbINmOVPVZgNEOL8CiKTcZo3sN3zAnHCb9pwdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <h5>LCD Monitor</h5>
              </div>
              <span>$650</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 font-medium">
                <div className="w-[50px]">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1704067200&Signature=lh~PSVZ4f5ZBRG-rmhpB1xLYGKIBAd81IXbhcYnS~V44M0jORkEENiphfnBIuZ8HN3qV~oc8qjaRcCDvVcO~aYRGbqeeooZT9qKWUVN-rREEc8qg0DIM5ezUf3SeKFoD6sQEVqlP5tIsts3Yjxd2SnADQg1yY3Kp0rdYkhYAle2g66hRUHcEY8uEc~qDbUqkwEcZWmc3fThKuaC8prsuA9tBfg4u6A7vMKcyQzwBpXCz6M1O5z7-Rsxvif~yrARPwHBT95bfLuBn56geI9UxcW1u3rxwAJ1smK~CVJ-TT9~eppiifbINmOVPVZgNEOL8CiKTcZo3sN3zAnHCb9pwdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <h5>LCD Monitor</h5>
              </div>
              <span>$650</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 font-medium">
                <div className="w-[50px]">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1704067200&Signature=lh~PSVZ4f5ZBRG-rmhpB1xLYGKIBAd81IXbhcYnS~V44M0jORkEENiphfnBIuZ8HN3qV~oc8qjaRcCDvVcO~aYRGbqeeooZT9qKWUVN-rREEc8qg0DIM5ezUf3SeKFoD6sQEVqlP5tIsts3Yjxd2SnADQg1yY3Kp0rdYkhYAle2g66hRUHcEY8uEc~qDbUqkwEcZWmc3fThKuaC8prsuA9tBfg4u6A7vMKcyQzwBpXCz6M1O5z7-Rsxvif~yrARPwHBT95bfLuBn56geI9UxcW1u3rxwAJ1smK~CVJ-TT9~eppiifbINmOVPVZgNEOL8CiKTcZo3sN3zAnHCb9pwdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <h5>LCD Monitor</h5>
              </div>
              <span>$650</span>
            </div>
          </div>

          <div className="flex justify-between flex-col items-center l space-y-4 ">
            <div className="cart-total  border_radius w-full py-7">
              <h3 className=" text-[1.25rem] font-medium">Cart Total</h3>
              <div className="flex items-center justify-between py-3 section_border">
                <p>Subtotal:</p>
                <span>$1750</span>
              </div>

              <div className="flex items-center justify-between py-3 section_border">
                <p>Shipping:</p>
                <span>Free</span>
              </div>
              <div className="flex items-center justify-between py-3 ">
                <p>Total:</p>
                <span>$1750</span>
              </div>
            </div>

            <div className="grid grid-col-1 justify-between gap-3 w-full ">
              <div className="flex">
                <div>
                  <input
                    type="radio"
                    id="Bank"
                    name="fav_language"
                    value="HTML"
                  />
                  <label for="Bank">Bank</label>
                </div>

                <div className="flex gap-3 items-center">
                   <div className="w-10">
                    <img src={card1} alt="" className="w-full" />
                   </div>
                   <div className="w-10">
                    <img src={card2} alt="" className="w-full"  />
                   </div>
                   <div className="w-10">
                    <img src={card3} alt="" className="w-full" />
                   </div>
                   <div className="w-10">
                    <img src={card4} alt="" className="w-full" />
                   </div>
                </div>
              </div>
              <div>
                <input
                  type="radio"
                  id="Cash"
                  name="fav_language"
                  value="HTML"
                />
                <label for="Cash">Cash</label>
              </div>
            </div>

            <div className="cart-coupon flex items-center flex-wrap justify-center  gap-3 mb-5 lg:mb-0">
              <input
                type="text"
                placeholder="Coupon Code  "
                className="custom_border py-3 px-3 focus:outline-none"
              />
              <Button btnText="Apply Coupon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutPage;

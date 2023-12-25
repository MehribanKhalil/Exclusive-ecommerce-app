import React from "react";
import { NavLink } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";

import * as Yup from "yup";
import Button from "../../components/CommonComponents/button";

const AccountPage = () => {
  const formValidationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    lastname: Yup.string()
      .required("Username is required")
      .min(6, "Lastname must be at least 6 characters")
      .max(20, "Lastname must not exceed 20 characters"),

    email: Yup.string()
      .email("Please enter a valid email")
      .required("This field is required"),
    address: Yup.string().required("Street Address is required"),
    phone: Yup.string()
      .matches(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        "Please enter a valid phone number"
      )
      .required("Your Phone is required"),
    message: Yup.string().required("Required"),
  });
  return (
    <section id="account-page" className="wrapper pt-10 pb-24">
      <div className="account-heading flex justify-between py-14">
        <p>
          <span className=" text-gray-400">Home</span> / My Account
        </p>
        <h4>
          Welcome! <span className=" text-primary">Md Rimel</span>
        </h4>
      </div>

      <div className="grid grid-cols-4">
        <div className="Manage-account">
          <div>
            <h3 className=" font-medium">Manage My Account</h3>
            <div className=" opacity-50 p-4 flex flex-col gap-2">
              <NavLink>My Profile</NavLink>
              <NavLink>Address Book</NavLink>
              <NavLink>My Payment Options</NavLink>
            </div>
          </div>
          <div>
            <h3 className=" font-medium">My Orders</h3>
            <div className=" opacity-50 p-4 flex flex-col gap-2">
              <NavLink>My Profile</NavLink>
              <NavLink>Address Book</NavLink>
              <NavLink>My Payment Options</NavLink>
            </div>
          </div>
          <div>
            <h3 className=" font-medium">My WishList</h3>
          </div>
        </div>

        <div className=" Edit-profile col-span-3 px-10">
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              address:"",
              phone: "",
              message: "",
            }}
            validationSchema={formValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setTimeout(() => {
                alert("Form is validated! Submitting the form...");
                setSubmitting(false);
              }, 1000);
            }}
          >
            {({ errors, touched, resetForm }) => (
              <Form>
                <h2 className="text-[1.25rem] text-primary font-semibold py-5">
                  Edit Your Profile
                </h2>
                <div className="grid grid-cols-2 gap-32">
                  <div className="form-group">
                    <label htmlFor="firstname" className=" py-1 block">
                      First Name
                    </label>
                    <Field
                      type="text"
                      name="firstname"
                      autoComplete="off"
                      className="block border-none outline-none bg-gray_text px-2 py-3 w-full"
                      placeholder="Md"
                    />
                    <ErrorMessage
                      name="firstname"
                      component="div"
                      className=" text-primary text-sm"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastname" className=" py-1 block">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      name="lastname"
                      autoComplete="off"
                      placeholder="Rimel"
                      className="block border-none outline-none bg-gray_text px-2 py-3 w-full"
                    />
                    <ErrorMessage
                      name="lastname"
                      component="div"
                      className=" text-primary text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-32">
                  <div className="form-group">
                    <label htmlFor="email" className=" py-1 block">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      autoComplete="off"
                      className="block border-none outline-none bg-gray_text px-2 py-3 w-full"
                      placeholder="rimel1111@gmail.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className=" text-primary text-sm"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address" className=" py-1 block">
                      Address
                    </label>
                    <Field
                      type="text"
                      name="address"
                      autoComplete="off"
                      placeholder="Kingston, 5236, United State"
                      className="block border-none outline-none bg-gray_text px-2 py-3 w-full"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className=" text-primary text-sm"
                    />
                  </div>
                </div>

                <div className="form-group  space-y-2 mt-3">
                <label htmlFor="password" className=" py-1 block">
                Password Changes
                    </label>
                    <Field
                      type="text"
                      name="password"
                      autoComplete="off"
                      placeholder="Current Passwod"
                      className="block border-none outline-none bg-gray_text px-2 py-3 w-full"
                    />
                    <Field
                      type="text"
                      name="password"
                      autoComplete="off"
                      placeholder="New Passwod"
                      className="block border-none outline-none bg-gray_text px-2 py-3 w-full"
                    />
                    <Field
                      type="text"
                      name="password"
                      autoComplete="off"
                      placeholder="Confirm New Passwod"
                      className="block border-none outline-none bg-gray_text px-2 py-3 w-full"
                    />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;

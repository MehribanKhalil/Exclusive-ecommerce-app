import React from 'react'
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Button from '../../CommonComponents/button';


const ContactForm = () => {
    const formValidationSchema = Yup.object().shape({
        username: Yup.string()
          .required("Username is required")
          .min(6, "Username must be at least 6 characters")
          .max(20, "Username must not exceed 20 characters"),
    
        email: Yup.string()
          .email("Please enter a valid email")
          .required("This field is required"),
          phone: Yup.string()
          .matches(
            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
            "Please enter a valid phone number"
          )
          .required("Your Phone is required"),
        message: Yup.string().required("Required"),
      });
  return (
    <Formik
            initialValues={{
              username: "",
              email: "",
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
                <div className="flex flex-col justify-between gap-4 md:gap-0 md:flex-row">
                  <div className="">
                    <Field
                      id="username"
                      name="username"
                      placeholder="Your Name *"
                      className=' border-none outline-none bg-gray_text px-2 py-3 w-full'
                    />
                    {errors.username && touched.username ? (
                      <div className=" text-sm text-primary">
                        {errors.username}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <Field
                      id="email"
                      name="email"
                      placeholder="Your Email *"
                      type="email"
                      className=' border-none outline-none bg-gray_text px-2 py-3 w-full'

                    />
                    {errors.email && touched.email ? (
                      <div className=" text-sm text-primary">
                        {errors.email}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div>
                    <Field
                      id="phone"
                      name="phone"
                      placeholder="Your Phone *"
                      type="phone"
                      className=' border-none outline-none bg-gray_text px-2 py-3 w-full'

                    />
                    {errors.phone && touched.phone ? (
                      <div className=" text-sm text-primary">
                        {errors.phone}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="my-3">
                  <div>
                    <Field
                      name="message"
                      as="textarea"
                      type="text"
                      rows='10'
                      placeholder="Your Massage"
                      className=' border-none outline-none bg-gray_text px-2 py-3 w-full'

                    />
                    {errors.message && touched.message ? (
                      <div className=" text-sm text-primary">
                        {errors.message}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className=" text-end">
                  <Button btnText="Send Massage" />
                </div>
              </Form>
            )}
          </Formik>
  )
}

export default ContactForm
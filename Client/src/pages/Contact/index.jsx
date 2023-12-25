import React from "react";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import ContactForm from "../../components/ContactPageComponents/ContactForm";

const Contact = () => {
  return (
    <section id="contact-page" className="wrapper pt-6 pb-24">
      <h4 className="py-12 font-semibold">Home / Contact</h4>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-32  items-start">
        <div className="contact-left">
          <div className="call-us section_border space-y-3 pb-6">
            <div className="flex items-center gap-3">
              <div className=" bg-primary rounded-full text-white p-2">
                <IoCallOutline size={25} />
              </div>
              <h6 className=" font-semibold">Call To Us</h6>
            </div>
            <p className=" text-[0.875rem]">
              We are available 24/7, 7 days a week.
            </p>
            <p className=" text-[0.875rem]">Phone: +8801611112222</p>
          </div>
          <div className="write-us space-y-3 py-8">
            <div className="flex items-center gap-3">
              <div className=" bg-primary rounded-full text-white p-2">
                <IoMailOutline size={25} />
              </div>
              <h6 className=" font-semibold">Call To Us</h6>
            </div>
            <p className=" text-[0.875rem]">
              We are available 24/7, 7 days a week.
            </p>
            <p className=" text-[0.875rem]">Phone: +8801611112222</p>
          </div>
        </div>

        <div className="contact-right  xl:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;

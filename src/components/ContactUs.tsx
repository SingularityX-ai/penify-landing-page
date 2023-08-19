import React from 'react';

import config from '../config/index.json';
import ContactUsBox from './ContactUsBox';
import Divider from './Divider';

const ContactUs = () => {
  const { contactus } = config;
  const [firstItem] = contactus.items;

  return (
    <section className={`bg-background py-8`} id="contactus">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {contactus.title}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 flex flex-col`}>
            <ContactUsBox />
          </div>
          <div className={`w-full sm:w-1/2 flex flex-col pl-8`}>
            <div className="flex-grow">{/* Rest of the content */}</div>
            <img
              className="self-end h-12/12"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

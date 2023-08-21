import React from 'react';

import config from '../config/config';
import configJson from '../config/index.json';
import ContactUsBox from './ContactUsBox';
import Divider from './Divider';

const ContactUs = () => {
  const { contactus } = configJson;
  const [firstItem] = contactus.items;
  // const apiUrl = config[environment]?.apiUrl;

  const privacyPolicyUrl = `${config.production?.apiUrl}/privacy-policy`;
  return (
    <section
      className={`bg-background py-8 justify-center flex flex-col items-center`}
      id="contactus"
    >
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
      <div className="flex items-center mt-6 text-center">
        <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
          &copy; {new Date().getFullYear()} Property of Snorkell.ai |{' '}
          <a target="_blank" href={privacyPolicyUrl} rel="noreferrer">
            Terms and Conditions
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactUs;

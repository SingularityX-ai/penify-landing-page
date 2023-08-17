import { Fragment } from 'react';

import { Popover } from '@headlessui/react';
import { MailIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

export default function ContactUsBox() {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r ">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-8 rounded-xl shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Contact Us</h1>
        <form className="space-y-4">
          <input
            className="w-full p-2 border rounded-md"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full p-2 border rounded-md"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-2 border rounded-md"
            rows={4}
            placeholder="Your Message"
          />
          <motion.button
            whileHover="hover"
            variants={buttonVariants}
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded-md"
          >
            Send
          </motion.button>
        </form>
        <Popover className="relative">
          {() => (
            <Fragment>
              <Popover.Button className="flex items-center space-x-2 text-blue-600">
                <MailIcon className="h-6 w-6" aria-hidden="true" />
                <span>info@example.com</span>
              </Popover.Button>
            </Fragment>
          )}
        </Popover>
      </motion.div>
    </div>
  );
}

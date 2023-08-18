import { Fragment } from 'react';

import { Popover } from '@headlessui/react';
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
    <div className="relative w-full h-full">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute inset-0 bg-white p-8 rounded-xl shadow-md space-y-4"
      >
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
            rows={9}
            placeholder="Your Message"
          />
          <motion.button
            whileHover="hover"
            variants={buttonVariants}
            type="submit"
            className="w-full p-2 bg-main-blue text-white rounded-md"
          >
            Send
          </motion.button>
        </form>
        <Popover className="relative">
          {() => (
            <Fragment>
              <Popover.Button className="flex items-center space-x-2 text-blue-600"></Popover.Button>
            </Fragment>
          )}
        </Popover>
      </motion.div>
    </div>
  );
}

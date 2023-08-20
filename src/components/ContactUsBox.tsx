import { Fragment, useState } from 'react';

import { Popover } from '@headlessui/react';
import { motion } from 'framer-motion';

import axiosInstance from '../config/axiosConfig';

export default function ContactUsBox() {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post('/contact', formData);
      console.log(response.data);
      // Reset the form data
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative w-full h-full">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute inset-0 bg-white p-8 rounded-xl shadow-md space-y-4"
        >
          <h2 className="text-2xl font-bold text-center">
            We will contact you shortly!
          </h2>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute inset-0 bg-white p-8 rounded-xl shadow-md space-y-4"
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
            />
            <input
              className="w-full p-2 border rounded-md"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
            <textarea
              className="w-full p-2 border rounded-md"
              rows={9}
              placeholder="Your Message"
              value={formData.message}
              onChange={(event) =>
                setFormData({ ...formData, message: event.target.value })
              }
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
      )}
    </div>
  );
}

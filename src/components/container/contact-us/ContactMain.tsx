import Image from "next/image";
import ContactImg from "public/asset/illustration-contact/contact-us.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

type FieldData = {
  value: string;
  isFocused: boolean;
  error: string | null;
};

type FormData = {
  fullName: FieldData;
  email: FieldData;
  msg: FieldData;
};

const ContactMain = () => {
  // Define initial form state as a constant so it can be reused
  const initialFormState: FormData = {
    fullName: { value: "", isFocused: false, error: null },
    email: { value: "", isFocused: false, error: null },
    msg: { value: "", isFocused: false, error: null },
  };

  const [formData, setFormData] = useState<FormData>(initialFormState);

  const patterns = {
    fullName: /^[A-Za-z]+( [A-Za-z]+)*$/i,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
    msg: /^.{0,350}$/,
  };

  const errorMessages = {
    fullName: "Name should contain only alphabets.",
    email: "Not a valid email address",
    msg: "Message is too long.",
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    const isValid = patterns[name as keyof FormData].test(value);
    const error = isValid ? null : errorMessages[name as keyof FormData];

    setFormData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name as keyof FormData], value, error },
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Data submitted for: " + formData.fullName.value);

    setFormData(initialFormState);

    toast.success("Message Delievered", {
      position: "bottom-left",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleFocus = (fieldName: keyof FormData) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], isFocused: true },
    }));
  };

  const handleBlur = (fieldName: keyof FormData) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], isFocused: false },
    }));
  };

  return (
    <section className="contactus__main pb-0">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-lg-6">
            <div className="" data-aos="fade-up" data-aos-duration="600">
              <h2 className="h3 mb-4">
                Have something in mind? {""}
                <span>Let&apos;s talk.</span>
              </h2>

              <Image src={ContactImg} alt="customer support" priority />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div data-aos="fade-up" data-aos-duration="600">
              <form className="p-3 p-xl-4" onSubmit={handleSubmit}>
                <div className="mb-3 form-floating">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="form-control"
                    placeholder="Enter Full Name"
                    value={formData.fullName.value}
                    onChange={handleChange}
                    onFocus={() => handleFocus("fullName")}
                    onBlur={() => handleBlur("fullName")}
                    required
                  />

                  <label htmlFor="fullName">Enter Full Name</label>

                  {formData.fullName.isFocused && formData.fullName.error && (
                    <p>{formData.fullName.error}</p>
                  )}
                </div>

                <div className="mb-3 form-floating">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    value={formData.email.value}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                    required
                  />

                  <label htmlFor="email">Enter Your Email</label>

                  {formData.email.isFocused && formData.email.error && (
                    <p>{formData.email.error}</p>
                  )}
                </div>

                <div className="mb-3 form-floating">
                  <textarea
                    name="msg"
                    id="msg"
                    className="form-control"
                    placeholder="Write A Message"
                    value={formData.msg.value}
                    onChange={handleChange}
                    onFocus={() => handleFocus("msg")}
                    onBlur={() => handleBlur("msg")}
                    style={{ minHeight: "160px" }}
                    required
                  ></textarea>

                  <label htmlFor="msg">Write A Message</label>

                  {formData.msg.isFocused && formData.msg.error && (
                    <p>{formData.msg.error}</p>
                  )}
                </div>

                <div className="form-cta justify-content-start">
                  <button type="submit" className="btn btn--nonary">
                    Send Message
                    <i className="fa-solid fa-paper-plane ms-2"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;

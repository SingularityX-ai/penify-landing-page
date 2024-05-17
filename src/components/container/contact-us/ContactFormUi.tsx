import Image from "next/image";
import ContactImg from "@public/asset/illustration-contact/contact-us.svg";
import { FormData } from "./ContactFormLogic";

type ContactFormUIProps = {
  formData: FormData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleFocus: (fieldName: keyof FormData) => void;
  handleBlur: (fieldName: keyof FormData) => void;
};

export const ContactFormUi = ({
  formData,
  handleChange,
  handleSubmit,
  handleFocus,
  handleBlur,
}: ContactFormUIProps) => {
  return (
    <section className="contactus__main pb-0">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-lg-6">
            <div
              data-aos="fade-up"
              data-aos-duration="600">
              <h2 className="h3 mb-4">
                Have something in mind?
                <span> Let&apos;s talk.</span>
              </h2>
              <div className="mb-4">
                <p className="text-white">
                We are here to help and answer any question you might have. 
                </p>
                <p className="text-white">
                We look forward to hearing from you.
                </p>
                <p className="text-white">
                Mail us: <a href="mailto:support@penify.dev">support@penify.dev</a>
                </p>
                <p className="text-white">
                Call us: <a href="tel:+91-959-158-3843">+91-959-158-3843</a>
                </p>
                <p className="text-white">
                Office: Snorkell Associates and Co., Office No. 415 OK Plus Spaces, Near Apex Circle, Malviya Industrial Area, Jaipur - 302017, Rajasthan, India
                </p>
                
              </div>
              <Image
                src={ContactImg}
                alt="customer support"
                priority
              />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200">
              <form
                className="p-3 p-xl-4"
                onSubmit={handleSubmit}>
                <fieldset>
                  <div className="mb-4 form-floating">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      aria-label="fullName"
                      className="form-control"
                      placeholder="Enter Full Name"
                      value={formData.fullName.value}
                      onChange={handleChange}
                      onFocus={() => handleFocus("fullName")}
                      onBlur={() => handleBlur("fullName")}
                      required
                    />
                    <label htmlFor="fullName">Enter Full Name</label>

                    {formData.fullName.isFocused && formData.fullName.error && <p>{formData.fullName.error}</p>}
                  </div>

                  <div className="mb-4 form-floating">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      aria-label="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      value={formData.email.value}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={() => handleBlur("email")}
                      required
                    />

                    <label htmlFor="email">Enter Your Email</label>

                    {formData.email.isFocused && formData.email.error && <p>{formData.email.error}</p>}
                  </div>

                  <div className="mb-4 form-floating">
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
                      required></textarea>

                    <label htmlFor="msg">Write A Message</label>

                    {formData.msg.isFocused && formData.msg.error && <p>{formData.msg.error}</p>}
                  </div>

                  <div className="form-cta justify-content-start">
                    <button
                      type="submit"
                      className="btn btn--nonary">
                      Send Message
                      <i className="fa-solid fa-paper-plane ms-2"></i>
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

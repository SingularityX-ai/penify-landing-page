import SuccessIcon from "@public/asset/illustration-contact/success-submission.svg";
import FailureIcon from "@public/asset/illustration-contact/failure-submission.svg";
import Image from "next/image";

type ContactModalProps = {
  promised: "success" | "failure";
  closeBtn: () => void;
};

export const ContactModal = ({ promised, closeBtn }: ContactModalProps) => {
  const ContactModalContent = {
    imgSrc: promised === "success" ? SuccessIcon : FailureIcon,
    title: promised === "success" ? <h5>Thank You for Your Message!</h5> : <h5>Oops! Something Went Wrong</h5>,
    brief:
      promised === "success" ? (
        <p>
          Thank you for reaching out to us. Your message has been successfully sent. We value your interest and will
          respond promptly. For any further questions, feel free to reach out again.
        </p>
      ) : (
        <p>
          We encountered a technical issue and couldn&apos;t send your message. It might be a network or server problem.
          Please try resending shortly or{" "}
          <a
            href="mailto:info@penify.dev"
            style={{ color: "#4569e7" }}>
            email us
          </a>
          . Your message is important to us, and we apologize for this inconvenience. Thank you for your patience.
        </p>
      ),
  };
  return (
    <div
      className="modal contact-modal"
      role="dialog"
      tabIndex={-1}>
      <div
        className="modal-dialog"
        role="document"
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-delay="100">
        <div className="modal-content">
          <div className="modal-body">
            <Image
              src={ContactModalContent.imgSrc}
              alt="submission alert icon"
            />

            {ContactModalContent.title}

            {ContactModalContent.brief}

            <button
              type="button"
              className="btn btn--nonary"
              onClick={closeBtn}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

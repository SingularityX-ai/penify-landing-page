import { ChangeEvent, FormEvent, useState } from "react";
import { ContactFormUi } from "./ContactFormUi";
import { axiosInstance } from "@/config/axiosConfig";
import { ContactModal } from "./ContactModal";
import { trackFormSubmission } from "@/utils/gtag";

type FieldData = {
  value: string;
  isFocused: boolean;
  error: string | null;
};

export type FormData = {
  fullName: FieldData;
  email: FieldData;
  msg: FieldData;
};

// Define initial form state as a constant so it can be reused
const initialFormState: FormData = {
  fullName: { value: "", isFocused: false, error: null },
  email: { value: "", isFocused: false, error: null },
  msg: { value: "", isFocused: false, error: null },
};

const patterns = {
  fullName: /^[A-Za-z]+( [A-Za-z]+)*$/i,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
  msg: /^.{0,750}$/,
};

const errorMessages = {
  fullName: "Name should contain only alphabets.",
  email: "Not a valid email address",
  msg: "Message is too long.",
};

const ContactFormLogic = () => {
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalStatus, setModalStatus] = useState<"success" | "failure">("success");

  const handleClose = () => setShowModal(false);

  const validateField = (name: keyof FormData, value: string): string | null => {
    const isValid = patterns[name].test(value);
    return isValid ? null : errorMessages[name];
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    const error = validateField(name as keyof FormData, value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name as keyof FormData], value, error },
    }));
  };

  const handleFieldFocusBlur = (fieldName: keyof FormData, isFocused: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], isFocused },
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const sendData = {
      name: formData.fullName.value,
      email: formData.email.value,
      message: formData.msg.value,
    };

    try {
      await axiosInstance.post("/contact", sendData);
      setModalStatus("success");
      setShowModal(true);
    } catch (err) {
      setModalStatus("failure");
      setShowModal(true);
    } finally {
      trackFormSubmission([sendData.email]);
      setFormData(initialFormState);
    }
  };

  return (
    <>
      <ContactFormUi
        formData={formData}
        handleChange={handleFieldChange}
        handleSubmit={handleSubmit}
        handleFocus={(fieldName) => handleFieldFocusBlur(fieldName, true)}
        handleBlur={(fieldName) => handleFieldFocusBlur(fieldName, false)}
      />

      {showModal && (
        <ContactModal
          promised={modalStatus}
          closeBtn={handleClose}
        />
      )}
    </>
  );
};

export default ContactFormLogic;

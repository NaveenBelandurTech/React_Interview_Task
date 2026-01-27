import "./contactform.css";
import { useState } from "react";

const ContactForm = () => {
  const [succes, setSuccess] = useState({
    message: "",
    method: false,
  });
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    nameError: "",
    messageError: "",
    emailError: "",
  });

  const validationName = (value) => {
    if (value == "") {
      setError({
        nameError: "Name Cannot Be Empty",
      });
      return true;
    } else if (value.length > 20) {
      setError({
        nameError: "Name Cannot Be More Than 20 Words",
      });
      return true;
    } else {
      setError({
        nameError: "",
      });
      return false;
    }
  };

  const validationEmail = (value) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (value == "") {
      setError({
        emailError: "Email Cannot Be Empty",
      });
      return true;
    } else if (!emailRegex.test(value)) {
      setError({
        emailError: "Provide us a valid email address",
      });
      return true;
    } else {
      setError({
        messageError: "",
      });
      return false;
    }
  };

  const validationMessage = (value) => {
    if (value == "") {
      setError({
        messageError: "Message Cannot Be Empty",
      });
      return true;
    } else if (value.length > 20) {
      setError({
        messageError: "Message Cannot Be More than 20 words",
      });
      return true;
    } else {
      setError({
        messageError: "",
      });
      return false;
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.name == "name") {
      validationName(value);
    }
    if (e.target.name == "email") {
      validationEmail(value);
    }
    if (e.target.name == "message") {
      validationMessage(value);
    }
    setFields({
      ...fields,
      [e.target.name]: value,
    });
  };

const handleClick = (e) => {
  e.preventDefault();

  const nameError = validationName(fields.name);
  const emailError = validationEmail(fields.email);
  const messageError = validationMessage(fields.message);

  setError({
    nameError: nameError ? "Name cannot be empty" : "",
    emailError: emailError ? "Email cannot be empty" : "",
    messageError: messageError ? "Message cannot be empty" : "",
  });

  if (nameError || emailError || messageError) {
    return;
  }


  setSuccess({
    message: "Thank You User",
    method: true,
  });

  setFields({
    name: "",
    email: "",
    message: "",
  });
};

  return (
    <section className="container_form">
      <form className="form">
        <label>Name</label>
        <input
          type="text"
          maxLength={21}
          value={fields.name}
          onChange={handleChange}
          name="name"
          placeholder="Your Name"
        />
        {error.nameError}
        <label>Email</label>
        <input
          type="text"
          value={fields.email}
          onChange={handleChange}
          name="email"
          placeholder="Your Email"
        />
        {error.emailError}
        <label>Message</label>
        <textarea
          type="text"
          value={fields.message}
          onChange={handleChange}
          name="message"
        ></textarea>
        {error.messageError}
        <button onClick={handleClick}>Submit</button>
        {succes.method ? (
          <div className="container__">
            <p className="text__align">{succes.message}</p>
          </div>
        ) : (
          ""
        )}
      </form>
    </section>
  );
};

export default ContactForm;

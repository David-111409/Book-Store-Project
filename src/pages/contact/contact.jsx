import { useState } from "react";
import { toast } from "react-toastify";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      return toast.error("Name is required");
    }
    if (sub.trim() === "") {
      return toast.error("Subject is required");
    }
    if (email.trim() === "") {
      return toast.error("Email is required");
    }

    if (text.trim() === "") {
      return toast.error("Your message is required");
    }

    setEmail("");
    setName("");
    setSub("");
    setText("");

    return toast.success("Message sent successful");
  };
  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-house-fill"></i>
            Address
          </div>
          <p className="contact-item-text">Iraq-Baghdad-Alrashid St</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-telephone-fill"></i>
            Phone
          </div>
          <p className="contact-item-text">123-456-789</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-envelope-fill"></i>
            Email
          </div>
          <p className="contact-item-text">info@fakeemail.com</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <h2 className="contact-form-title">Contact Us Form</h2>
        <div className="contact-input-wrapper">
          <input
            type="text"
            placeholder="Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject *"
            value={sub}
            onChange={(e) => setSub(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Your Message *"
          className="contact-textarea"
          rows="5"
        ></textarea>
        <button className="contact-btn">Send</button>
      </form>
    </section>
  );
};

export default Contact;

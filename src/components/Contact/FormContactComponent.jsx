import React, { useState } from "react";
import TitlePageComponent from "../TitlePage/TitlePageComponent";
import DOMPurify from "dompurify";
import "./FormContactStyles.css";

const FormContactComponent = ({ page }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    switch (id) {
      case "name":
        setName(sanitizedValue);
        break;
      case "email":
        setEmail(sanitizedValue);
        break;
      case "phone":
        setPhone(sanitizedValue);
        break;
      case "exampleFormControlTextarea1":
        setMessage(sanitizedValue);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, message });
    setEmail("");
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div
      className={`container-fluid ${
        page === "home" ? "bg-contact-second" : "bg-color-container-contact"
      }`}
    >
      <TitlePageComponent
        title="Get In Touch"
        description="Hey! Lets Talk"
        page={page}
      />

      <div className="container">
        <div className="row">
          <div className="col-md" />
          <form className="col-md-8 card p-4 mb-5 me-3" onSubmit={handleSubmit}>
            <div className="my-3">
              <input
                type="text"
                className="form-control bg-input-contact py-2"
                id="name"
                placeholder="Name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control bg-input-contact py-2"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control bg-input-contact py-2"
                id="phone"
                placeholder="Phone"
                value={phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control bg-input-contact py-2"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Your Message"
                value={message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn-custom-contact">
              Send Now
            </button>
          </form>

          <div className="col-md-3 card p-4 mb-5">
            <div className="d-flex flex-column">
              <div>
                <div className="d-flex align-items-center">
                  <div className="p-2 color-primary-contact ">
                    <i className="icon-contact border bg-body-tertiary rounded bi bi-telephone-inbound-fill  fs-4"></i>
                  </div>
                  <div className="p-2 flex-grow-1">
                    <p className="mb-0 fw-bold color-primary-contact ">
                      Call Anytime
                    </p>
                    <p>
                      + 91 23678 27867 <br /> + 91 67678 92878
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div className="p-2 color-primary-contact ">
                    <i className=" icon-contact border bg-body-tertiary rounded bi bi-envelope-fill  fs-4"></i>
                  </div>
                  <div className="p-2 flex-grow-1">
                    <p className="mb-0 fw-bold color-primary-contact">
                      Send Email
                    </p>
                    <p>
                      connect@itfirms.com <br />
                      hello@itfirms.com
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div className="p-2 color-primary-contact ">
                    <i className=" icon-contact border bg-body-tertiary rounded bi bi-geo-alt-fill  fs-4"></i>
                  </div>
                  <div className="p-2 flex-grow-1">
                    <p className="mb-0 fw-bold color-primary-contact">
                      Visit Us
                    </p>
                    <p>
                      20 Island Park Road, <br />
                      New Jearsy, New York,
                    </p>
                  </div>
                </div>
              </div>
              <h5 className="fw-bold text-center mb-3">Follows Us</h5>
              <div className="d-flex flex-row mb-3 justify-content-center text-white">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  <i className="border bg-primary-contact icon-contact rounded bi bi-linkedin fs-4 me-2"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  <i className="border bg-primary-contact icon-contact rounded bi bi-instagram fs-4 me-2"></i>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  <i className="border bg-primary-contact icon-contact rounded bi bi-facebook fs-4 me-2"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  <i className="border bg-primary-contact icon-contact rounded bi bi-twitter fs-4 me-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md" />
        </div>
      </div>
    </div>
  );
};

export default FormContactComponent;

import React, { useState } from "react";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import PlaceIcon from "@material-ui/icons/Place";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { handleSubmit } = useForm();
  const serviceID = "service_ID";
  const templateID = "template_Id";
  const userID = "user_Igru5A2BUCrFoOcIT7lBY";
  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };
  function sendEmail(serviceID, templateID, variables, userID) {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "I Got your message! I will contact you as soon as possible."
        );
      })
      .catch((err) => console.error(`something went wrong ${err}`));
  }

  return (
    <div id="contact" className="contact-section">
      <div className="container">
        <div className="row justify-content-center mb-4 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h1 className="mb-4 contact">Contact Me</h1>
          </div>
        </div>

        <div className="row d-flex justify-content-center contact-info mb-5">
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box text-center p-4 shadow">
              <div className="icon d-flex align-items-center justify-content-center">
                <CallIcon />
              </div>
              <div>
                <h3 className="mb-4">Contact Number</h3>
                <p>
                  <a>+1 512-998-4240</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex ftco-animate">
            <div className="align-self-stretch box text-center p-4 shadow">
              <div className="icon d-flex align-items-center justify-content-center">
                <EmailIcon />
              </div>
              <div>
                <h3 className="mb-4">Email Address</h3>
                <p>
                  <a href="mailto:krishna.kalluri13@gmail.com">
                    krishna.kalluri13@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box text-center p-4 shadow">
              <div className="icon d-flex align-items-center justify-content-center">
                <PlaceIcon />
              </div>
              <div>
                <h3 className="mb-4">Location</h3>
                <p>
                  <a>Georgia, United States</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <span className="text-center success-message ">{successMessage}</span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                maxLength="100"
                required
              />
              <input
                id="phone"
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                required
                minLength="9"
                maxLength="11"
              />
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
              />
              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <textarea
                id="description"
                type="text"
                className="form-control"
                placeholder="Description"
                name="description"
              ></textarea>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

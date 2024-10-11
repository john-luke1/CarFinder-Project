import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ModalComponent from "../components/ModalSuccess"; // Import the Modal
import "../style/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationErrors({ ...validationErrors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/message", formData);
      if (response.status === 200) {
        setShowModal(true); // Show modal on success
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage("Failed to send message. Please try again later.");
      } else if (error.request) {
        setErrorMessage("No response from the server. Please check your network.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const toggleModal = () => setShowModal(!showModal); // Function to toggle the modal

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Label for="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={validationErrors.name ? "is-invalid" : ""}
                  />
                  {validationErrors.name && (
                    <div className="invalid-feedback">{validationErrors.name}</div>
                  )}
                </FormGroup>

                <FormGroup className="contact__form">
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={validationErrors.email ? "is-invalid" : ""}
                  />
                  {validationErrors.email && (
                    <div className="invalid-feedback">{validationErrors.email}</div>
                  )}
                </FormGroup>

                <FormGroup className="contact__form">
                  <Label for="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className={`textarea form-control ${
                      validationErrors.message ? "is-invalid" : ""
                    }`}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {validationErrors.message && (
                    <div className="invalid-feedback">{validationErrors.message}</div>
                  )}
                </FormGroup>

                {errorMessage && <p className="text-danger">{errorMessage}</p>}

                <button className="contact__btn" type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  123 Mahay, Butuan City, Philippines
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">0995345875365</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">mjoyperez@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link to={item.url} key={index} className="social__link-icon">
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Reusable Modal for Success Notification */}
          <ModalComponent
            isOpen={showModal}
            toggle={toggleModal}
            title="Message Sent!"
            content="Your message has been sent successfully."
            buttonText="Close"
          />
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;

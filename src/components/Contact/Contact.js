import React from "react";
import Form from "./Form";
import ContactBanner from "./ContactBanner";
import { v4 as uuidv4 } from 'uuid'

const Contact = ({ contactData , setProgress}) => {
  setProgress(100);
  return (
    <>
      <ContactBanner />

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className="fal fa-map" />
              {/* <p>56 Glassford Street Glasgow G1 1UL New York</p> */}
              <p>562 Wellington Road, Street 32, San Fransisco</p>
            </li>
            <li>
              <i className="far fa-envelope" />
              <p>contact@gmail.com</p>
            </li>
            <li>
              <i className="fas fa-phone-alt" />
              <p>+01 2222 365 /(+91) 01 2345 6789</p>
            </li>
            <li>
              <i className="far fa-clock" />
              <p>10:00 - 18:00, Mon - Sat </p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9992.433793825036!2d85.30972173262028!3d27.690757182841256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19df4dcfdbe3%3A0x72f7df19033fe07a!2scara%20fashion%20collecton!5e0!3m2!1sen!2snp!4v1673252427434!5m2!1sen!2snp"
            width={600}
            height={450}
            title="location"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section id="form-details">
        <Form />

        <div className="people">
          {contactData.map((user, index) => (
            <div className="people" key = {uuidv4()}>
              <img src={user.imageSrc} alt="ContactUser" />
              <p>
                <span>{user.name}</span>
                <br />
                {user.position} <br />
                Phone: {user.phone}
                <br />
                Email: {user.email}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;

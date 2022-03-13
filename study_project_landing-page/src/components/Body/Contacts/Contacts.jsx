import "./Contacts.scss";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

const Contacts = React.memo((props) => {
  const contacts = yup.object().shape({
    email: yup.string().required("Enter your email,please..."),
    textarea: yup
      .string()
      .min(10, "Too short message...")
      .max(300, "Too long message...")
      .required("You forgot about your message..."),
  });

  return (
    <div id="contacts" className="contacts_wrapper">
      <div className="contacts">
        <div className="left">
          <img
            src={require("../../../images/contact-book.png")}
            alt="contact picture"
          />
        </div>
        <div className="right">
          <h1>Contacts</h1>
          <Formik
            initialValues={{ email: "", textarea: "" }}
            validationSchema={contacts}
            onSubmit={(values, { resetForm }) => {
              props.setContactButton(true);
              alert(JSON.stringify(values, null, 2));
              resetForm({ email: "", textarea: "" });
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              dirty,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => (
              <>
                <div className="input_email">
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    placeholder="Me@mail.com"
                    name="email"
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <div className="errors">{errors.email}</div>
                  ) : null}
                </div>
                <div className="input_text">
                  <textarea
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your message here..."
                    cols="30"
                    rows="10"
                    name="textarea"
                    value={values.textarea}
                  ></textarea>
                  {errors.textarea && touched.textarea ? (
                    <div className="errors">{errors.textarea}</div>
                  ) : null}
                </div>
                <div className="submit_button">
                  <button
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Send message
                  </button>
                  {isValid && props.pushedContactButton ? (
                    <div className="reply">
                      Thanks for contact me, I will reply ASAP!
                    </div>
                  ) : null}
                </div>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
});

export default Contacts;

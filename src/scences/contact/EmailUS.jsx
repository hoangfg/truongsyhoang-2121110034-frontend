import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function EmailUS() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kijegl4",
        "template_wy60pyo",
        form.current,
        "T4i5ADUmLLebWdlnZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("message error");
        }
      );
  };

  return (
    <div>
      <h4>Email Us</h4>
      <form ref={form} onSubmit={sendEmail} className="form-horizontal">
        <fieldset>
          <div className="control-group">
            <input
              type="text"
              placeholder="name"
              className="input-xlarge"
              name="user_name"
            />
          </div>
          <div className="control-group">
            <input
              type="text"
              placeholder="email"
              className="input-xlarge"
              name="user_email"
            />
          </div>

          <div className="control-group">
            <textarea
              rows={3}
              id="textarea"
              className="input-xlarge"
              defaultValue={""}
              name="message"
            />
          </div>
          <input type="submit" value="Send" />
        </fieldset>
      </form>
    </div>
  );
}

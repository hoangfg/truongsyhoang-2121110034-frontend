import React from "react";
import ContactDetails from "./ContactDetails";
import EmailUS from "./EmailUS";

export default function Contact() {
  return (
    <div className="well well-small">
      <h1>Visit us</h1>
      <hr className="soften" />
      <div className="row-fluid">
        <div className="span8 relative">
          <ContactDetails />
        </div>
        <div className="span4">
          <EmailUS />
        </div>
      </div>
    </div>
  );
}

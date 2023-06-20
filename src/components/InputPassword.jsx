import React from "react";

export default function InputPassword(props) {
    const register = props.register
    const label = props.label
    const validateFunction = props.validateFunction
  const togglePassword = (e) => {
    const password = e.target.previousElementSibling;
    const type = password.getAttribute("type") === "password" ? 'text' : 'password';
    password.setAttribute("type", type);
    e.target.classList.toggle("fa-eye-slash");
  };
  return (
    <>
      <input
        {...register(label, {
          validate: validateFunction,
          required: "true",
          pattern:
            /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/,
        })}
        type="password"
        className="span3"
        placeholder="Password"
      />
      <i
        className="fa fa-eye"
        style={{
          marginLeft: "-30px",
          cursor: "pointer",
          verticalAlign: "2px",
        }}
        onClick={togglePassword}
        aria-hidden="true"
      ></i>
    </>
  );
}

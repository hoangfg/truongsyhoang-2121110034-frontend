import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputPassword from "../components/InputPassword";
import { userApi } from "../Api/userApi";
import { setCurrent, setToken } from "../state/userSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Loading1 from "../components/Loading1";
import { Navigate, useNavigate } from "react-router-dom";
export default function Register() {
  const [loading, setLoading] = useState(false);
 const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const validateConfirmPAssword = (value) => {
    var { password } = getValues();
    return value == password;
  };
  var myView2 = loading === true ? <Loading1 /> : "";
  const onSubmit = (data) => {
    // console.log(data);
    // alert('call api register')
    const callRegister = async (data) => {
      try {
        setLoading(true);
        
        const response = await userApi.register(data);
        // console.log(response);
        dispatch(setCurrent(response.data.user));
        dispatch(setToken(response.data.jwt));

        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.jwt));
        toast.success("Register success");
        setLoading(false);
        reset();
        navigate("/login"); 
      } catch (error) {
        toast.error("register error \n" + error);
        setLoading(false);
      }
    };
    callRegister(data);
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ul className="breadcrumb">
        <li>
          <a href="index.html">Home</a> <span className="divider">/</span>
        </li>
        <li className="active">Registration</li>
      </ul>
      <h3> Registration</h3>
      <hr className="soft" />
      <div className="well">
        <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
          <h3>Your Personal Details</h3>
          <div className="control-group">
            <label className="control-label" htmlFor="inputUname">
              Username <sup>*</sup>
            </label>
            <div className="controls">
              <input
                {...register("username", { required: true, minLength: 2 })}
                type="text"
                id="inputUname"
                placeholder="UserName"
              />
              {errors.username?.type === "required" && (
                <p style={{ color: "red" }}>Username is required</p>
              )}
              {errors.username?.type === "minLength" && (
                <p style={{ color: "red" }}>
                  Username must have at least 2 character
                </p>
              )}
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" htmlFor="inputEmail">
              Email <sup>*</sup>
            </label>
            <div className="controls">
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                })}
                type="text"
                placeholder="Email"
                id="inputEmail"
              />
              {errors.email?.type === "required" && (
                <p style={{ color: "red" }}>Email is required</p>
              )}
              {errors.email?.type === "pattern" && (
                <p style={{ color: "red" }}>wrong email</p>
              )}
            </div>
          </div>
          <div className="control-group">
            <label className="control-label">
              Password <sup>*</sup>
            </label>
            <div className="controls">
              {/* <input
                {...register("password")}
                type="password"
                placeholder="Enter Password"
                id="inputPass"
              /> */}
              <InputPassword
                label="password"
                register={register}
                validateFunction={() => {
                  return true;
                }}
              />
              {errors.password?.type === "required" && (
                <p style={{ color: "red" }}>Password is required</p>
              )}
              {errors.password?.type === "pattern" && (
                <p style={{ color: "red" }}>
                  Password at least 8 character, 1 uppcase, 1 lowercase, 1
                  number and 1 specialCharacter
                </p>
              )}
            </div>
          </div>
          <div className="control-group">
            <label className="control-label">
              Confirm Password <sup>*</sup>
            </label>
            <div className="controls">
              <InputPassword
                label="confirmPassword"
                register={register}
                validateFunction={validateConfirmPAssword}
              />
              {errors.confirmPassword?.type === "required" && (
                <p style={{ color: "red" }}>confirmPassword is required</p>
              )}
              {errors.confirmPassword?.type === "pattern" && (
                <p style={{ color: "red" }}>
                  Password at least 8 character, 1 uppcase, 1 lowercase, 1
                  number and 1 specialCharacter
                </p>
              )}
              {errors.confirmPassword?.type === "validate" && (
                <p style={{ color: "red" }}>
                  password and confirm password not match
                </p>
              )}
            </div>
          </div>

          <div className="control-group">
            <div className="controls">
              {myView2}
              <input
                type="submit"
                name="submitAccount"
                defaultValue="Register"
                className="exclusive shopBtn"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

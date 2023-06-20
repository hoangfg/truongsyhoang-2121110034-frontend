import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputPassword from "../components/InputPassword";
import { userApi } from "../Api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent, setToken, setRole } from "../state/userSlice";
import { ToastContainer, toast } from "react-toastify";
import Loading1 from "../components/Loading1";

import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";



export default function Login() {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("Public");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  var myView2 = loading === true ? <Loading1 /> : "";

  const onSubmit = (data) => {
    // alert("call api login");
    const callLogin = async (data) => {
      try {
        setLoading(true);

        const response = await userApi.login(data);
        console.log(response);

        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.jwt);
        dispatch(setCurrent(response.data.user));
        dispatch(setToken(response.data.jwt));
        setLoading(false);
        reset();
        // get user info
        const getInfo = async () => {
          var response1 = await userApi.me({ populate: "*" });
          console.log("r1", response1);
          localStorage.setItem("role", response1.data.role.name);
          dispatch(setRole(response1.data.role.name));
          // console.log(response1.data.user);
          setUserRole(response1.data.role.name);
        };
        getInfo();
        // navigate(-1);
        toast.success("login success");
      } catch (error) {
        toast.error("login error \n" + error);
        setLoading(false);
      }
    };
    callLogin(data);
  };
  return (
    <div>
      {userRole === "admin-web" && <Navigate to="/admin" replace={true} />}
      {userRole === "Authenticated" && <Navigate to="/" replace={true} />}

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
        <li className="active">Login</li>
      </ul>
      <h3> Login</h3>
      <hr className="soft" />
      <div className="row">
        <div className="span4">&nbsp;</div>

        <div className="span4">
          <div className="well">
            <h5>ALREADY REGISTERED ?</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="control-group">
                <label className="control-label" htmlFor="inputUname">
                  Username <sup>*</sup>
                </label>
                <div className="controls">
                  <input
                    {...register("identifier", {
                      required: true,
                      minLength: 2,
                    })}
                    type="text"
                    id="inputUname"
                    placeholder="UserName"
                  />
                  {errors.identifier?.type === "required" && (
                    <p style={{ color: "red" }}>Username is required</p>
                  )}
                  {errors.identifier?.type === "minLength" && (
                    <p style={{ color: "red" }}>
                      Username must have at least 2 character
                    </p>
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
                <div className="controls">
                  {myView2}
                  <button type="submit" className="defaultBtn">
                    Sign in
                  </button>{" "}
                  <a href="#st">Forget password?</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

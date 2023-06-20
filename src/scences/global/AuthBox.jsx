import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent, setToken, setRole } from "../../state/userSlice";

export default function AuthBox() {
  var user = useSelector((state) => state.user.current);
  var dispatch = useDispatch();
  var user = useSelector((state) => state.user.current);
  const [userRole, setUserRole] = useState(
    useSelector((state) => state.user.role)
  );
  const handleLogout = () => {
    dispatch(setCurrent({}));
    dispatch(setToken(""));
    localStorage.clear();
    setUserRole("Public");
  };
  //   console.log(user);
  var myView =
    JSON.stringify(user) === "{}" ? (
      <span>
        <Link to="/register">
          <span className="icon-edit" /> Register{" "}
        </Link>
        <Link to="/login">
          <span className="icon-signin" /> login
        </Link>
      </span>
    ) : (
      <span>
        <Link to="/">
          <span className="icon-user" /> {user.username}
        </Link>
        <button onClick={handleLogout} className="nav-link">
          <span className="icon-signout" /> logout
        </button>
      </span>
    );
  //   console.log("My", myView)
  return (
    <>
      {userRole === "Public" && <Navigate to="/" replace={true} />}
      {myView}
    </>
  );
}

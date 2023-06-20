import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent, setToken, setRole } from "../../state/userSlice";

export default function AdminAuthBox() {
  var dispatch = useDispatch();
  var user = useSelector((state) => state.user.current);
  const [userRole, setUserRole] = useState(
    useSelector((state) => state.user.role)
  );
  const handleLogout = () => {
    dispatch(setCurrent({}));
    dispatch(setToken(""));
    localStorage.clear();
    setUserRole('Public')
  };
  //   console.log(user);
  var myView =
    JSON.stringify(user) === "{}" ? (
      <>
        {/* <li className="nav-item">
          <Link to="/register" className="nav-link">
            <span className="icon-edit" /> Register{" "}
          </Link>
        </li> */}
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <span className="icon-signin" /> login
          </Link>
        </li>
      </>
    ) : (
      <>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <span className="icon-user" /> {user.username}
          </Link>
        </li>
        <li className="nav-item">
          <button onClick={handleLogout} className="nav-link">
            <span className="icon-signout" /> logout
          </button>
        </li>
      </>
    );
  //   console.log("My", myView)
  return (
    <>
      {userRole === "Public" && <Navigate to="/" replace={true} />}
      {myView}
    </>
  );
}

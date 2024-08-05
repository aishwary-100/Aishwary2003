import React, { useEffect } from "react";
import { UserCon } from "../Context/UseAuth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const PrivetRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuth } = useContext(UserCon);
  console.log(isAuth);
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return <div>{children}</div>;
};

export default PrivetRoute;

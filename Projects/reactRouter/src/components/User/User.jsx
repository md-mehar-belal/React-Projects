import React from "react";
import { useParams } from "react-router-dom";
import "../../App.css";

function User() {
  const { userid } = useParams();
  return <div className="user-container">User: {userid}</div>;
}

export default User;

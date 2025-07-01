//import { Component } from "react";
import "./error-alert.css";

const ErrorAlert = (props) => {
  //console.log('CardList Component Render');
  const { error } = props;

  return (
    <div className="alert alert-danger" role="alert">
      Message: {error.message}
    </div>
  );
};

export default ErrorAlert;

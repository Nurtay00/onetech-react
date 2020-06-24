import React from "react";
import "./list.css";
export default function Background(props) {
  return (
    <div className="background" onClick={() => props.setAddBool(false)}></div>
  );
}

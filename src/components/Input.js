import React from "react";

export default function Input(props) {
  return (
    <input
      type="text"
      placeholder="Search"
      className="search"
      onChange={(event) => props.filterHandler(event)}
    />
  );
}

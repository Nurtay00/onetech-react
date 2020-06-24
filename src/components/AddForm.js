import React from "react";
import "./list.css";
export default function AddForm(props) {
  var item = {
    name: "",
    phone: "",
  };
  return (
    <div className="module_warp">
      <div className="module">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={(event) => (item.name = event.target.value)}
        />
        <label htmlFor="name">Phone</label>
        <input
          type="text"
          name="phone"
          onChange={(event) => (item.phone = event.target.value)}
        />
        {console.log("item - ", item)}
        <button
          onClick={() => {
            item.id = Math.round(Math.random() * 1000);
            if (item.name === "" || item.phone === "") {
              alert("no phone or name");
            } else {
              return props.addHandler(item);
            }
          }}
        >
          add
        </button>
      </div>
    </div>
  );
}

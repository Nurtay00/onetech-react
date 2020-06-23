import React from "react";
import "./list.css";
export default function AddForm(props) {
  var item = {};
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

            return props.addHandler(item);
          }}
        >
          add
        </button>
      </div>
    </div>
  );
}

import React from "react";
import "./list.css";
export default function List(props) {
  const { filter, deleteHandler } = props;
  return (
    <div className="list-element">
      {filter.map((element, index) => {
        return (
          <div
            className="element0"
            key={index}
            onClick={() => {
              deleteHandler(element);
            }}
          >
            <div style={{ display: "flex" }}>
              <div className="circle"></div>
              <div>
                <div>{element.name}</div>
                <div style={{ color: "gray" }}>{element.phone}</div>
              </div>
            </div>
            <div className="line"></div>
          </div>
        );
      })}
    </div>
  );
}

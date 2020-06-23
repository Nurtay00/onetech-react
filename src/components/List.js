import React from "react";

export default function List(props) {
  const { filter, deleteHandler } = props;
  return (
    <div>
      {filter.map((element, index) => {
        return (
          <div
            className="element0"
            key={index}
            onClick={() => {
              deleteHandler(element.id);
              console.log("delete - ");
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

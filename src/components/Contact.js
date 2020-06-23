import React, { useState } from "react";
import List from "./List";
import Input from "./Input";
import AddForm from "./AddForm";
import Background from "./Background";

const users = [
  { name: "Alex", phone: "1234584", id: 1 },
  { name: "Jack", phone: "6846846", id: 2 },
  { name: "Arman", phone: "7984849", id: 3 },
  { name: "Fedor", phone: "1234584", id: 4 },
  { name: "Lebron", phone: "6846846", id: 5 },
  { name: "Messi", phone: "7984849", id: 6 },
];
var addBool = false;

export default function Contact() {
  const [filter, filterSet] = useState(users);
  function filterHandler(event) {
    const ok = event.target.value.toLocaleLowerCase();
    filterSet(
      users.filter(
        (element) =>
          element.name.toLocaleLowerCase().includes(ok) ||
          element.phone.toLocaleLowerCase().includes(ok)
      )
    );
  }
  function deleteHandler(id) {
    // const newUsers = [];
    // users.forEach((item) => (id !== item.id ? newUsers.push(item) : null));
    // users = newUsers;
  }
  function addHandler(item) {
    users.push(item);
    addBool = false;
    filterSet(0);
    console.log("addBool - ", addBool);
  }

  return (
    <div className="section">
      <div className="warp">
        <Input filterHandler={filterHandler} />
        <List filter={filter} deleteHandler={deleteHandler} />
        <button onClick={() => (addBool = true)}>add</button>

        {!addBool ? null : <AddForm addHandler={addHandler} />}

        {console.log("users - ", users)}
      </div>
      {!addBool ? null : <Background />}
      {console.log("addBool - ", addBool)}
    </div>
  );
}

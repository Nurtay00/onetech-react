import React, { useState } from "react";
import List from "./List";
import Input from "./Input";
import AddForm from "./AddForm";
import Background from "./Background";

const usersarr = [
  { name: "Alex", phone: "1234584", id: 1 },
  { name: "Jack", phone: "6846846", id: 2 },
  { name: "Arman", phone: "7984849", id: 3 },
  { name: "Fedor", phone: "1234584", id: 4 },
  { name: "Lebron", phone: "6846846", id: 5 },
  { name: "Messi", phone: "7984849", id: 6 },
];

export default function Contact() {
  const [users, setUsers] = useState(usersarr);
  const [addBool, setAddBool] = useState(false);
  function filterHandler(event) {
    const ok = event.target.value.toLocaleLowerCase();
    setUsers(
      usersarr.filter(
        (element) =>
          element.name.toLocaleLowerCase().includes(ok) ||
          element.phone.toLocaleLowerCase().includes(ok)
      )
    );
  }
  function deleteHandler(item) {
    let index = users.indexOf(item);
    usersarr.splice(index, 1);

    setUsers([...usersarr]);
  }
  function addHandler(item) {
    users.push(item);
    setAddBool(false);
    setUsers(users);
  }

  return (
    <div className="section">
      <div className="warp">
        <div
          style={{ display: "flex", margin: "0 auto", paddingBottom: "20px" }}
        >
          <Input filterHandler={filterHandler} />
          <button onClick={() => setAddBool(true)}>add</button>
        </div>
        <List filter={users} deleteHandler={deleteHandler} />

        {addBool && <AddForm addHandler={addHandler} />}
      </div>
      {!addBool ? null : <Background setAddBool={setAddBool} />}
    </div>
  );
}

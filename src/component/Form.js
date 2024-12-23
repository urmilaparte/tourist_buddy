import React, { useState } from "react";

function Form() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  function getdata() {
    console.log(name, email);
  }

  return (
    <>
      {
        <ul>
          <li>
            hello {name}, this is your emial{email}
          </li>
        </ul>
      }
      <input
        type="text"
        placeholder="enter the name"
        onChange={(e) => {
          setname(e.target.value);
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="enter email"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />{" "}
      <br />
      <button onClick={getdata}>click</button>
    </>
  );
}

export default Form;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(null);

  const handleChange = (e, stateChanger) => {
    e.preventDefault();
    stateChanger(e.target.value);
  };

  const postProduct =  () => {
     fetch("http://localhost:8080/", {
      method: "POST",
      body: JSON.stringify({
        name,
        image,
        price,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    navigate("/")
  };

  return (
    <section id="add">
      <h1>Add Your Product</h1>

      <form onSubmit={postProduct}>
        <input
          placeholder="name"
          type="text"
          onChange={(e) => handleChange(e, setName)}
        />
        <input
          placeholder="image(url)"
          type="text"
          onChange={(e) => handleChange(e, setImage)}
        />
        <input
          placeholder="price"
          type="text"
          onChange={(e) => handleChange(e, setPrice)}
        />
        <button>Add</button>
      </form>
    </section>
  );
}

export default Add;

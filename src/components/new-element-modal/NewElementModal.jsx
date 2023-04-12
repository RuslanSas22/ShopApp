import React from "react";
import { useState } from "react";
import "./NewElementModal.css";
import { useDispatch } from "react-redux";
import { AddProduct } from "../../redux/actions/productsActions";

function NewElementModal({ setNewModal }) {
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [picture, setPicture] = useState();

  const [weight, setWeight] = useState();

  const dispatch = useDispatch();

  const handleTitle = (event) => {
    setName(event.target.value);
  };

  const handleCount = (event) => {
    setCount(event.target.value);
  };
  const handleWeight = (event) => {
    setWeight(event.target.value);
  };

  const handlePicture = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Get these info: ${name} ,${count},${picture}`);
    dispatch(
      AddProduct({
        id: Math.floor(Math.random(0, 1000000000) * 1000000000),
        name,
        count,
        imageUrl: URL.createObjectURL(picture),
        weight,
      })
    );
    setNewModal(false);
  };
  return (
    <div className="new-modal-background">
      <div className="new-modal-container">
        <div className="title">
          Please, fill all information about new product!
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Name of product</label>
            <input
              required
              id="title"
              type="text"
              placeholder="Name"
              onChange={(e) => handleTitle(e)}
            />
          </div>
          <div>
            <label htmlFor="count">Count of product</label>
            <input
              required
              id="count"
              type="number"
              placeholder="count"
              onChange={(e) => handleCount(e)}
            />
          </div>
          <div>
            <label htmlFor="weight">Weight of product</label>
            <input
              required
              id="weight"
              type="number"
              placeholder="Weight in kilos"
              onChange={(e) => handleWeight(e)}
            />
          </div>
          <div>
            <label htmlFor="picture">Picture</label>
            <input
              required
              className="pics-input"
              id="picture"
              type="file"
              onChange={(e) => handlePicture(e)}
            />
          </div>
          <div className="footer">
            <button type="submit">Add</button>
            <button onClick={() => setNewModal(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewElementModal;

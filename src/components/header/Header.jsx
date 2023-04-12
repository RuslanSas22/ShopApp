import React from "react";
import { useState } from "react";
import "./Header.css";
import NewElementModal from "../new-element-modal/NewElementModal";
import { Link } from "react-router-dom";

function Header() {
  const [newModal, setNewModal] = useState(false);
  return (
    <div className="header-container">
      <Link to={"/"}>
        {" "}
        <h2>Shop List</h2>
      </Link>
      <button className="add-new" onClick={() => setNewModal(true)}>
        Add New Product
      </button>

      {newModal && <NewElementModal setNewModal={setNewModal} />}
    </div>
  );
}

export default Header;

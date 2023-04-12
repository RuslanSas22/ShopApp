import React, { useState } from "react";
import "./List.css";
import DeletingModal from "../deleting-modal/DeletingModal";
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function List() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [delId, setDelId] = useState();
  const products = useSelector((state) => state.allProducts.products);

  const sortedProducts = products.sort(function (a, b) {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    }
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    return 0;
  });

  const handleDeleting = (id) => {
    setDelId(id);
    setDeleteModal(true);
  };
  return (
    <div className="list-container">
      <select>
        <option value="Alphabetically">Alphabetically</option>
        <option value="Count">Count</option>
      </select>
      {sortedProducts.map((item) => (
        <div key={item.id} className="list-item-container">
          <Link to={`/products/${item.id}`}>
            <div className="list-item-header">
              <h1>{item.name}</h1>
            </div>
            <img src={item.imageUrl} alt="" />
            <h3>Count:{item.count}</h3>
          </Link>
          <RxCross2
            className="delete-icon"
            onClick={() => handleDeleting(item.id)}
          />
        </div>
      ))}

      {deleteModal && (
        <DeletingModal setDeleteModal={setDeleteModal} id={delId} />
      )}
    </div>
  );
}

export default List;

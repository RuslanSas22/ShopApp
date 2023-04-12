import React from "react";
import "./DeletingModal.css";
import { useDispatch } from "react-redux";
import { DeleteProduct } from "../../redux/actions/productsActions";

function DeletingModal({ setDeleteModal, id }) {
  console.log(id);

  const dispatch = useDispatch();

  const DeletingProduct = () => {
    dispatch(DeleteProduct(id));
    setDeleteModal(false);
  };

  return (
    <div className="del-modal-background">
      <div className="del-modal-container">
        <div className="title">
          Are you sure,you want to delete this product?
        </div>
        <div className="footer">
          <button onClick={() => DeletingProduct(id)}>Yes,delete</button>
          <button onClick={() => setDeleteModal(false)}>No!</button>
        </div>
      </div>
    </div>
  );
}

export default DeletingModal;

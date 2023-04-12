import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ItemDetail.css";

function ItemDetail() {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.allProducts.products.filter((item) => item.id == productId)
  );
  console.log(product);
  return (
    <div className="detail-container">
      <div className="item-img">
        <img src={product[0].imageUrl} alt="" />
      </div>
      <div className="item-info">
        <h1>{product[0].name}</h1>
        <p>Count: {product[0].count}</p>
        <p>Weight: {product[0].weight} kg</p>
      </div>
    </div>
  );
}

export default ItemDetail;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [productItem, setProductItem] = useState();
  const productId = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${productId.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductItem(data);
      });
  },[]);

  return (
    <>
      <h2>Detalle del Producto</h2>
      <h2>{productItem && productItem.name}</h2>
      <h3>{productItem && productItem.price}</h3>
      <a href="/products">
        <button>Productos</button>
      </a>
    </>
  );
};

export default ProductDetail;

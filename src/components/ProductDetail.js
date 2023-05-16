import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [productItem, setProductItem] = useState();
  const productId = useParams();

  useEffect(() => {
    const getProductDetail = async () => {
      const response = await fetch(
        `http://localhost:8000/api/products/${productId.id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setProductItem(data);
      console.log(productItem);
    };
    getProductDetail();
  });

  return (
    <>
      <h2>Detalle del Producto</h2>
      <h2>{productItem.name}</h2>
      <a href="/products">
        <button>Productos</button>
      </a>
    </>
  );
};

export default ProductDetail;

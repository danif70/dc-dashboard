/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

const Products = () => {
  const [arrayProducts, setArrayProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setArrayProducts(data)});
  },[]);

  const productFunction = (item) => {
    return (window.location = `products/${item.id}`);
  };

  return (
    <>
      <h2>Productos</h2>
      <a href="/">
        <button>Home</button>
      </a>
      <section>
        {arrayProducts.map((item) => (
          <>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <img src={item.image} alt={item.description} height="200px" />

            <button onClick={() => productFunction(item)}>
              Detalle del Producto
            </button>
          </>
        ))}
      </section>
    </>
  );
};

export default Products;

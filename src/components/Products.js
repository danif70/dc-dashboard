/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

const Products = () => {
  const [arrayProducts, setArrayProducts] = useState([]);
  const [allData, setAllData] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArrayProducts(data);
        setAllData(data);
      });
  }, []);

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
        <p>Cantidad de Productos</p>
        <p>{allData && allData.count}</p>
        {allData && allData.products.map((item) => (
          <>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.id}</p>
            <a href={`http://localhost:8000${item.detail}`}>{`http://localhost:8000/${item.detail}`}</a>
            {/*  <img src={item.image} alt={item.description} height="200px" /> */}

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

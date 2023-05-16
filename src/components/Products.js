/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";


const Products = () => {
  const [arrayProducts, setArrayProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('http://localhost:8000/api/products', {
        method: "GET",
      });
      const data = await response.json();
      setArrayProducts(data);
    };
    getProducts();
  }, []);

  const productFunction = (item) => {
    return window.location= `products/${item.id}`
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
           
              <button onClick={()=> productFunction(item)}>Detalle del Producto</button>
           
          </>
        ))}
      </section>
    </>
  );
};


export default Products;

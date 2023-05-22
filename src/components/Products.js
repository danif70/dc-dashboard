/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import NavBar from "./Nav";

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
    <div className="user-container">
      <NavBar/>
      <h2>Products</h2>
      <h4>Cantidad de productos: {allData && allData.length}</h4>
      <section className="table-users">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Img</th>
              <th>Product Detail</th>
            </tr>
          </thead>
          <tbody>
            {arrayProducts.map((item) => (
              <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.id_category}</td>
              <td><img src={item.image} alt={item.description}/></td>
              <td>
                <Button variant="secondary" size="sm" onClick={() => productFunction(item)}>
                  Detalle del Producto
                </Button>
              </td>
              </tr>
            ))}
          </tbody>
          </Table>
      </section>
    </div>
    </>
  );
};

export default Products;

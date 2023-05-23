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
        setArrayProducts(data.products);
        setAllData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
    <div className="user-container">
      <NavBar/>
      <h2>Products</h2>
      <h4>Products quantity: {arrayProducts && arrayProducts.length}</h4>
      <section className="table-users">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Link to page</th>
              <th>Product Detail</th>
            </tr>
          </thead>
          <tbody>
            {arrayProducts.map((item) => (
              <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Button onClick={() => window.location = `http://localhost:8000${item.detail}`}>
                  Page
                </Button>
              </td>
              <td>
                <Button variant="secondary" size="sm" onClick={() => window.location = item.detail}>
                  Product
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

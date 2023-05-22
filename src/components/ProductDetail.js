/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./Nav";
import './ProductDetail.css'
import Card from 'react-bootstrap/Card';


const ProductDetail = () => {
  const [productItem, setProductItem] = useState();
  const productId = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${productId.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProductItem(data);
      });
  },[]);

  return (
    <div className="product-detail">
      <NavBar/>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" /* src= *//>
      <Card.Body>
        <Card.Title>Detalle del Producto</Card.Title>
        <Card.Text>
          {productItem && productItem.name}
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;

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
      {productItem && 
        <Card.Img variant="top" src={`http://localhost:8000/images/products/${productItem.image}`}/>
      }
      <Card.Body>
        <Card.Title>Detalle del Producto</Card.Title>
        <Card.Text>
          <h5>{productItem && productItem.name}</h5>
          <p>{productItem && productItem.description}</p>
          <p>${productItem && productItem.price}</p>
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;

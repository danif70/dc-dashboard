import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import logo from '../img/logo.svg'
import './Home.css'
import { CardImg } from "react-bootstrap";

const Home = () => {

  const handleUser = () => {
    window.location.href = '/users';
  }
  const handlerProducts = () => {
    window.location.href = '/products';
  }

  return (
    <div className="home-container">
    <Card className="text-center">
      <Card.Header><h1>Digital Cake Dashboard</h1></Card.Header>
      <Card.Body>
        <Card.Text>
          Dashboard para Digital Cake, aquí encontrarás toda la información sobre tu App.
        </Card.Text>
        <Button variant="primary" onClick={handleUser}>
          Usuarios
        </Button>{' '}
        <Button variant="primary" onClick={handlerProducts}>
          Productos
        </Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Home;
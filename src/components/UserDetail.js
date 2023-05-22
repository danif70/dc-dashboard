import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./Nav";
import Card from 'react-bootstrap/Card';

const UserDetail = () => {

  const [usersDetail, setUsersDetail] = useState([])
  const userId = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/api/users/${userId.id}`)
    .then((response) => response.json())
    .then((data) => setUsersDetail(data));
  }, []);

  const isAdmin = () => usersDetail.is_admin === 1 ? 'Yes' : 'No'

  console.log(usersDetail)

  return (
    <div className="product-detail">
      <NavBar/>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" /* src= *//>
      <Card.Body>
        <Card.Title>User Detail</Card.Title>
        <Card.Text>
          <h6>Name: {usersDetail && usersDetail.name} </h6>
          <p>Last name: {usersDetail && usersDetail.last_name}</p>
          <p>Admin: {usersDetail && isAdmin()}</p>
          <p>Email: {usersDetail && usersDetail.email}</p>
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
  );
};

export default UserDetail;
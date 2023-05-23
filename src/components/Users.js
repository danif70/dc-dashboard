import React, { useEffect, useState } from "react";
import './Users.css'
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import NavBar from "./Nav";

const Users = () => {
  const [arrayUsers, setArrayUsers] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:8000/api/users")
    .then((response) => response.json())
    .then((data) => setArrayUsers(data));
  }, []);
  
  console.log(arrayUsers)

  return (
    <>
    <div className="user-container">
      <NavBar/>
      <h2>Users</h2>
      <h4>Last user created id: {arrayUsers.length}</h4>
      <section className="table-users">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {arrayUsers.map((user) => (
              <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.is_admin === 1 ? 'Yes' : 'No'}</td>
              <td>
                <Button variant="primary" size="sm" onClick={() => window.location = `users/${user.id}`}>
                  Detail
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

export default Users;

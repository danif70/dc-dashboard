import React, { useEffect, useState } from "react";
import './Users.css'
import Table from "react-bootstrap/Table"
import NavBar from "./Nav";

const Users = () => {
  const [arrayUsers, setArrayUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
    .then((response) => response.json())
    .then((data) => setArrayUsers(data));
  }, []);

  return (
    <>
    <div className="user-container">
      <NavBar/>
      <h2>Usuarios</h2>
      <h4>Último usuario creado: </h4>
      <section className="table-users">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Admin</th>
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

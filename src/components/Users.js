import React, { useEffect, useState } from "react";
const Users = () => {
  const [arrayUsers, setArrayUsers] = useState([])

  console.log(arrayUsers)
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('http://localhost:8000/api/users', {
        method: "GET",
      });
      const data = await response.json();
      setArrayUsers(data);
    };
    getUsers();
  }, []);

  return (
    <>
      <h2>Usuarios</h2>
      <a href="/">
        <button>Home</button>
      </a>
      <section>
        {arrayUsers.map((item) => (
          <>
          <p>{item.name}</p>
          <p>{item.lastname}</p>
          <p>{item.email}</p>
          <a href="users/:{item.id}">
        <button>Detalle de Usuario</button>
      </a>
          </>
        ))}
      </section>
    </>
  );
};

export default Users;

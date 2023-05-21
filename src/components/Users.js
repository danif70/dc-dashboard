import React, { useEffect, useState } from "react";

const Users = () => {
  const [arrayUsers, setArrayUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h2>Usuarios</h2>
      <a href="/">
        <button>Home</button>
      </a>
      <section>
        {arrayUsers.map((user) => (
          <>
          <p>{user.name}</p>
          <p>{user.lastname}</p>
          <p>{user.email}</p>
          <a href={`users/${user.id}`}>
        <button>Detalle de Usuario</button>
      </a>
          </>
        ))}
      </section>
    </>
  );
};

export default Users;

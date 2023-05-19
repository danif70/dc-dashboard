import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <>
    <h2>Detalle del Usuario</h2>
      <h3>Name: {usersDetail && usersDetail.name} </h3>
      <p>Last name: {usersDetail && usersDetail.last_name}</p>
      <p>Admin: {usersDetail && isAdmin()}</p>
      <p>Email: {usersDetail && usersDetail.email}</p>

      <a href="/users">
        <button>Usuarios</button>
      </a>
    </>
  );
};

export default UserDetail;
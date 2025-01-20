import axios from "axios";
import React, { useEffect, useState } from "react";

function CRUDApp() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    const getData = await axios.get(
      "https://678e621ba64c82aeb1203019.mockapi.io/employee"
    );

    setUsers(getData.data);
  };

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Dept</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.dept}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CRUDApp;

// CRUD         ---> Create Read Update Delete

// HTTP methods ---> POST   GET  PUT    DELETE

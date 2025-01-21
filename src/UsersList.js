import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UsersList() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userData = await axios.get(
      "https://678fafb449875e5a1a92f112.mockapi.io/students"
    );

    setState(userData.data);
  };

  return (
    <div>
      <Link to={"/create"} className="btn btn-primary m-3">
        Create User
      </Link>

      <table class="table table-striped ">
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
          {state.map((item) => {
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

export default UsersList;

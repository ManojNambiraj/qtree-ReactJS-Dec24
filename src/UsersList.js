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

  const handleDelete = async (id) => {
    await axios.delete(
      `https://678fafb449875e5a1a92f112.mockapi.io/students/${id}`
    );

    getData(); 
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
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.dept}</td>
                <td>
                  <Link
                    to={`/edit/${item.id}`}
                    className="btn btn-success btn-sm"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;

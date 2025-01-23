import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
    dept: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = await axios.get(
      `https://678fafb449875e5a1a92f112.mockapi.io/students/${id}`
    );

    setUserInput(user.data);
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, age, dept, email, mobile } = userInput;

    const putData = await axios.put(
      `https://678fafb449875e5a1a92f112.mockapi.io/students/${id}`,
      {
        name,
        age,
        dept,
        email,
        mobile,
      }
    );

   if(putData.statusText == "OK"){
    navigate("/")
   }
  };

  return (
    <div>
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>
            Edit User Form
          </h2>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              name="name"
              value={userInput.name}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Age
            </label>
            <input
              type="number"
              class="form-control"
              name="age"
              value={userInput.age}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Dept
            </label>
            <input
              type="text"
              class="form-control"
              name="dept"
              value={userInput.dept}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              value={userInput.email}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Mobile
            </label>
            <input
              type="number"
              class="form-control"
              name="mobile"
              value={userInput.mobile}
              onChange={handleChange}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;

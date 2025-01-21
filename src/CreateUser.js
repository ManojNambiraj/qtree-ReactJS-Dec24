import React from "react";
import "./CreateUser.css"

function CreateUser() {
  return (
    <div className="register-form">
      <form>
        <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>User Register</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Age
          </label>
          <input type="number" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Dept
          </label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Mobile
          </label>
          <input type="number" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default CreateUser;

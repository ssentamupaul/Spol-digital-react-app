import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <form
        method="POST"
        action="/users/login"
        className="form-control p-3 w-100"
        style={{ maxWidth: "400px" }}
      >
        <div>
          <h4 className="mb-3">Login</h4>
          <label className="lab" htmlFor="name">
            Email
          </label>
          <input
            required
            className="form-control"
            type="text"
            name={"name"}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="py-3">
          <label className="lab" htmlFor="password">
            Password
          </label>
          <input
            required
            className="form-control"
            type="password"
            name={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link
          className="btn btn-success mt-4 w-100"
          to={"/Dashboard"}
          children={"Submit"}
        ></Link>
      </form>
    </div>
  );
}

import React, { use } from "react";
import { AuthContext } from "./contexts/Authcontext";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser } = use(AuthContext);

  const handelSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );
    console.log(email, password, userProfile);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

          fetch("http://localhost:3000/users", {
              method: 'POST',
              headers: {
                  'content-type' : 'application/json'
              },
              body: JSON.stringify(userProfile)
          })
              .then(res => res.json())
              .then(data => {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "your account has created",
                  showConfirmButton: false,
                  timer: 1500,
                });
              console.log('after profile save', data);
          })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <form onSubmit={handelSignUp} className="">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input"
            placeholder="Address"
          />
          <label className="label">Phone</label>
          <input
            type="text"
            name="phone"
            className="input"
            placeholder="phone"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo url"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

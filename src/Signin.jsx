import React, { use } from 'react';
import { AuthContext } from './contexts/Authcontext';
import { data } from 'react-router';

const Signin = () => {
  const { signInUser } = use(AuthContext);

  const handelSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime
        };

        fetch("http://localhost:3000/users", {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(signInInfo)
        })
          .then(res => res.json())
          .then(data => {
          console.log('after update patch ', data);
        })
      })
      .catch(error => {
      console.log(error);
    })

  };

  return (
    <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign In now!</h1>
        <form onSubmit={handelSignIn} className="">
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

export default Signin;
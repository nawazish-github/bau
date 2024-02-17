import React, { useState } from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userField, setuserField] = useState("");
  const [passwordField, setpasswordField] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setuserField("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setpasswordField("");
    setErrorMessage("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "") {
      setuserField(`Please enter username`);
    } else if (password === "") {
      setpasswordField(`Please enter password`);
      setErrorMessage("");
    } else if (password === "password") {
      console.log(`user loged in : `, password);
      setErrorMessage("");
    } else {
      setErrorMessage(`Please insert correct password`);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center bg-sky-100 h-screen w-full">
        <div className="bg-white w-full max-w-md rounded-lg border p-5 shadow-xl">
          <div className="flex justify-center items-center flex-wrap text-2xl pb-4">
            Log in
          </div>
          <form onSubmit={handleLogin}>
            <div>
              <div className="flex justify-between">
                <label htmlFor="username">Username</label>
                <span style={{ color: "red" }}>*</span>
              </div>
              <InputField
                type="text"
                placeholder="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <span className="text-red-700 text-sm">{userField}</span>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password">Password</label>
                <span style={{ color: "red" }}>*</span>
              </div>
              <InputField
                type="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <span className="text-red-700 text-sm">{passwordField}</span>
            <span className="text-red-600 underline text-sm">
              {errorMessage}
            </span>
            <div className="flex justify-between">
              <Link
                to="/"
                className="mt-6 flex items-center text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
              <Button btnname="Login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

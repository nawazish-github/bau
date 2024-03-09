import React, { useState } from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log("the response is: ", response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log("the data is: ", data);
        if (data.status === "successful") {
          navigate("/layout");
        } else {
          setFailureMessage(data.message);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setFailureMessage(error.message);
      });
  };

  const isDisabled = !username || !password;

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
            <div className="flex justify-between">
              <Link
                to="/"
                className="mt-6 flex items-center text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
              <Button isDisabled={isDisabled} type="submit" btnname="Login" />
            </div>
          </form>
          <p className="text-red-500">{failureMessage}</p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./components/inputbox/Input";
import Button from "./components/button/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-wrap bg-blue-100/50">
        <div className=" bg-white w-full max-w-md rounded-lg border p-5 shadow-xl">
          <div className="flex justify-center items-center flex-wrap text-2xl pb-4">
            Log in
          </div>
          <form>
            <div>
              <div className="flex justify-between">
                <label htmlFor="username">Username</label>
                <span style={{ color: "red" }}>*</span>
              </div>
              <Input placeholder="username" type="text" />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password">Password</label>
                <span style={{ color: "red" }}>*</span>
              </div>

              <Input placeholder="password" type="text" />
            </div>
            <div className="flex justify-between">
              <Link to="/" className="mt-6 flex items-center text-blue-600">
                Forgot password?
              </Link>
              <span>
                <Button />
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

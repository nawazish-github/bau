import { useState } from "react";
import Input from "./components/inputbox/Input";
import Button from "./components/button/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-wrap bg-blue-50 bg-cover bg-no-repeat">
        <div className=" w-full max-w-md mx-auto border  rounded-lg p-5 bg-white">
          <form>
            <div>
              <div>
                <label htmlFor="">Username</label>
              </div>
              <Input />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <Input />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

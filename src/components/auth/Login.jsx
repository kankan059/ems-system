import React, { useState } from "react";

const Login = () => {

  const [Email, setEmail] = useState('');
  const [password, setpassword] = useState('')
  
  const getData = (e) =>{
      e.preventDefault();
      setEmail('');
      setpassword('');
  }

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center ">
        <div
          id="form"
          className="border-2 border-emerald-600 flex flex-col justify-center items-center rounded-md "
        >
          <img src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" className="h-30 w-30 rounded-[50%] object-cover" style={{padding: "10px" , margin: "30px 0 0 0"}}/>
          <form
            className="flex flex-col items-center justify-center gap-5"
            style={{
              padding: "20px",
            }}
          >
            <input
              value={Email}
              onChange={(e)=>{setEmail(e.target.value)}}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email..."
              className="px-10 border-2 border-emerald-500  text-white outline-orange-500 bg-transparent placeholder:text-white  rounded-full w-120 "
              style={{ padding: "10px" }}
            />
            <input
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="border-2 border-emerald-500 text-white outline-orange-500 bg-transparent placeholder:text-white rounded-full w-120"
              style={{ padding: "10px" }}
            />
            <button 
              onClick={getData}
              type="submit"
              className="rounded-full text-white border-2 bg-emerald-800 border-emerald-500"
              style={{ padding: "10px 40px" }}
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

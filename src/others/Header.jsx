import React from "react";

const Header = ({data}) => {

  const logout = () =>{
    localStorage.setItem('loggedInUser' , '');
    window.location.reload();
  }
  return (
    <>
      <section
        id="header-main"
        className="flex justify-between items-center px-10 pt-5 text-2xl bg-[ #1c1c1c]"
      >
        <div id="home" className="font-semibold">
          Hello <span className="font-medium text-3xl">{data.firstname}😁</span>
        </div>
        <section
          id="2ndPart"
          className="flex gap-4 capitalize font-medium cursor-pointer "
        >
          <h2>About</h2>
          <h2>contact</h2>
          <button onClick={logout} className="bg-red-700 rounded-md px-3 py-2 text-sm">logout</button>
        </section>
      </section>
    </>
  );
};

export default Header;

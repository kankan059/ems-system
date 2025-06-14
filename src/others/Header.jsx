import React from "react";

const Header = () => {
  return (
    <>
      <section
        id="header-main"
        className="flex justify-between items-center px-10 pt-5 text-2xl bg-[ #1c1c1c]"
      >
        <div id="home" className="font-semibold">
          Hello <span className="font-medium text-3xl">kongkon😁</span>
        </div>
        <section
          id="2ndPart"
          className="flex gap-4 capitalize font-medium cursor-pointer "
        >
          <h2>About</h2>
          <h2>contact</h2>
          <button>logout</button>
        </section>
      </section>
    </>
  );
};

export default Header;

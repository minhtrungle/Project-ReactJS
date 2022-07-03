import React from "react";
import NavBar from "./../../components/navBar";

const MainLayout = (props) => {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="container" style={{ marginTop: "5em" }}>
        {props.content}
      </div>
    </>
  );
};

export default MainLayout;

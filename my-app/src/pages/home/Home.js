import React from "react";

import "./Home.scss";
import {useSelector} from 'react-redux';
// const name = "Koc";
function Home() {

    const { name } = useSelector((state)=> state.data);
  return (
    <div className="home ">
      <div className="container">
        <h2 className="mt-12 text-8xl"> Home Page</h2>
        <p className="mt-12 text-4xl">
          Welcome to the <b>Home</b> page
        </p>
        <p className="mt-12 text-4xl">
          This page has <b>{name}</b> is stored in the dataSlice
        </p>
      </div>
    </div>
  );
}

export default Home;

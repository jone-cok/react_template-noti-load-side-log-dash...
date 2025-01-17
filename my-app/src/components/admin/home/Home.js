import React from "react";

import { useState, useEffect } from "react";

import Loader from "../../loader/Loader.js";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h3> Dashboard ~</h3>
          <p>
            This is the user's <b>Dashboard Page</b>
          </p>
        </div>
      )}
    </>
  );
};

export default Home;

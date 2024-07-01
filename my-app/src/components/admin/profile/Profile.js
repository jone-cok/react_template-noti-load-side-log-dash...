import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Loader from "../../loader/Loader.js";

import "./Profile.scss";

import Card from "../../card/Card";
const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  const updateProfile = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully");
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="profile">
          <h2>Profile ~</h2>
          <Card className={"card"}>
            <form onSubmit={updateProfile}>
              <p>
                <label> Name:</label>
                <input type="text" placeholder="Name" name="name"></input>
              </p>
              <p>
                <label> Email:</label>
                <input type="email" placeholder="Email" name="email"></input>
              </p>

              <button type="submit" className="--btn --btn-primary --btn-block">
                Update Profile
              </button>
            </form>
          </Card>
        </div>
      )}
    </>
  );
};

export default Profile;

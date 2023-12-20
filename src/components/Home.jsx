import React from "react";
import profilePic from "../assets/profile.jpg";

const Home = () => {
  return (
    <div className="max-w-5xl h-screen mx-auto p-4 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-col h-full justify-center items-center">
        <p className="text-purple-600 font-normal">Hi there,</p>
        <h2 className="font-bold text-3xl text-gray-900 dark:text-gray-200">
          I am Mahdi <span className="text-purple-600">Arian</span>
        </h2>
        <p className="text-xl font-bold text-gray-500 dark:text-gray-500">
          I am a Designer and Content Creator
        </p>
        <img
          src={profilePic}
          alt="Profile Image"
          className="w-32 h-32 object-cover rounded-full mt-10 border-2 border-purple-600 shadow-2xl shadow-purple-600"
        />
      </div>
    </div>
  );
};

export default Home;

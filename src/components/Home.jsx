import React from "react";
import profilePic from "../assets/profile.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="w-full h-screen relative dark:bg-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto flex flex-col h-full justify-center items-center">
        <p className="text-purple-600 font-normal mb-3">Hi there,</p>
        <h2 className="font-bold text-3xl sm:text-6xl text-gray-900 dark:text-gray-200">
          I am Mahdi <span className="text-purple-600">Arian</span>
        </h2>
        <p className="text-xl sm:text-2xl my-1 font-semibold text-gray-500 dark:text-gray-400">
          I am a Designer and Content Creator
        </p>
        <img
          src={profilePic}
          alt="Profile Image"
          className="w-32 h-32 sm:w-52 sm:h-52 md:mt-10 object-cover rounded-full mt-10 border-2 border-purple-600 shadow-2xl shadow-purple-600"
        />

        <span className="rotate-90 flex items-center gap-3 absolute bottom-40 left-0 text-sm uppercase">
          Explore
          <FaArrowRight className="" />
        </span>
      </div>
    </div>
  );
};

export default Home;

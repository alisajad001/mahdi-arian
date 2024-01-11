import React from "react";
import aboutPic from "../assets/about-img.jpeg";

const About = () => {
  return (
    <div className="w-full relative dark:bg-gray-900 dark:text-white p-3">
      <div className="max-w-5xl mx-auto gap-10 flex flex-col md:flex-row h-full items-center text-center md:text-left">
        <div>
          <h2 className="font-bold text-3xl md:text-5xl mt-10">About me</h2>
          <p className="text-gray-400 mt-5 leading-8 text-lg">
            I am Mahdi Arian and I am a Graphic Designer and Content Creator
            based in Kabul, Afghanistan. I create nice and stunning contents. I
            spend my free times on reading.
          </p>
        </div>
        <img
          src={aboutPic}
          alt="Mahdi Arian"
          className="w-80 md:w-80 object-cover mt-10 rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default About;

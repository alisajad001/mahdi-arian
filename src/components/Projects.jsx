import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full relative dark:bg-gray-900 dark:text-white p-3"
    >
      <div className="max-w-6xl mt-20 mx-auto gap-10 flex flex-col md:flex-row h-full items-center md:text-left">
        <div className="mx-auto">
          <h2 className="font-bold text-3xl text-center md:text-5xl mt-10">
            Projects
          </h2>

          <div className="w-full mt-10 flex gap-7 flex-wrap justify-center">
            <img
              src="https://i.ytimg.com/vi/npxV5vktHnE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ8EtqZOwtNONczwwtBrPlyLmIjA"
              alt="YouTube Thumbnail"
              className="w-80 rounded-md"
            />
            <img
              src="https://i.ytimg.com/vi/iWmJUUw6_fA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_kpBB-JqN69a4Dfpdbyb_ByY4Pw"
              alt="YouTube Thumbnail"
              className="w-80 rounded-md"
            />
            <img
              src="https://i.ytimg.com/vi/BpSMZI3mNHA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkixsgkeFeVD-U64bNpEPI8Foq8w"
              alt="YouTube Thumbnail"
              className="w-80 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

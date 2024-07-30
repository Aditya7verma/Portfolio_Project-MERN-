import React from "react";

const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white"> Hi, I am</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">Aditya Verma</h1>
      <h1 className="text-6xl sm:text-3xl text-white font-semibold">
        I build things for web.
      </h1>
      <p className="text-white w-2/5">
        I'm a Full Stack Web Developer skilled in creating complete web
        applications. With expertise in both front-end and back-end
        technologies, I build user-friendly and efficient websites.
      </p>

      <button className="border-2 border-tertiary text-tertiary px-6 py-3 rounded">
        Get Started
      </button>
    </div>
  );
};

export default Intro;

import React from "react";
import SectionTitel from "../../components/Header/SectionTitel";

const About = () => {
  const skills = [
    "Java",
    "JavaScript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "JQuery",
  ];
  return (
    <div>
      <SectionTitel title="About" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[60vh] w-1/2 sm:w-full">
          <lottie-player
            src="https://lottie.host/28d5519b-a3d8-4ad7-984d-8407e26ff0b3/0VdSxMQsk2.json"
            background="transparent"
            speed="1"
            // style="width: 300px; height: 300px"
            // controls
            autoplay
            // direction="1"
            // mode="normal"
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            Hello! My name is Aditya Verma . I enjoy creating things that live
            on the Inernet. My intrest in web devlopment started back in
            college, when I decided to try making an TODO-list app using HTML,
            CSS, Js.
          </p>
          <p className="text-white">
            Fast-forward to today, and I'm Aspiring Full Stack Developer with a
            strong foundation in Java, JavaScript. Proficient in modern web
            development technologies, including HTML, CSS, React, Node.js,
            Express, and MongoDB. Passionate about building efficient, scalable,
            and user-friendly web applications.
          </p>
        </div>
      </div>

      <div className="py-8">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-8 cursor-pointer rounded">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

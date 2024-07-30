import React from "react";
import SectionTitel from "../../components/Header/SectionTitel";

function Contact() {
  const user = {
    name: "Aditya Verma",
    age: 25,
    email: "av79084@gmail.com",
    mobile: "8897626041",
    country: "INDIA",
  };

  return (
    <div>
      <SectionTitel title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-tertiary">{"{"}</p>

          {Object.keys(user).map((key) => (
            <p className="ml-5">
              <span className="text-tertiary">{key} :- </span>
              <span className="text-tertiary">{user[key]}</span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>

        <div className="h-[400px]">
          <lottie-player
            src="https://lottie.host/d40ce627-82d2-4558-9092-5dacebc464b3/bDW9tNgnpX.json"
            background="transparent"
            speed="1"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;

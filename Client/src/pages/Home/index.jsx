import React from "react";
import Header from "../../components/Header/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-primary px-40 sm:px-5">
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
        <LeftSider />
      </div>
    </>
  );
};

export default Home;
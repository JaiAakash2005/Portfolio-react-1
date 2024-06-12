import React, { useEffect } from "react";
import "./Projects.css";
import OIP from "../assets/OIP.jpeg";
import R from "../assets/R.jpeg";
import OIP3 from "../assets/OIP (1).jpeg";
import port from "../assets/port.jpeg";
import todo from "../assets/todolist.jpg";
import calc from "../assets/calc.jpeg";

const Projects = () => {
  useEffect(() => {
    Effect();
  }, []);
  const Effect = () => {
    ScrollReveal().reveal(".project", {
      duration: 1000,
      distance: "70px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
    });
  };
  return (
    <div className="project">
      <h1 style={{ overflow: "hidden", padding: "5px", marginTop: "10px" }}>
        Latest Project
      </h1>
      <div className="row project-container">
        <div className="col-lg-4 col-12">
          <div className="image-wrapper">
            <img src={OIP} alt="Project 1" className="project-img img-fluid" />
            <div className="overlay">
              <div className="content">
                <a
                  href="https://portfolioak.dorik.io/"
                  type="button"
                  className="arrow-link"
                >
                  &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="image-wrapper">
            <img src={R} alt="Project 2" className="img-stem img-fluid" />
            <div className="overlay">
              <div className="content">
                <a
                  href="https://iconstem24.jeppiaarcollege.org/"
                  type="button"
                  className="arrow-link"
                >
                  &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="image-wrapper img-wrap">
            <img src={OIP3} alt="Project 3" className="project3 img-fluid" />
            <div className="overlay">
              <div className="content">
                <a
                  href="https://github.com/JaiAakash2005/Travel"
                  type="button"
                  className="arrow-link"
                >
                  &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row project-container">
        <div className="col-lg-4 col-12">
          <div className="image-wrapper">
            <img src={port} alt="Project 1" className="project-img img-fluid" />
            <div className="overlay">
              <div className="content">
                <a
                  href="https://github.com/JaiAakash2005/Portfolio-react-1"
                  type="button"
                  className="arrow-link"
                >
                  &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="image-wrapper">
            <img src={todo} alt="Project 2" className="img-stem img-fluid" />
            <div className="overlay">
              <div className="content">
                <a
                  href="https://github.com/JaiAakash2005/Todo"
                  type="button"
                  className="arrow-link"
                >
                  &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="image-wrapper img4">
            <img
              src={calc}
              alt="Project 3"
              className="project3 calc img-fluid"
            />
            <div className="overlay">
              <div className="content">
                <a
                  href="https://github.com/JaiAakash2005/calculator"
                  type="button"
                  className="arrow-link"
                >
                  &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

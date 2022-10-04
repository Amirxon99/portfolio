import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>hi, My Name is Amirkhan</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <GitHubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML,CSS, BootStrap, Sass, MaterialUI, ReactJs, Redux,
              Redux-Toolkit
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Node-Js, Express-Js, Java Spring, MySql, PostgreSql</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C++, Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
// import { Link } from "react-router-dom";
import Project from "./Project";

function ProjectList(props) { // imgSrc, altText, gitHubURL
  return (
    // <div className="container-fluid">
    // <div className="row mt-4">

    //   <div className="col-md-8 offset-md-1">
    //   <div className="col-md-8 offset-md-1 mid-body">
    //     <div className="col-md-12">
          // <div className="col-md-12 about">Portfolio</div>
    //     </div>

    <div className="container-fluid">
      <div className="h3 mt-3">Portfolio</div>
      <div className="row">
        {/* <div className="col-md-9 col-sm-12">Portfolio */}

        <div className="card-deck">
          <Project
            // onChange="tempChange",
            imgSrc="/images/wanderlust.png"
            altText="Wanderlust travel planner"
            label="Wanderlust"
            gitHubURL="https://sguitjens.github.io/GroupProject1/"
          ></Project>
          <Project
            imgSrc="/images/theLab.jpg"
            altText="theLab Ideas to Reality"
            label="theLab"
            gitHubURL="https://github.com/sguitjens/Project2"
          ></Project>
          <Project
            imgSrc="/images/weather_dash.png"
            altText="Weather Dashboard"
            label="Weather Dashboard"
            gitHubURL="https://sguitjens.github.io/homework6"
          ></Project>
          <Project
            imgSrc="/images/pw_gen.png"
            altText="Password Generator"
            label="Password Generator"
            gitHubURL="https://sguitjens.github.io/homework3"
          ></Project>
          <Project
            imgSrc="images/workday.png"
            altText="Workday Scheduler"
            label="Workday Scheduler"
            gitHubURL="https://sguitjens.github.io/homework5"
          ></Project>
          <Project
            imgSrc="images/game-play.png"
            altText="Coding Quiz"
            label="Coding Quiz"
            gitHubURL="https://sguitjens.github.io/homework4"
          ></Project>
        </div>
      </div>
    </div>
    // </div>
    //   </div>
    // </div>
  );
}

export default ProjectList;

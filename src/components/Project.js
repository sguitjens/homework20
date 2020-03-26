import React from "react";
// import Nav from "../components/Nav"

function Project(props) { // imgSrc, altText, gitHubURL
  return (
    // <div className="col-md-6 position-relative gallery-img">
    //   {/* <img src={props.imgSrc} alt={props.altText} class="img-fluid figure-image gallery-img"> */}
    //   <div className="col-12 img-caption no-gutter position-absolute">
    //     <a href={props.gitHubURL} alt={props.altText} target="_blank" rel="noopener noreferrer" className="row btn btn-secondary btn-lg btn-block active img-caption no-gutter" role="button" id="img-btn">theLab</a>
    //   </div>
    // </div>
    // <div className="row">
    // <div className="col-md-6 position-relative">

      
    <div className="col-md-6 mt-3 mb-3">
    <div className="card h-100">
      <img className="card-img-top" src={props.imgSrc} alt={props.altText}/>
      {/* <div className="card-body d-flex flex-column"> */}
      <div className="card-body d-flex p-0"></div>
      <div className="card-footer bg-dark text-light p-0">
        {/* <p className="card-text">{props.label}</p> */}
        {/* <a href={props.gitHubURL} alt={props.altText} classNam="card-footer bg-dark text-light btn" target="_blank" rel="noopener noreferrer" type="button">{props.label}</a> */}
        <a href={props.gitHubURL} alt={props.altText} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg btn-block active img-caption mt-auto" role="button" id="img-btn">{props.label}</a>
      </div>
    </div>

    </div>
    // </div>
  )
};

export default Project;
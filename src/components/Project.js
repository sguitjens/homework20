import React from "react";
// import Nav from "../components/Nav"

function Project(props) { // imgSrc, altText, gitHubURL
  return (
    // <div className="col-md-6 position-relative gallery-img">
    //   {/* <img src={props.imgSrc} alt={props.altText} class="img-fluid figure-image gallery-img"> */}
    //   <div className="col-12 img-caption no-gutter position-absolute">
    //     <a href={props.gitHubURL} alt={props.altText} target="_blank" className="row btn btn-secondary btn-lg btn-block active img-caption no-gutter" role="button" id="img-btn">theLab</a>
    //   </div>
    // </div>
    // <div className="row">
      <div className="col-md-6">

      
    <div className="card h-100">
      <img className="card-img-top" src={props.imgSrc} alt={props.altText}/>
      <div className="card-body d-flex flex-column">
        {/* <p className="card-text">{props.label}</p> */}
        <a href={props.gitHubURL} alt={props.altText} target="_blank" className="btn btn-info btn-lg btn-block active img-caption mt-auto" role="button" id="img-btn">{props.label}</a>
      </div>
    </div>

    </div>
    // </div>
  )
};

export default Project;
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faMobile, faEnvelope, faFilePdf} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCoffee, faMobile, faEnvelope, faFilePdf);

function Info(props) {
  return (
    <div className="col-md-8 offset-md-1">
      {/* <div className="col-md-12"> */}
        {/* <div className="row"> */}
          <div className="h3">About Me</div>
        {/* </div> */}
      {/* </div> */}

      {/* <div className="row"> */}
        <div>
          <div className="col-12 p-0 mb-2">
            <img src="/images/headshot.jpg" alt="Sydney Guitjens"/>
          </div>
        
        <div className="mb-5">
          {/* <img src="assets/images/headshot.jpg" alt="Lemongrab" height={auto} width={auto} class="col-sm-12 col-md-4 col-lg-3 about-img" /> */}

          {/* <p> */}
            I have over 19 years of experience testing mobile and web applications. I have tested software for small companies, and large fortune 500 companies. I have led QA teams, and collaborated with cross-functional teams to accomplish project goals using Agile and Waterfall methodologies. I have extensive experience improving software quality using manual and automated testing.
          {/* </p> */}
          <br />
          <p>
            I like to think of ways that users might break a piece of software, either on purpose or by accident. I feel most satisfied when users of all kinds love an app I have worked on, and find it easy to use.
          </p>
          <p>
            My desire to improve my technical skills led me to take CS classes at Portland State University, and enroll in a web development bootcamp. I am becoming proficient at writing automated tests, and I like the way automating tests helps me think more about how I can test manually, and vice versa. Being able to keep learning and growing my skills is a huge motivator for me. It's probably the biggest reason I've continued to work in the tech industry.
          </p>
          <br />
          <div className="h4">More Information:</div>
          <ul>
            <li><FontAwesomeIcon icon="mobile" /> 503-123-4567</li>
            <li><FontAwesomeIcon icon="envelope" /> sguitjens@gmail.com</li>
            <li><a href="https://www.linkedin.com/in/sydneyguitjens/" alt="LinkedIn" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "linkedin"]} /> LinkedIn</a></li>
            <li><a href="https://github.com/sguitjens" alt="github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "github"]} /> GitHub</a></li>
            <li><a href="/pdf/Guitjens_Sydney_Resume.pdf" alt="Resume PDF" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFilePdf} /> Resume PDF</a></li>
          </ul>
        {/* </div> */}
          </div>
        </div>
    </div>
  )
}

export default Info;
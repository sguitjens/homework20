import React from "react";

function Info(props) {
  return (
    <div className="col-md-8 offset-md-1 mid-body">
      <div className="col-md-12">
        <div className="row">
        <div className="col-md-12 about h3">About Me</div>
        </div>
      </div>

      <div>
        <img src="/images/headshot.jpg" alt="Sydney Guitjens" imgStyle={"height=auto"} imgStyle={"width=auto"} className="col-sm-12 col-md-4 col-lg-3 about-img" />
        {/* <img src="assets/images/headshot.jpg" alt="Lemongrab" height={auto} width={auto} class="col-sm-12 col-md-4 col-lg-3 about-img" /> */}

      </div>
      
      <div className="col-md-12">
        <p>
          I am a QA Engineer with over 19 years of experience testing mobile and web applications. I have tested software for small companies, and large fortune 500 companies. I have led QA teams, and collaborated with cross-functional teams to accomplish project goals using Agile and Waterfall methodologies. I have extensive experience improving software quality using manual and automated testing.
        </p>
        <p>
          I like to think of ways that users might break a piece of software, either on purpose or by accident. I feel most satisfied when users of all kinds love an app I have worked on, and find it easy to use.
        </p>
        <p>
          My desire to improve my technical skills led me to take CS classes at Portland State University, and enroll in a web development bootcamp. I am becoming proficient at writing automated tests, and I like the way automating tests helps me think more about how I can test manually, and vice versa. Being able to keep learning and growing my skills is a huge motivator for me. It's probably the biggest reason I've continued to work in the tech industry.
        </p>
        <p>
          {/* <strong>Contact me or see more:</strong><br> */}
          {/* <i className="fas fa-mobile"></i> 503-123-4567 <br> */}
          {/* <i className="fas fa-envelope-square"></i> sguitjens@gmail.com <br> */}
          {/* <a href="https://www.linkedin.com/in/sydneyguitjens/" alt="LinkedIn" target="_blank"  rel="noopener"><i className="fab fa-linkedin"/></i> LinkedIn</a> <br> */}
          {/* <a href="https://github.com/sguitjens" alt="github" target="_blank"><i className="fab fa-github-alt"></i> GitHub</a><br> */}
          <a href="/pdf/Guitjens_Sydney_Resume.pdf" alt="Resume PDF" target="_blank" rel="noopener"><i className="fas fa-file-pdf"></i> Resume PDF</a>
        </p>
      </div>
    </div>
  )
}

export default Info;
import React from 'react';
import './Certificates.css';


function Certificates() {
  return (
   
      <div id="certificates" className="container certificates-container">
        <div className="certificates certificates-1">
          <div className="certificates-img"></div>
          <div className="certificates-info">
            <h3 className="name">FullStack Developer</h3>
            <h4 className="about">Henry's bootcamp</h4>
            <a href="https://drive.google.com/file/d/1od-ZkV9B0begQauL_quoT0foDYWOnlRb/view?usp=sharing" target={"blank"} className="contact-certificates">
            <span>See More...</span>
          </a>
          </div>
        </div>
        <div className="certificates certificates-2">
          <div className="certificates-img"></div>
          <div className="certificates-info">
            <h3 className="name">EF English Test</h3>
            <h4 className="about">English Level certification</h4>
            <a href="https://www.efset.org/cert/pyvvSu" target={"blank"} className="contact-certificates">
            <span>See More...</span>
          </a>
          </div>
        </div>
        <div className="certificates certificates-3">
          <div className="certificates-img"></div>
          <div className="certificates-info">
            <h3 className="name">Cooming Soon!</h3>
            <h4 className="about">Google UX Design Professional Certificate</h4>
          </div>
        </div>
      </div>
  )
}

export default Certificates
"use strict";

import React, { Component } from "react";
import {Link} from "react-router-dom"

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL:
        "https://www.videvo.net/videvo_files/converted/2014_04/preview/Tea_Manufacture_Rolling.mov11996.webm",
    };
  }

  render() {
    return (
      <div>
        <span id="mainText">
          Wellness Starts 
          <br></br>at the First Sip
          {/* <span id="secondaryText">
            High Quality Teas * Globally Sourced
          </span>{" "} */}
          <br />
          <Link to="/ProductPage" href="#products" class="btn btn-primary" id="btn-icon-white-text" style={{}}>
            Shop Our Collection 
          </Link><br></br>
          <i class="fas fa-spa" id="btn-icon" style={{}}></i>
        </span>

         
        <video id="background-video" style={{ width: "100%" }} loop autoPlay>
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
          Your browser does not support the video tag.
        </video>

      </div>
    );
  }
}

export default Video;

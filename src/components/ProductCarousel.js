import React, { Component } from "react";
import {Link} from "react-router-dom"

export default class ProductCarousel extends Component {
  render() {
    return (
      <div>
          <div class="container container-fluid" style={{marginTop:"40px"}}>
        <div class="row ">
          <div class="col-sm-4">
            <img
              style={{
                opacity: "1",
                filter: "",
                marginTop: "0px",
                background: " rgba(0, 0, 0, 0.6))",
              }}
              className="hero"
              src={require("../img/teal-tea.jpg")}
            />
          </div>
          <div class="col-sm-4">
            <img
              style={{
                opacity: "1",
                filter: "",
                marginTop: "0px",
                background: " rgba(0, 0, 0, 0.6))",
              }}
              className="hero"
              src={require("../img/assorted.jpg")}
            />
          </div>
          <div class="col-sm-4">
            <img
              style={{
                opacity: "1",
                filter: "",
                marginTop: "0px",
                background: " rgba(0, 0, 0, 0.6))",
              }}
              className="hero"
              src={require("../img/porcelin.jpg")}
            />
          </div>
        </div>
        </div>
        <Link to="/ProductPage"
              href="#products"
              class="btn btn-primary"
              style={{ marginTop: "5%", color:"black" }}
            >
              Shop Our Collection
        </Link>
        <div class="container" >
        <h1 style={{marginTop:"90px", marginBottom:"40px"}}>Fine Organic Teas and Botanicals</h1>
        <div class="row "> 
          <div class="col-sm-6 section-img">
            <img
              style={{
                // opacity: "1",
                // filter: "",
                // marginTop: "0px",
                // background: " rgba(0, 0, 0, 0.6))",
                // width:"100%"
              }}
              className="hero"
              src={require("../img/oriental.jpg")}
            />
          </div>
          <div
            class="col-sm-6 section-box"
            style={{  }}
          >
            <h1>Education Center</h1>
           <h2> With brand new tea knowledge and discoveries unveiling themselves
            each day, the journey into the world of tea is an exciting and
            limitless adventure with room for us all to explore.</h2>
            <br></br>
            <a
              href="#"
              class="btn btn-primary"
              style={{ marginTop: "4%", color: "black"}}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div class="container" id="about" style={{ backgroundColor: "#dbdbdb", marginTop:"100px" }}>
          
          <div class="col-sm-6" style={{color:"black", textAlign:"center", fontFamily:"Cormorant Garamond, serif"}}>
          <h1 style={{paddingTop:"50px", textAlign:"center", }}>About Tea Haven</h1>
         <h2> We source from the top 2% of all teas produced in the world. Our
          mission is to create a delicious experience and in order to do so, we
          believe in providing our community with the highest quality product
          we can. All teas, herbs, and botanicals that come into our facilities are
          quality tested in our lab.<br></br>
          All products received and shipped out of Tea Haven go through
          stringent GMP and HACCP business practices and handling. Additionally,
          we do all that we can to ensure the highest level of sanitation and
          employee safety. Standard protocol at Tea Haven entails very strict
          QC processes and cleanliness practices.</h2>
          <br></br>
          <a
              href="#"
              class="btn btn-primary"
              style={{ marginTop: "4%", color: "black"}}
            >
            Read More
          </a>
        </div>

        <div class="col-sm-6">
            <img
              style={{
                opacity: "1",
                filter: "",
                marginTop: "0px",
                background: " rgba(0, 0, 0, 0.6))",
              }}
              className="hero about-img"
              src={require("../img/dramatic.jpg")}
            />
          </div>
        </div>
      </div>
    );
  }
}

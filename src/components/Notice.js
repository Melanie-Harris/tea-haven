import React from "react";
import {Link} from "react-router-dom"


class Notice extends React.Component {
  render() {
    return (
      <div class="">
        {/* <logo class="logo">
            <i class="fas fa-mug-hot"></i>
            Tea Haven
          </logo> */}
        <div class="notice" style={{zIndex:"999", textAlign:"center", color: "black"}}>
          
          SUMMER IS HERE! &nbsp;
          
          <Link to="/ProductPage" class="" style={{color:"#d6954b"}}>
            SHOP ICED TEAS
          </Link>
          
        </div>
      </div>
    );
  }
}

export default Notice;

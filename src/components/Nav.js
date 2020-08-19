import React from "react";
import Notice from "./Notice"
import action from "../scripts/action";
import {Link} from "react-router-dom"

class Nav extends React.Component {
  render() {
    return (
      <div class="" id="myTopnav">
          <div style={{background:"white"}}>
          <Notice/></div>
        <div class="topnav" >
          {/* <a href="#about">About</a> */}
          {/* <div class="dropdown">
                        <button class="dropbtn">Dropdown
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div> */}
          <logo class="logo">
          <i class="fab fa-pagelines"></i> &nbsp;
            Tea Haven
          </logo>

          <Link to="/ShoppingCart" class="">
            <i class="fas fa-shopping-cart"></i>
          </Link>

          {/* <a href="#home">Contact</a> */}
          <Link to="/ProductPage">Products</Link>
          {/* <a href="#about">About</a> */}
          <Link to="/" class="">
            Home
          </Link>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            &#9776;
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;

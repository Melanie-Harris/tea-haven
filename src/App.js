import React, { Component } from "react";
import {Switch, Route} from "react-router-dom"
import Products from "./components/Products";
import Filter from "./components/Filter";
import ShoppingCart from "./components/ShoppingCart";

import "./App.css";
// import HeroImage from "./components/HeroImage";
import Nav from "./components/Nav";
import About from "./components/About";
import Video from "./components/Video"
// import Notice from "./components/Notice"
import ProductCarousel from "./components/ProductCarousel";
// import Contact from "./components/Contact";


class App extends Component {
  constructor() {
    super();
    this.state = {
      size: "",
      sort: "",
      cartItems: [],
      products: [],
      filteredProducts: []
    };
  }
  componentWillMount() {
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }

    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .catch(err =>
        fetch("db.json")
          .then(res => res.json())
          .then(data => data.products)
      )
      .then(data => {
        this.setState({ products: data });
        this.listProducts();
      });
  }

  handleRemoveFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.id !== product.id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  };

  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach(cp => {
        if (cp.id === product.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  };

  listProducts = () => {
    this.setState(state => {
      if (state.sort !== "") {
        state.products.sort((a, b) =>
          state.sort === "lowestprice"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
              ? 1
              : -1
        );
      } else {
        state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      if (state.size !== "") {
        return {
          filteredProducts: state.products.filter(
            a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
          )
        };
      }
      return { filteredProducts: state.products };
    });
  };
  handleSortChange = e => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  };
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
    this.listProducts();
  };

  render() {
    return (<div>
      {/* <Notice/> */}
      <Nav />

      <Switch>
        <Route exact path="/">
        <Video/>
      
      <div class="section">
      <h1>Trending Teas + Teaware</h1>
      <ProductCarousel/>
      </div>
      <About />
        </Route>
        <Route exact path="/ProductPage">
        <div className="container">
          {/* <h1 className="text">E-commerce Shopping Cart Application</h1> */}
          
          <div style={{marginTop:"4%"}} className="row">
            <div className="col-md-9">

              <Filter
                count={this.state.filteredProducts.length}
                handleSortChange={this.handleSortChange}
                handleSizeChange={this.handleSizeChange}
              />
              <hr /> 
              <Products
                products={this.state.filteredProducts}
                handleAddToCart={this.handleAddToCart}
              /> 
            </div>
            <div className="col-md-3">
              <ShoppingCart

                cartItems={this.state.cartItems}
                handleRemoveFromCart={this.handleRemoveFromCart}
              />
            </div>
          </div>
        </div>
        </Route>
        <Route exact path="/ShoppingCart">
          <div style={{textAlign:"center",marginLeft:"25%"}} className="col-md-6">
                <ShoppingCart

                  cartItems={this.state.cartItems}
                  handleRemoveFromCart={this.handleRemoveFromCart}
                /> 
          </div>
        </Route>
      </Switch>





      {/* <HeroImage /> */}
      {/* <Video/>
      
      <div class="section">
      <h1>Trending Teas + Teaware</h1>
      <ProductCarousel/>
      </div>
      <About /> */}
{/* <hr /> */}
      {/* <div className="container">
        <h1 className="text">E-commerce Shopping Cart Application</h1>
        
        <div className="row">
          <div className="col-md-9">

            <Filter
              count={this.state.filteredProducts.length}
              handleSortChange={this.handleSortChange}
              handleSizeChange={this.handleSizeChange}
            />
            <hr /> 
             <Products
              products={this.state.filteredProducts}
              handleAddToCart={this.handleAddToCart}
            /> 
          </div>
          <div className="col-md-3">
            <ShoppingCart

              cartItems={this.state.cartItems}
              handleRemoveFromCart={this.handleRemoveFromCart}
            />
            <Contact />
          </div>
        </div>
      </div> */}
      
    </div>
    );
  }
}

export default App;
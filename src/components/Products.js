
import React, { Component } from 'react';
import formatCur from '../formatCur'

export default class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center" style={{ backgroundColor: "rgb(219, 219, 219)", width:"80%", color:"black"}}>
                    <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCart(e, product)}>
                        <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
                        <b>
                        <p style={{ backgroundColor: "", color: "black", paddingTop: "20px", paddingBottom: "20px" }}>{product.title}</p></b>
                    </a>
                    <b>{formatCur.formatCurrency(product.price)}</b>
                    <button style={{textAlign: "left", marginBottom:"20px", marginLeft: "20px"}} className="btn btn-success" onClick={(e) => this.props.handleAddToCart(e, product)}>Add to cart</button>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
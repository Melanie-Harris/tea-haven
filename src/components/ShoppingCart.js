import React, { Component } from 'react';
import formatCur from '../formatCur'


export default class ShoppingCart extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div className="alert" id="cart" style={{ backgroundColor:"rgb(219, 219, 219)", color:"black", marginTop:"110px"}}>
                {cartItems.length === 0
                    ? "Shopping cart is empty" :
                    <div>You have {cartItems.length} items in the basket. <hr /></div>
                }
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    <button style={{ float: 'right', backgroundColor:"#c5362b", color:"black" }} className="btn btn-danger btn-xs"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}><i class="far fa-times-circle"></i></button>
                                    <br />
                                    {item.count} X {formatCur.formatCurrency(item.price)}
                                </li>))
                            }
                        </ul>

                        <b>Sum: {formatCur.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b>
                        <br></br>
                    <button onClick={() => alert('Demo version not connected to actual payment API.')} className="btn btn-success" style={{color:"black"}}>Checkout</button>
                    </div>
                }
            </div>
        )
    }
}
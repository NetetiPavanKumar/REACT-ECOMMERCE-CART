import "./CheckOut.css"
import "./CheckOut-Header.css"
import {Link} from "react-router-dom"
import { useState,useEffect } from "react";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary.jsx";

export default function CheckOut({cart,loadCart}){
    const [deliveryOptions,setDeliveryOptions]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime").then((response)=>{
            return response.json()
        }).then((data)=>{
            setDeliveryOptions(data)
        })
    },[])

    return(
    <>
        <div className="checkout-header">
        <div className="header-content">
            <div className="checkout-header-left-section">
            <Link to="/">
                <img className="logo" src="images/logo.png" />
                <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
            </div>

            <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
                to="/">3 items</Link>)
            </div>

            <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
            </div>
        </div>
        </div>
        <div className="checkout-page">
            <div className="page-title">Review your order</div>
            <div className="checkout-grid">
                <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />
                <PaymentSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
            </div>
        </div>
    </>
    )
}
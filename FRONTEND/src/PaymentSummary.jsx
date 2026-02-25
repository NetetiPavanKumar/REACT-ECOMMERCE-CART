import "./Checkout.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function PaymentSummary({cart,deliveryOptions,loadCart}){
    let totalCnt=0;
    let amount=0;
    let ship=0;
    const nav=useNavigate();
    async function addtoOrders(){
        await axios.post("http://localhost:3000/api/orders");
        await loadCart();
        nav("/orders");
    }
    cart.forEach(cartItem => {
        deliveryOptions.forEach((Option)=>{
            if(Option.id===cartItem.deliveryOptionId){
                ship+=Option.priceCents;
            }
        })
        totalCnt+=cartItem.quantity;
        amount+=Number((+cartItem.quantity) * (+((cartItem.product.priceCents/100).toFixed(2))));
    });
    return (
        <div className="payment-summary">
                <div className="payment-summary-title">
                Payment Summary
                </div>

                <div className="payment-summary-row">
                <div>Items ({totalCnt}):</div>
                <div className="payment-summary-money">${amount}</div>
                </div>

                <div className="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div className="payment-summary-money">${(ship/100).toFixed(2)}</div>
                </div>

                <div className="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div className="payment-summary-money">${(amount+ship/100).toFixed(2)}</div>
                </div>

                <div className="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div className="payment-summary-money">${((amount+ship/100)*0.1).toFixed(2)}</div>
                </div>

                <div className="payment-summary-row total-row">
                <div>Order total:</div>
                <div className="payment-summary-money">${(amount+ship/100+((amount+ship/100)*0.1)).toFixed(2)}</div>
                </div>

                <button className="place-order-button button-primary" onClick={()=>{
                    addtoOrders();
                }}>
                Place your order
                </button>
            </div>
    )
}
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import DeliveryOptions from "./DeliveryOptions.jsx"
import "./CheckOut.css"
import axios from "axios";
export function OrderSummary({cart,deliveryOptions,loadCart}){
    console.log(`cart from Orders Summary`);
    console.log(cart)
    async function deleteItem(cartItem){
        await axios.delete(`http://localhost:3000/api/cart-items/${cartItem.productId}`);
        await loadCart();
    }
    return (
            <div className="order-summary">
            {cart.map((cartItem)=>{
                let sele=1;
                deliveryOptions.forEach((Option)=>{
                    if(Option.id==cartItem.deliveryOptionId){
                        sele=Option
                    }
                })
                return(
                <div className="cart-item-container" key={cartItem.productId}>
                    <div className="delivery-date">
                        Delivery date: {dayjs(sele.estimatedDeliveryTimeMs).format('dddd MMMM D')}
                    </div>

                    <div className="cart-item-details-grid">
                        <img className="product-image"
                        src={cartItem.product.image} />

                        <div className="cart-item-details">
                        <div className="product-name">
                            {cartItem.product.name}
                        </div>
                        <div className="product-price">
                            {`$${(cartItem.product.priceCents/100).toFixed(2)}`}
                        </div>
                        <div className="product-quantity">
                            <span>
                            Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                            </span>
                            <span className="update-quantity-link link-primary">
                            Update
                            </span>
                            <span className="delete-quantity-link link-primary" onClick={()=>{
                                deleteItem(cartItem);
                            }}>
                            Delete
                            </span>
                        </div>
                        </div>

                        <DeliveryOptions loadCart={loadCart} deliveryOptions={deliveryOptions} cartItem={cartItem} />
                    </div>
                </div>
                );

            })}
            </div>
    )
}
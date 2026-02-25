import dayjs from "dayjs"
import axios from "axios";
export default function DeliveryOptions({cartItem,deliveryOptions,loadCart}){
    async function updateDeliveryOption(Optionid){
        try{
        await axios.put(`http://localhost:3000/api/cart-items/${cartItem.productId}`,{
            deliveryOptionId:Optionid
        })
        }
    catch(error){
        console.log("Error",error);
    }
        await loadCart();
    
    }
    return(
    <div className="delivery-options">
        <div className="delivery-options-title">
            Choose a delivery option:
                {deliveryOptions.map((Option)=>{
                    let price1="FREE";
                    if(Option.priceCents!==0){
                        price1=`$${(Option.priceCents/100).toFixed(2)}`;
                    }
                    let ischecked=false;
                    if(Option.id===cartItem.deliveryOptionId){
                        ischecked=true;
                    }
                    return(
                    <div className="delivery-option" key={Option.id} onClick={()=>{updateDeliveryOption(Option.id)}}>
                    <input type="radio" checked={ischecked}
                    className="delivery-option-input"
                    name={`delivery-option-${cartItem.productId}`} onChange={()=>{}}/>
                    <div>
                    <div className="delivery-option-date">
                        {dayjs(Option.estimatedDeliveryTimeMs).format('dddd MMMM D')}
                    </div>
                    <div className="delivery-option-price">
                        {price1} - Shipping
                    </div>
                    </div>
                </div>
                    )
                })}
        </div>
    </div>
    )
}
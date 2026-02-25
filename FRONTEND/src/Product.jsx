import { useState } from "react";
import axios from "axios";

export function Product({product,loadCart}){
    const [quantity,setQuantity]=useState(1);
    async function addToCart(pid){
    // let isMatched=false;
    // cart.forEach((cartItem)=>{
    //   if(cartItem.productId==pid){
    //     cartItem.quantity+=1;
    //     isMatched=true;
    //   }
    // })
    // if(!isMatched){
    //   products.forEach((product)=>{
    //     if(product.id===pid){
    //       setCart([...cart,{id:crypto.randomUUID(),productId:pid,quantity:1,deliveryOptionId:"1",product}])
    //     }
    //   })
    // }
      await axios.post("http://localhost:3000/api/cart-items",{
      //id:crypto.randomUUID(),productId:pid,quantity:1,deliveryOptionId:"1",product
      productId:pid,quantity:quantity
    })
    setQuantity(1);
    await loadCart();
  }
    return (
        <div className="product-container" key={product.id}>
              <div className="product-image-container">
                <img className="product-image"
                  src={product.image} />
              </div>

              <div className="product-name limit-text-to-2-lines">
                {product.name}
              </div>

              <div className="product-rating-container">
                <img className="product-rating-stars"
                  src={`images/ratings/rating-${product.rating.stars*10}.png`} />
                <div className="product-rating-count link-primary">
                  {product.rating.count}  
                </div>
              </div>

              <div className="product-price">
                {`$${(product.priceCents/100).toFixed(2)}`}
              </div>

              <div className="product-quantity-container">
                <select value={quantity} onChange={(event)=>{
                  let selectedValue=Number(event.target.value);
                  setQuantity(selectedValue);
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div className="product-spacer"></div>

              <div className="added-to-cart">
                <img src="images/icons/checkmark.png" />
                Added
              </div>

              <button className="add-to-cart-button button-primary" onClick={()=>{
                addToCart(product.id);}
                }>
                Add to Cart
              </button>
        </div>
    )
}
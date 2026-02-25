import { useState,useEffect } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css'
import HomePage from './HomePage.jsx'
import CheckOut from './CheckOut.jsx';
import Orders from './Orders.jsx'




export function App(){
console.log("Hiii this is from App when settingCart State")
    function loadCart(){
        fetch("http://localhost:3000/api/cart-items?expand=product").then((reponse)=>{
            return reponse.json()
        }).then((data)=>{
            setCart(data)
        })
    }
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/api/products").then((response)=>{
        return response.json()
        }).then((data)=>{
        setProducts(data);
        })
    },[])
    const [cart,setCart] =useState([]);
    useEffect(()=>{
        loadCart();
    },[])
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} setCart={setCart} products={products} loadCart={loadCart}/>}></Route>
        <Route path="/checkout" element={<CheckOut cart={cart} loadCart={loadCart} />}></Route>
        <Route path="/orders" element={<Orders cart={cart} products={products} />}></Route>
      </Routes>
    </BrowserRouter>
    )
}
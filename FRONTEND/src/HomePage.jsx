import "./HomePage-Header.css"
import './HomePage.css'
import Header from "./Header.jsx"
import { ProductsGrid } from "./ProductsGrid.jsx";
//import {products} from "./products.jsx"

export default function HomePage({cart,setCart,products,loadCart}) {
  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  )
}

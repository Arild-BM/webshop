// Show total cost for bought items and transportations and let you "pay"

import { Link } from "react-router-dom"

function CheckOut({boughtItems, setBoughtItems}) {
  
    return (
      <div>
        <p className = "heading basketLine">Shopping Basket</p>
        
        <div className = "total basketLine">
            <p className = "totalName">Bought items</p>
            <p className = "itemPrice">{boughtItems.reduce(((total, item) => total + item.price), 0).toFixed(2)}</p>
        </div>
        <div className = "total basketLine">
            <p className = "totalName">Transportation</p>
            <p className = "itemPrice">50.00</p>
        </div>
        <div className = "total basketLine">
            <p className = "totalName">Total</p>
            <p className = "itemPrice">{boughtItems.reduce(((total, item) => total + item.price), 50).toFixed(2)}</p>
        </div>
        <div className = "button-line">
            <Link to="/" className = "buttonLength button">Buy more!</Link>
            <Link to="/" className = "buttonLength button" onClick={() => setBoughtItems([])} >Pay</Link>
        </div>
      </div>
    )
  }

  export default CheckOut
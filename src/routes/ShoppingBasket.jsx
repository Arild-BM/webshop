// Show page for shopping basket with total sum and let you delete items

import { Link } from "react-router-dom"

function ShoppingBasket({boughtItems, setBoughtItems}) {
  
    return (
      <div>
        <p className = "heading basketLine">Shopping Basket</p>
        {boughtItems.map((item, index) => 
        (
          <div key = {index} className = "basketLine">
            <img className = "itemPicture" src={item.image} alt="" />
            <p className = "itemName" >{item.title}</p>
            <p className = "itemPrice" >{item.price.toFixed(2)}</p>
            <p className = "changeNbrOfItems"
              onClick = {() => item.number > 1 ?
                setBoughtItems((items) => 
                [...items.slice(0, index), {...items[index], number: items[index].number + -1}, ...items.slice(index+1)])
                : setBoughtItems(items => [...items.slice(0, index), ...items.slice(index+1) ])
              }
            >-</p>
            <p className = "nbrOfItems" >{item.number}</p>
            <p className = "changeNbrOfItems"
              onClick = {() => 
                setBoughtItems((items) => 
                [...items.slice(0, index), {...items[index], number: items[index].number + 1}, ...items.slice(index+1)])}
            >+</p>
            <p className = "itemPrice" >{(item.number * item.price).toFixed(2)}</p>
            <p className = "deleteItem" onClick = {() => setBoughtItems(items => [...items.slice(0, index), ...items.slice(index+1) ])}>-</p>
          </div>
        ))}
        <div className = "total basketLine">
            <p className = "totalName">Total cost</p>
            <p className = "itemPrice">{boughtItems.reduce(((total, item) => total + item.number * item.price), 0).toFixed(2)}</p>
        </div>
        <div className = "button-line">
          <Link to="/" className = "buttonLength button">Buy more!</Link>
          {boughtItems.length > 0 ?
            <Link to="/checkout" className = "buttonLength button">Check Out!</Link>
            : <p className = "buttonLength button inactive" >Check out!</p>
          }
        </div>
      </div>
    )
  }

  export default ShoppingBasket
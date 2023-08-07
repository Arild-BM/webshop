// Show page for shopping basket with total sum and let you delete items
function ShoppingBasket({boughtItems, setBoughtItems, setActivePage}) {
  
    return (
      <div>
        <p className = "heading basketLine">Shopping Basket</p>
        {boughtItems.map((item, index) => 
        (
          <div key = {index} className = "basketLine">
            <img className = "itemPicture" src={item.image} alt="" />
            <p className = "itemName" >{item.title}</p>
            <p className = "itemPrice" >{item.price.toFixed(2)}</p>
            <p className = "deleteItem" onClick = {() => setBoughtItems(items => [...items.slice(0, index), ...items.slice(index+1) ])}>-</p>
          </div>
        ))}
        <div className = "total basketLine">
            <p className = "totalName">Total cost</p>
            <p className = "itemPrice">{boughtItems.reduce(((total, item) => total + item.price), 0).toFixed(2)}</p>
        </div>
        <div className = "button-line">
            <p className = "buttonLength button" onClick={() => setActivePage('categories')}>Buy more!</p>
            <p className = {boughtItems.length > 0 ? "buttonLength button" : "buttonLength button inactive" }
                onClick={boughtItems.length > 0 ? () => setActivePage('checkOut') : null}>Check out!
            </p>
        </div>
      </div>
    )
  }

  export default ShoppingBasket
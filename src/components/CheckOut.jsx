function CheckOut({boughtItems, setBoughtItems, setActivePage}) {
  
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
            <p className = "buttonLength button" onClick={() => setActivePage('categories')}>Buy more!</p>
            <p className = "buttonLength button" 
                onClick={() => {
                    setBoughtItems([])
                    setActivePage('categories')}}
            >Pay</p>
        </div>
      </div>
    )
  }

  export default CheckOut
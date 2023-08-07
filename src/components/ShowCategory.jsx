// Let you see a spesific category and choose a spesific item
import { useState, useEffect } from "react"

function ShowCategory({setCategories, activePage, setActivePage,
  setBoughtItems, setActiveImage, setPrevPage}) {
    const [categoryContent, setCategoryContent] = useState([{price: "Collecting data"}])
  
    useEffect(() => {
      async function getCategoryContent() {
        try {
          const fetchData = await fetch(`https://fakestoreapi.com/products/category/${activePage}`)
          const dataArray = await fetchData.json()
          setCategoryContent([...dataArray])
          } catch(err) {
          console.log(err)
          setCategoryContent([{price: "Database offline!"}])
        }
      }
      getCategoryContent()
      // eslint-disable-next-line
      }, []
    )

    // Let you see a spesific item and include the item in the shopping basket
    // You can also click on the image and see a lager version of the image
    function ItemPage({id}) {
      const index = categoryContent.findIndex(item => item.id === id)
  
      return (
        <div>
          <div className="item-page">
            <img className="imageLarge" 
              src={categoryContent[index].image}
              onClick={() => {
                setActivePage('viewPicture')
                setActiveImage(categoryContent[index].image)
                setPrevPage(categoryContent[index].category)
              }}
              alt=""
            />
            <div>
              <p>Product id: {categoryContent[index].id}</p>
              <p>Product: {categoryContent[index].title}</p>
              <p>Price: {categoryContent[index].price}</p>
              <p className="button buttonLength2"
                onClick = {() => setBoughtItems((items) => [...items, categoryContent[index]])}
              >Buy</p>
              <p>Product rating: {categoryContent[index].rating.rate}</p>
              <p>Number of ratings: {categoryContent[index].rating.count}</p>
            </div>
          </div>
          <p className="description" >Product description:</p>
          <p className="description" >{categoryContent[index].description}</p>
          <div className = "button-line">
            <p className = "button" onClick={() => setActivePage(categoryContent[index].category)}>Back to {categoryContent[index].category}</p>
            <p className = "button" onClick={() => setActivePage('categories')}>Back to main Page</p>
          </div>
        </div>
      )
    }
  
    // Let you see a spesific category and select items in the category
    function CategoryPage() {
  
      return (
        <div>
          <div className="categoryPage">
          {categoryContent.map((item, index) => (
            <div
              key = {index}
              className = "category"
              onClick={() => setActivePage(item.id)}
            >
              <img className = "imageMedium" src={item.image} alt="" />
              <p className = "shortName">{item.title}</p>
              <p>{item.price === "Collecting data" || item.price === "Database offline!" ? item.price : `Price: ${item.price}`}</p>
            </div>
            )
          )}
        </div>
        <div className = "button-line">
          <p className = "button" onClick={() => setActivePage('categories')}>Back to main page</p>
        </div>
      </div>
      )
    }
  
    // Here the categorypage or the itempage will be selected
    return (
      <div>
        {typeof(activePage) === 'number' ? <ItemPage id = {activePage}/> : <CategoryPage /> }
      </div>
    )
  }

  export default ShowCategory
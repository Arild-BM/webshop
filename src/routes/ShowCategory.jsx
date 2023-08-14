// Let you see a spesific category and choose a spesific item
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function ShowCategory() {
    const [categoryContent, setCategoryContent] = useState([{price: "Collecting data"}])
    const params = useParams()
  
    useEffect(() => {
      async function getCategoryContent() {
        try {
          const fetchData = await fetch(`https://fakestoreapi.com/products/category/${params.categoryID}`)
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

        // Let you see a spesific category and select items in the category
    return (
      <div>
        <div className="categoryPage">
        {categoryContent.map((item, index) => (
          <Link to={`/products/${item.id}`} 
            key = {index} 
            className = "category"
            // onClick={() => setActiveProduct(item.id)}
          >
            <img className = "imageMedium" src={item.image} alt="" />
            <p className = "shortName">{item.title}</p>
            <p>{item.price === "Collecting data" || item.price === "Database offline!" ? item.price : `Price: ${item.price}`}</p>
          </Link>
          )
        )}
      </div>
      <div className = "button-line">
        <Link to="/" className = "button">Back to main page</Link>
      </div>
    </div>
    )
  }

  export default ShowCategory
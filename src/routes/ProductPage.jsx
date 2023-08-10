// Let you see a spesific item and include the item in the shopping basket
// You can also click on the image and see a lager version of the image
import { Link, useParams } from "react-router-dom"

function ProductPage({products, setBoughtItems, setActiveImage}) {
    const index = useParams().id-1
  
    return (
      <div>
        <div className="item-page">
          <Link to={`/products/${index+1}/image`}>
            <img className="imageLarge" 
              src={products[index].image}
              alt=""
            />
          </Link>
          <div>
            <p><b>Product id: </b>{products[index].id}</p>
            <p><b>Product: </b>{products[index].title}</p>
            <p><b>Price: </b>{products[index].price}</p>
            <p className="button buttonLength2"
              onClick = {() => setBoughtItems((items) => [...items, products[index]])}
            >Buy</p>
            <p><b>Product rating: </b>{products[index].rating.rate}</p>
            <p><b>Number of ratings: </b>{products[index].rating.count}</p>
          </div>
        </div>
        <p className="description" ><b>Product description:</b></p>
        <p className="description" >{products[index].description}</p>
        <div className = "button-line">
          <Link to={`/category/${products[index].category}`} className = "button">Back to {products[index].category}</Link>
          <Link to="/" className = "button">Back to main page</Link>
        </div>
      </div>
    )
  }

  export default ProductPage
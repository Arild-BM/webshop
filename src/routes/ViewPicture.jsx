// Page to view a large picture of an item
import { useContext } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

// Contexts
import MyContext from "../contexts/MyContext"

function ViewPicture() {
  const id = useParams().id-1
  const navigate = useNavigate()
  const products = useContext(MyContext);
  
  return (
    <div>
      {console.log(products)}
      <div className = "pointer" onClick={() => navigate(-1)}>
        <img className = "activeImage"
          src={products[id].image}
          alt=""
          />
      </div>
      <div className = "button-line">
        <Link to={`/products/${id+1}`} className = "buttonLength3 button">Back to product</Link>
      </div>
    </div>
  )
}

  export default ViewPicture
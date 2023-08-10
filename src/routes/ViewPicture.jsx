// Page to view a large picture of an item
import { Link, useParams, useNavigate } from "react-router-dom"

function ViewPicture({products}) {
  const id = useParams().id-1
  const navigate = useNavigate()
  
  return (
    <div>
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
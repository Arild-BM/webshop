// Show all (4) categories in the webshop and let you choose category

import { Link } from "react-router-dom"

function ShowCategories({categories, categoryPictures, setActivePage}) {
  
    return (
      <div className="categoryPage">
        {categories.map((item, index) => (
            <Link to={`/category/${item}`} key = {index} className = "category categoryMain">
              <img className = "imageMedium" src={categoryPictures[index]} alt="" />
              <p className = "text-main-menu" >{item}</p>
            </Link>
          )
        )}
      </div>
    )
  }

  export default ShowCategories
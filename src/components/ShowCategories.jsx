// Show all (4) categories in the webshop and let you choose category
function ShowCategories({categories, categoryPictures, setActivePage}) {
  
    return (
      <div className="categoryPage">
        {categories.map((item, index) => (
          <div
            key = {index}
            className = "category categoryMain"
            onClick={() => setActivePage(item)}
          >
            <img className = "imageMedium" src={categoryPictures[index]} alt="" />
            <p className = "capitalized" >{item}</p>
          </div>
          )
        )}
      </div>
    )
  }

  export default ShowCategories
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
            <p>{item}</p>
          </div>
          )
        )}
      </div>
    )
  }

  export default ShowCategories
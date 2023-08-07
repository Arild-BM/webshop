// Page to view a large picture of an item
function ViewPicture({activeImage, setActivePage, prevPage}) {
  
    return (
      <div>
        <img className = "activeImage" src={activeImage} alt="" />
        <div className = "button-line">
            <p className = "buttonLength3 button" onClick={() => setActivePage(prevPage)}>Back to {prevPage}</p>
        </div>
      </div>
    )
  }

  export default ViewPicture
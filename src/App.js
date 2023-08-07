import { useState, useEffect } from 'react'
import './App.css';
import basket from "./pictures/basket.svg"
import ShowCategories from './components/ShowCategories';
import ShowCategory from "./components/ShowCategory"
import ShoppingBasket from "./components/ShoppingBasket"
import ContactInfo from "./components/ContactInfo"
import CheckOut from "./components/CheckOut"
import ViewPicture from "./components/ViewPicture"

function App() {
  const [categories, setCategories] = useState(["Collecting data"])
  const [categoryPictures, setCategoryPictures] = useState([])
  const [activePage, setActivePage] = useState("categories")
  const [activeImage, setActiveImage] = useState("")
  const [prevPage, setPrevPage] = useState("")
  const [boughtItems, setBoughtItems] = useState("fakeStoreBasket" in localStorage ? JSON.parse(localStorage.getItem("fakeStoreBasket")) : [])

  useEffect(() => {
    async function getCategories() {
      try {
        const fetchData1 = await fetch('https://fakestoreapi.com/products/categories')
        const dataArray1 = await fetchData1.json()
        setCategories([...dataArray1])
        for (let index = 0 ; index < dataArray1.length ; index++) {
          const fetchData2 = await fetch(`https://fakestoreapi.com/products/category/${dataArray1[index]}`)
          const dataArray2 = await fetchData2.json()
          setCategoryPictures(oldArray => [
            ...oldArray.slice(0, index),
            dataArray2[0].image,
            ...oldArray.slice(index+1)
          ])
        }

      } catch(err) {
        console.log(err)
        setCategories(["No connection to webshop"])
      }
    }
    getCategories()
    // eslint-disable-next-line
    }, []
  )

  useEffect(() => {
    localStorage.setItem("fakeStoreBasket", JSON.stringify(boughtItems)) 
    }, [boughtItems]
  )

  return (
    <div className="App">
      <header className="app-header">
        <h4 className = "pointer" onClick={() => setActivePage('categories')}>FakeStore WebShop</h4>
        <h4 className = "pointer" onClick={() => setActivePage('contactInfo')}>Contact info</h4>
        <div className = {boughtItems.length > 0 ? "pointer shopping-basket" : "shopping-basket"} >
          <img src = {basket}
            alt = "shopping basket"
            onClick={boughtItems.length > 0 ? () => setActivePage('shoppingBasket') : null}
          />
          {boughtItems.length > 0 ?
            <p className = "basket-content"
              onClick={() => setActivePage('shoppingBasket')}
              >{boughtItems.length}
            </p> 
            : null
          }
        </div>
      </header>
      <main>
        {activePage === "categories" ? <ShowCategories 
          categories = {categories}
          categoryPictures = {categoryPictures}
          setActivePage = {setActivePage}
        /> : 
        activePage === "shoppingBasket" ? <ShoppingBasket 
          boughtItems = {boughtItems}
          setBoughtItems = {setBoughtItems}
          setActivePage = {setActivePage}
        /> : 
        activePage === "contactInfo" ? <ContactInfo 
        setActivePage = {setActivePage}
        /> : 
        activePage === "viewPicture" ? <ViewPicture
        activeImage = {activeImage}
        setActivePage = {setActivePage}
        prevPage = {prevPage}
        /> : 
        activePage === "checkOut" ? <CheckOut 
          boughtItems = {boughtItems}
          setBoughtItems = {setBoughtItems}  
          setActivePage = {setActivePage}
        /> : <ShowCategory
          setCategories = {setCategories}
          activePage = {activePage}  
          setActivePage = {setActivePage}
          setBoughtItems = {setBoughtItems}
          setActiveImage = {setActiveImage}
          setPrevPage = {setPrevPage}
        /> }
      </main>
    </div>
  );
}

export default App;

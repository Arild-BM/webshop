import { useState, useEffect } from 'react'
import './App.css';
import basket from "./pictures/basket.svg"
import ShowCategories from './routes/ShowCategories';
import ShowCategory from "./routes/ShowCategory"
import ProductPage from "./routes/ProductPage"
import ShoppingBasket from "./routes/ShoppingBasket"
import ContactInfo from "./routes/ContactInfo"
import CheckOut from "./routes/CheckOut"
import ViewPicture from "./routes/ViewPicture"

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom"

function App() {
  const [categories, setCategories] = useState(["Collecting data"])
  const [categoryPictures, setCategoryPictures] = useState([])
  const [products, setProducts] = useState([])
  const [boughtItems, setBoughtItems] = useState("fakeStoreBasket" in localStorage ? JSON.parse(localStorage.getItem("fakeStoreBasket")) : [])

  // Get categories and categorypictures from API
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

// Get all products from API
useEffect(() => {
  async function getAllProducts() {
    try {
      const fetchData = await fetch('https://fakestoreapi.com/products')
      const dataArray = await fetchData.json()
      setProducts([...dataArray])
    } catch(err) {
      console.log(err)
      setProducts(["No connection to webshop"])
    }
  }
  getAllProducts()
  // eslint-disable-next-line
  }, []
)

  // Store shopping basket in local storage after every change
  useEffect(() => {
    localStorage.setItem("fakeStoreBasket", JSON.stringify(boughtItems)) 
    }, [boughtItems]
  )

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className="app-header">
          <Link to="/"><h4>FakeStore WebShop</h4></Link>
          <Link to="/contactinfo"><h4>Contact info</h4></Link>
          <Link className = {boughtItems.length > 0 ? "shopping-basket" : "inactive-pointer shopping-basket"} to="/shoppingbasket">
            <img src = {basket}
              alt = "shopping basket"
            />
            {boughtItems.length > 0 ?
              <p className = "basket-content"
              >{boughtItems.length}
              </p> 
              : null
            }
          </Link>
        </header>
        {/* Active page */}
        <main>
          <Routes>
            <Route path="/" 
              element = {<ShowCategories
                categories = {categories}
                categoryPictures = {categoryPictures}
              />}
            />
            <Route path="/shoppingbasket"
              element = {<ShoppingBasket
                boughtItems = {boughtItems}
                setBoughtItems = {setBoughtItems}
              />}
            />
            <Route path="/contactinfo" element={<ContactInfo />} />
            <Route path="/checkout"
              element={<CheckOut
                boughtItems = {boughtItems}
                setBoughtItems = {setBoughtItems}
              />}
            />
            <Route path="/category/:categoryID"
              element={<ShowCategory />}
            />
            <Route path="/products/:id"
              element={<ProductPage
                products = {products}
                setBoughtItems = {setBoughtItems}
              />}
            />
            <Route path="/products/:id/image"
              element={<ViewPicture
                products = {products}
              />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

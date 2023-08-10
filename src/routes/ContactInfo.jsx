// Page for contact information

import { Link } from "react-router-dom"

function ContactInfo({setActivePage}) {
  
    return (
      <div>
        <p className = "contactInfo">Contact info for FakeStore WebShop: fakestore_webshop (at) fakestore.com</p>
        <div className = "button-line">
          <Link to="/" className = "buttonLength button">Go to shop!</Link>
        </div>
      </div>
    )
  }

  export default ContactInfo
function ContactInfo({setActivePage}) {
  
    return (
      <div>
        <p className = "contactInfo">Contact info for FakeStore WebShop: fakestore_webshop (at) fakestore.com</p>
        <p className = "buttonLength button" onClick={() => setActivePage('categories')}>Go to shop!</p>
      </div>
    )
  }

  export default ContactInfo
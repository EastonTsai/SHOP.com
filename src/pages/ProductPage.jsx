import { defaultClassificationItem, defaultDescription } from "dummy/dummy"


import "pages/productPage.scss"
import Footer from "components/footer/Footer"
import Header from "components/header/Header"
import Classification from "components/main/Classification"
// import LeftNavbar from "components/main/LeftNavbar"
import LeftNavbarItem from "components/main/LeftNavbarItem"
import { useState } from "react"
import SectionCard from "components/sharedComponents/SectionCard"


const ProductPage = () => {
  const [leftNavbarItems, setLeftNavbarItems] = useState(defaultClassificationItem)
  const [descriptionItems, setDescriptionItems] = useState(defaultDescription)
  return (
    <>
      <Header />
      <div className="product">
        <div className="container">
          <Classification />
          <div className="product_main">
            <input type="checkbox" id="leftNavbar-checkbox" />
            <div className="product_main_leftNavbar">
              {leftNavbarItems.map(item =>
                <LeftNavbarItem key={item.url} title={item.title} items={item.items} />)}
            </div>
            <div className="product_main_description">
              <label className="left" htmlFor="leftNavbar-checkbox" ><span></span></label>
              <div className="description_main">
                <div className="cards">
                  {descriptionItems.map(item =>
                    <SectionCard key={item.url} url={item.url} content={item.title} />)}
                </div>
                {descriptionItems &&
                  <div className="bottom">
                    <span></span>
                    沒有其它商品了
                    <span></span>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default ProductPage


import { defaultBanner, defaultSection, defaultSectionTwo } from "dummy/dummy"
import "components/main/main.scss"
import { NavItem } from "components/sharedComponents/NavItem"
import { useState, useEffect } from "react"
import { getBanner } from "api/CRUD"
import Banner from "components/main/Banner"
import Section from "./Section"

const Main = () => {
  const [bannerPictures, setBannerPictures] = useState(defaultBanner)
  const [specialOffer, setSpecialOffer] = useState(defaultSection)
  const [newArrivals, setNewArrivals] = useState(defaultSectionTwo)
  // useEffect(() => {
  //   (async () => {
  //     const data = await getBanner()
  //     if (data) {
  //       setBannerPictures(data)
  //     }
  //   })()
  // }, [])

  return (
    <div className="main">
      <div className="container">
        <div className="classification">
          <ul>
            <NavItem to="/" title="WOMEN" />
            <NavItem to="/" title="MEN" />
            <NavItem to="/" title="KIDS" />
            <NavItem to="/" title="SALE" />
            <NavItem to="/" title="EDIT" />
            <NavItem to="/" title="NET LITE" />
          </ul>
        </div>
        <Banner pictures={bannerPictures && bannerPictures} />
        <Section title="特惠組合" pictures={specialOffer} />
        <Section title="新品上架" pictures={newArrivals} />
      </div>
    </div>
  )
}
export default Main
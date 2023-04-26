import { defaultBanner, defaultSection, defaultSectionTwo } from "dummy/dummy"
import "components/main/main.scss"
import { NavItem } from "components/sharedComponents/NavItem"
import { useState, useEffect } from "react"
import { getBanner } from "api/CRUD"
import Banner from "components/main/Banner"
import Section from "components/main/Section"
import ClassItem from "components/sharedComponents/ClassItem"

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
            <ClassItem to="/" title="WOMEN" chinese="女裝" />
            <ClassItem to="/" title="MEN" chinese="男裝" />
            <ClassItem to="/" title="KIDS" chinese="童裝" />
            <ClassItem to="/" title="SALE" chinese="促銷" />
            <ClassItem to="/" title="EDIT" chinese="特輯" />
            <ClassItem to="/" title="NEW LITE" chinese="新款" />
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
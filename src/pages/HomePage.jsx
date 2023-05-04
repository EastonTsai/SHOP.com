import { defaultBanner, defaultSection, defaultSectionTwo } from "dummy/dummy"
import "pages/homePage.scss"
import Header from "components/header/Header"
// import Main from "components/main/Main"
import Footer from "components/footer/Footer"
import Classification from "components/main/Classification"
import Banner from "components/main/Banner"
import Section from "components/main/Section"
import BackTop from "components/header/BackTop"
import { useState, useEffect } from "react"


const HomePage = () => {
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
    <>
      <Header />
      <BackTop />
      <div className="main">
        <div className="container">
          <Classification />
          <Banner pictures={bannerPictures && bannerPictures} />
          <Section title="特惠組合" pictures={specialOffer} />
          <Section title="新品上架" pictures={newArrivals} />
        </div>
      </div>
      <Footer />
    </>
  )
}
export default HomePage
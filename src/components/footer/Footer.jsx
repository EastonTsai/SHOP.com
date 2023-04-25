import "components/footer/footer.scss"
import FooterTop from "./FooterTop"
import FooterMiddle from "./FooterMiddle"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <FooterTop />
        <FooterMiddle />
        <div className="footer_bottom">
          <p>COPYRIGHT@SHOP.EastonTsai.design </p>
        </div>
      </div>
    </div>
  )
}
export default Footer
import "components/footer/footerTop.scss"
import { ReactComponent as FacebookIcon } from "picture/icon/🦆 icon _facebook squared_.svg"
import { ReactComponent as IgIcon } from "picture/icon/🦆 icon _instagram_.svg"
import { ReactComponent as TwitterIcon } from "picture/icon/🦆 icon _twitter_.svg"

const FooterTop = () => {
  return (
    <div className="footer_top">
      <div className="footer_top_left">
        <ul>
          <h4>關於 SHOP</h4>
          <li>品牌故事</li>
          <li>門市據點</li>
          <li>人才招募</li>
        </ul>
        <ul>
          <h4>購物須知</h4>
          <li>訂購流程</li>
          <li>十天鑑賞期</li>
          <li>全台商品修改</li>
        </ul>
        <ul>
          <h4>全員服務</h4>
          <li>會員中心</li>
          <li>客服中心</li>
        </ul>
        <ul>
          <h4>聲明條款</h4>
          <li>隱私權保護</li>
          <li>政令宣導</li>
          <li>工作條款</li>
        </ul>
      </div>
      <div className="footer_top_right">
        <h4>FOLLOW US ON</h4>
        <div className="icon">
          <FacebookIcon />
          <IgIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  )
}
export default FooterTop
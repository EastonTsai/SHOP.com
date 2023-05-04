import "components/header/backTop.scss"
import { ReactComponent as BackTopIcon } from "picture/icon/🦆 icon _fast arrow top_.svg"

const BackTop = () => {
  const handleBackTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="back-top" onClick={handleBackTop}>
      <BackTopIcon />
      <p>Back</p>
      <p>Top</p>
    </div>
  )
}
export default BackTop
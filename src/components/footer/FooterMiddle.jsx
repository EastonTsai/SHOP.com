import "components/footer/footerMiddle.scss"
const FooterMiddle = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="footer_middle">
      <div className="title">NEWSLETTER</div>
      <form action="/" onSubmit={handleSubmit}>
        <div className="input-wrap">
          <input type="e-mail" placeholder="輸入 E-mail" />
          <button>訂閱</button>
        </div>
      </form>
    </div>
  )
}
export default FooterMiddle
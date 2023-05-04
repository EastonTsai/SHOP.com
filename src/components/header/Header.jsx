
import "components/header/header.scss"
// import { ReactComponent as CartIcon } from "picture/icon/🦆 icon _cart_.svg"
// import { ReactComponent as UserIcon } from "picture/icon/🦆 icon _user_.svg"
import { ReactComponent as LogoIcon } from "picture/icon/SHOP_logo.svg"
import { Link } from "react-router-dom"
import HeaderMenu from "components/header/HeaderMenu"
import HeaderNavbar from "components/header/HeaderNavbar"
import HeaderSearch from "components/header/HeaderSearch"

const Header = () => {
  // const handleBackTop = () => {
  //   console.log('hello')
  // }

  return (
    <header className="header">
      <div className="container">
        <div className="header_menu">
          <HeaderMenu />
        </div>
        <div className="header_logo">
          <Link to="/">
            <LogoIcon className="logoIcon" />
          </Link>
        </div>
        <div className="header_navbar">
          <HeaderNavbar />
        </div>
        <div className="header_search">
          <HeaderSearch />
        </div>
      </div>
    </header>
  )
}
export default Header
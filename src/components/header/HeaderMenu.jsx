
import "components/header/headerMenu.scss"
import { ReactComponent as MenuIcon } from "picture/icon/🦆 icon _menu_.svg"
import { ReactComponent as XIcon } from "picture/icon/🦆 icon _x letter_.svg"
import { NavItem } from "components/sharedComponents/NavItem"

const HeaderMenu = () => {
  return (
    <>
      <label htmlFor="menu-checkbox">
        <MenuIcon />
      </label>
      <input type="checkbox" id="menu-checkbox" />
      <div className="left-navbar-full">
        <div className="left-navbar">
          <label htmlFor="menu-checkbox">
            <XIcon />
          </label>
          <ul>
            <NavItem title='最新優惠' to='/' />
            <NavItem title='門市據點' to='/' />
            <NavItem title='查詢庫存' to='/' />
            <NavItem title='Q & A' to='/' />
          </ul>
        </div>
      </div >
    </>
  )
}
export default HeaderMenu
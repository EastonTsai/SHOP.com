

import "components/header/headerNavbar.scss"
import { NavItem } from "components/sharedComponents/NavItem"

const HeaderNavbar = () => {

  return (
    <ul className="navbar">
      <NavItem title='最新優惠' to='/' />
      <NavItem title='門市據點' to='/' />
      <NavItem title='查詢庫存' to='/' />
      <NavItem title='Q & A' to='/' />
    </ul>
  )
}
export default HeaderNavbar
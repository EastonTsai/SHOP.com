

import "components/header/headerNavbar.scss"
import { NavItem } from "components/sharedComponents/NavItem"

const HeaderNavbar = () => {

  return (
    <ul className="navbar">
      <NavItem className='nav-item' title='最新優惠' to='/' />
      <NavItem className='nav-item' title='門市據點' to='/' />
      <NavItem className='nav-item' title='查詢庫存' to='/' />
      <NavItem className='nav-item' title='Q & A' to='/' />
    </ul>
  )
}
export default HeaderNavbar
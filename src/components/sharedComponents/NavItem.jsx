import "components/sharedComponents/navItem.scss"

import { Link } from "react-router-dom"

export const NavItem = ({ className, title, to }) => {
  return (
    <li className="nav-item">
      <Link to={to}>
        {title}
      </Link>
    </li>

  )
}


import { Link } from "react-router-dom"

export const NavItem = ({ className, title, to }) => {
  return (
    <li className={className}>
      <Link to={to}>
        {title}
      </Link>
    </li>

  )
}
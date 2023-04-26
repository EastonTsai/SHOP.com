import "components/sharedComponents/classItem.scss"
import { Link } from "react-router-dom"

const ClassItem = ({ title, chinese, to }) => {
  return (
    <li className="classification-item">
      <Link to={to}>
        <div className="top">
          {title}
        </div>
        <div className="button">
          {chinese}
        </div>
      </Link>
    </li>
  )
}
export default ClassItem
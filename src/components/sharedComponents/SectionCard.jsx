import "components/sharedComponents/sectionCard.scss"
import { Link } from "react-router-dom"

const SectionCard = ({ url, alt, to, content }) => {
  return (
    <div className="section-card">
      {to ?
        <Link to={to}>
          <div className="pictures_pic" >
            <img src={url} alt={alt} />
          </div >
          {content &&
            <div className="bottom_content">
              <p>{content}</p>
            </div>
          }
        </Link > :
        <>
          <div className="pictures_pic">
            <img src={url} alt={alt} />
          </div>
          {content &&
            <div className="bottom_content">
              <p>{content}</p>
            </div>
          }
        </>
      }
    </div>
  )
}
export default SectionCard
import { Link } from "react-router-dom"

const Picture = ({ url, alt, to }) => {
  return (
    <>
      {to ?
        <Link>
          <div div className="pictures_pic" > <img src={url} alt={alt} /></div >
        </Link > :
        <div className="pictures_pic"><img src={url} alt={alt} /></div>
      }
    </>
  )
}
export default Picture


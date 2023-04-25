import "components/main/section.scss"
import SectionCard from "components/sharedComponents/SectionCard"
const Section = ({ title, pictures }) => {
  return (
    <div className="main_section">
      <div className="title">{title}</div>
      <div className="pictures">
        {pictures?.map(pic => <SectionCard key={pic.id} url={pic.url} alt={pic.alt} to="/" content={pic.content} />)}

      </div>
    </div>
  )
}
export default Section
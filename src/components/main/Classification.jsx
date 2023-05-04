
import 'components/main/classification.scss'
import ClassItem from "components/sharedComponents/ClassItem"

const Classification = () => {
  return (
    <div className="classification">
      <ul>
        <ClassItem to="/product" title="WOMEN" chinese="女裝" />
        <ClassItem to="/product" title="MEN" chinese="男裝" />
        <ClassItem to="/product" title="KIDS" chinese="童裝" />
        <ClassItem to="/product" title="SALE" chinese="促銷" />
        <ClassItem to="/product" title="EDIT" chinese="特輯" />
        <ClassItem to="/product" title="NEW LITE" chinese="新款" />
      </ul>
    </div>)
}
export default Classification
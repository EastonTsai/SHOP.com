import 'components/main/leftNavbarItem.scss'

const LeftNavbarItem = ({ title, items, onClick }) => {
  return (
    <>
      {items ?
        <div className="leftNavbar_item">
          <input type="checkbox" id="leftNavbar_item-checkbox" />
          <label htmlFor="leftNavbar_item-checkbox">
            <div>{title}<span></span></div>
          </label>
          <ul>
            {items.map(item =>
              <li className="leftNavbar_item_item" onClick={onClick}>- {item.title}</li>
            )}
          </ul>
        </div >
        :
        <div className="leftNavbar_item">{title}</div>
      }
    </>
  )
}
export default LeftNavbarItem
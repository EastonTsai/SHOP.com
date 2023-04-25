
import "components/header/searchInput.scss"

const SearchInput = ({ type, searchInput, placeholder, onChange, button, onSubmit, }) => {
  return (
    <>
      <input
        type={type ? type : "text"}
        value={searchInput}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button onClick={onSubmit}>{button}</button>
    </>
  )
}
export default SearchInput

import "components/header/headerSearch.scss"
import { ReactComponent as SearchIcon } from "picture/icon/🦆 icon _search_.svg"
import SearchInput from "components/header/SearchInput"
import { useState } from "react"


const HeaderSearch = () => {
  const [searchInput, setSearchInput] = useState('')
  const handleSearchSubmit = () => {
    console.log('click search button')
  }

  return (
    <>
      <div className="view-sm">
        <label htmlFor="search-checkbox">
          <SearchIcon />
        </label>
        <input type="checkbox" id="search-checkbox" />
        <div className="search-wrap">
          <SearchInput
            value={searchInput}
            placeholder={'請輸入關鍵字'}
            onChange={e => setSearchInput(e.target.value)}
            button='搜尋'
            onSubmit={handleSearchSubmit}
          />
        </div>
      </div>
      <div className="view-l">
        {/* <div className="serach-wrap"> */}
        <SearchInput
          value={searchInput}
          placeholder={'請輸入關鍵字'}
          onChange={e => setSearchInput(e.target.value)}
          button='搜尋'
          onSubmit={handleSearchSubmit}
        />
        {/* </div> */}
      </div>
    </>
  )
}
export default HeaderSearch
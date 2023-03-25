import React from 'react'
import { useGlobalContext } from '../Context'

const SearchForm = () => {
const { query, setQuery, error } = useGlobalContext()
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>Search Movie</h2>
      <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} className="form-input" />
      { error.show && <div className='error'>{error.msg}</div>}
    </form>
  )
}

export default SearchForm
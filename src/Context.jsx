import React, { useState, useContext, useEffect } from 'react'

// api address
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_APP_MOVIE_DB_API_KEY
}`;

console.log(API_ENDPOINT);

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({show: false, msg: ''})
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('batman')

  // data fetching function 
  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      
      if(data.Response === 'True') {
        setMovies(data.Search)
        setError({show: false, msg: ''})
      } else {
        setError({show: false, msg: data.Error})
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
    // console.log(movies)
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
  },[query])
  return <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>{children}</AppContext.Provider>
}

// global context
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
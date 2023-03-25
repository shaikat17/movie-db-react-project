import React, { useState, useContext, useEffect } from 'react'
import UseFetch from "./components/UseFetch";
// api address
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_APP_MOVIE_DB_API_KEY
}`;

// console.log(API_ENDPOINT);

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { isLoading, error, data: movies } = UseFetch(`&s=${query}`);

  // console.log(movies)

  return <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>{children}</AppContext.Provider>
}

// global context
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
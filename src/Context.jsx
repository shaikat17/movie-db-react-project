import React, { useState, useContext, useEffect } from 'react'

// api address
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_APP_MOVIE_DB_API_KEY
}`;

console.log(API_ENDPOINT);

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
    return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

// global context
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
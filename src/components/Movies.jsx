import React from 'react'
import { useGlobalContext } from '../Context'
import { Link } from 'react-router-dom'

const Movies = () => {
  const data = useGlobalContext()
  console.log(data)
  return (
    <div>Movies</div>
  )
}

export default Movies
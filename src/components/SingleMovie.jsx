import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from '../Context'

const SingleMovie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movie, setMovie] = useState({});

  // console.log(id)
  // data fetching function
  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setMovie(data)
      // console.log(data)
      if (data.Response === "True") {
        // console.log(data)
        setMovie(data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    // console.log(movies)
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&i=${id}`);
    // console.log(movie)
  }, [id]);

  if(isLoading) return <div className="loading"></div>
  if(error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className='btn'>back to movies</Link>
      </div>
    )
  }

  const { Poster, Title, Plot, Year } = movie

  return (
    <section className="single-movie">
      <img src={Poster} alt={Title} />
      <div className="single-movie-info">
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
}

export default SingleMovie
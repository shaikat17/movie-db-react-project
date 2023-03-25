import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import UseFetch from "./UseFetch";
import { API_ENDPOINT } from '../Context'

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = UseFetch(`&i=${id}`);

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
      <img src={Poster === "N/A" ? url : Poster} alt={Title} />
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
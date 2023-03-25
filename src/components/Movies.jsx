import React from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  // console.log(movies);
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        const { Poster, Title, Type, Year, imdbID: id } = movie;
        // console.log(Poster)
        return <Link to={`/movies/${id}`} key={id} className="movie">
        <article>
        <img src={Poster === 'N/A' ? url : Poster} alt={Title} />
        <div className="movie-info">
        <h4 className="title">{Title}</h4>
        <p>{Year}</p>
        </div>
        </article>
        </Link>;
      })}
    </section>
  );
};

export default Movies;

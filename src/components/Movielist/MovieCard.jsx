import React from 'react'
import './MovieCard.css'
import star from '../../assets/star.png'

const MovieCard = ({ data }) => {
    let movies = data

    return (
        <>
            {movies.length !== 0 && movies.map((movie) => (
                <a href={`https://www.themoviedb.org/movie/${movie.id}`}
                    target='_blank' key={movie.id} className="movie-card">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" className="movie-poster" />
                    <div className="movie-details">
                        <h3 className="movie-detail-heading">{movie.title}</h3>
                        <div className="align-center movie-date-rate">
                            <p>{movie.release_date}</p>
                            <p>{parseFloat(movie.vote_average.toFixed(1)) }<img src={star} alt="start-emoji" className="card-emoji" /></p>
                        </div>
                        <p className="movie-description">
                            {movie.overview.slice(0,100)+"..."}
                        </p>
                    </div>
                </a>
            ))}
        </>
    )
}

export default MovieCard
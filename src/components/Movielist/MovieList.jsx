import React, { useEffect, useState } from 'react'
import './MovieList.css'
import fire from '../../assets/fire.png'
import MovieCard from './MovieCard'

const MovieList = () => {

    const[movies, setMovies] = useState([])
    const[minRating, setMinRating] = useState(0)
    const[filterMovies, setFilterMovies] = useState([])

    useEffect(()=>{
        fetchMovies()
    }, [])

    const fetchMovies = async () =>{
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=f5f93f9ee89c6f6e2d5892ecf2987379")
        const data = await response.json()
        setMovies(data.results)
        setFilterMovies(data.results)
    }

    const handleFilter = (rate) => {
        // if again the same rating is clicked it renders all the movies
        if (rate === minRating) {
            setMinRating(0);
            setFilterMovies(movies);
        } else {
            setMinRating(rate);
            // instead of updating the filter result to the org movies arr we doinf the operation in seperate filterMovies arr
            // bcoz if 6+ rated movies is sorted and stored in movies(overwriting the org movies arr) and 
            // now again sorting by 7+ means it returns only 6+ bcpz we overridde the org movies in prev operation
            // so we created new arr for filtering herer we filter the movies from org arr and stored in seperate filter arr instead of overriding the org arr
            const filtered = movies.filter((movie) => movie.vote_average >= rate);
            setFilterMovies(filtered);
        }
      };
      
    return (
        <section className="movie-list">
            <header className="align-center movie-list-header">
                <h2 className="align-center movie-list-heading">
                    Popular <img src={fire} alt='fire-emoji' className='nav-emoji' />
                </h2>
            
            <div className="align-center movie-list">
                <ul className="align-center  movie-list-filter">
                    <li className="movie-list-filter-items active" onClick={()=>handleFilter(8)}>8+ Star</li>
                    <li className="movie-list-filter-items" onClick={()=>handleFilter(6)}>6+ Star</li>
                    <li className="movie-list-filter-items" onClick={()=>handleFilter(7)}>7+ Star</li>
                </ul>

                <select name="" id="" className="movie-sorting">
                    <option value="">Sort by</option>
                    <option value="">Date</option>
                    <option value="">Rating</option>
                </select>
                <select name="" id="" className="movie-sorting">
                    <option value="">Ascending</option>
                    <option value="">Decending</option>
                </select>
            </div>
            </header>

            <div className="movie-cards">
                <MovieCard data={filterMovies} />
            </div>
            
        </section>
    )
}

export default MovieList
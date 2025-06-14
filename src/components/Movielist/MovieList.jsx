import React, { useEffect, useState } from 'react'
import _ from 'lodash' //lodash is a sorting package used to sort with minimal code.

import './MovieList.css'
import fire from '../../assets/fire.png'
import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup'

const MovieList = () => {

    const [movies, setMovies] = useState([])
    const [minRating, setMinRating] = useState(0)
    const [filterMovies, setFilterMovies] = useState([])
    const [sort, setSort] = useState({
        by: "default",
        order: "asc"

    })

    useEffect(()=>{
        if(sort.by !== "default"){
           const sortedMovies =  _.orderBy(filterMovies,[sort.by],[sort.order])
           setFilterMovies(sortedMovies)
        }
    },[sort])

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
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

    const handleSort = (e)=>{
        const {name, value} = e.target
        setSort(prev=> ({...prev, [name] : value}))
    }
    console.log(sort)
    return (
        <section className="movie-list">
            <header className="align-center movie-list-header">
                <h2 className="align-center movie-list-heading">
                    Popular <img src={fire} alt='fire-emoji' className='nav-emoji' />
                </h2>

                <div className="align-center movie-list">
                    <FilterGroup minRating={minRating} onRatingClick={handleFilter} ratings={[6, 7, 8]} />
                    <select name="by" id="" className="movie-sorting" onChange={handleSort} value={sort.by}>
                        <option value="default">Sort by</option>
                        <option value="release_date">Date</option>
                        <option value="vote_average">Rating</option>
                    </select>
                    <select name="order" id="" className="movie-sorting" onChange={handleSort} value={sort.order}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Decending</option>
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
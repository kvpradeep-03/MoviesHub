import React, { useEffect, useState } from 'react'
import _ from 'lodash' //lodash is a sorting package used to sort with minimal code.
import star from '../../assets/star.png'
import Divider from '@mui/material/Divider';
import './MovieList.css'
import './MovieCard.css'
import fire from '../../assets/fire.png'
import FilterGroup from './FilterGroup'
import SortIcon from '@mui/icons-material/Sort';
import { Box, IconButton, Menu, MenuItem, Zoom } from '@mui/material'


const NewRelease = () => {

    const [movies, setMovies] = useState([])
    const [minRating, setMinRating] = useState(0)
    const [filterMovies, setFilterMovies] = useState([])
    const [sort, setSort] = useState({
        by: "default",
        order: "asc"

    })

    useEffect(() => {
        if (sort.by !== "default") {
            const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order])
            setFilterMovies(sortedMovies)
        }
    }, [sort])

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=f5f93f9ee89c6f6e2d5892ecf2987379")
        const data = await response.json()
        setMovies(data.results)
        setFilterMovies(data.results)
        console.log(`New Release: `, data.results);
     
   
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

    const handleSort = (e) => {
        const { name, value } = e.target
        setSort(prev => ({ ...prev, [name]: value }))
    }
  


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/**
             * Trending movies
             */}
            <header className="movie-list-header">
                <h2 className="movie-list-heading">
                    New Release
                </h2>
                {/* 
                <div className="movie-list">
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
                </div> */}

                <div>


                    <IconButton
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}

                    >
                        <SortIcon />
                    </IconButton>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}

                        disableScrollLock={true} // optional: avoids layout shifts , avoids padding issues when menu opens
                    >
                        <FilterGroup minRating={minRating} onRatingClick={handleFilter} ratings={[6, 7, 8]} >
                            <MenuItem onClick={handleClose}>6+</MenuItem>
                            <MenuItem onClick={handleClose}>7+</MenuItem>
                            <MenuItem onClick={handleClose}>8+</MenuItem>
                        </FilterGroup>

                    </Menu>

                </div>



            </header >


            <div className="movie-list">

                <div className="movie-cards">
                    {movies.length !== 0 && movies.map((movie) => (
                        <a href={`https://www.themoviedb.org/movie/${movie.id}`}
                            target='_blank' key={movie.id} className="movie-card">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" className="movie-poster" />
                            <div className="movie-details">
                                <h3 className="movie-detail-heading">{movie.title}</h3>
                                <div className="align-center movie-date-rate">
                                    <p>{movie.release_date}</p>
                                    <p>{parseFloat(movie.vote_average.toFixed(1))}<img src={star} alt="start-emoji" className="card-emoji" /></p>
                                </div>
                                <p className="movie-description">
                                    {movie.overview.slice(0, 100) + "..."}
                                </p>
                            </div>

                        </a>

                    ))}
                </div>

            </div>


        </>
    )
}

export default NewRelease
import React from 'react'

const FilterGroup = ({ minRating, onRatingClick, ratings }) => {

    return (
        <ul className="align-center  movie-list-filter">
            {ratings.map(rate => (
                <li className={minRating === rate ? "movie-list-filter-items active" : "movie-list-filter-items"} key={rate} onClick={() => onRatingClick(rate)}>{rate}+ Star</li>
            ))}
        </ul>
    )
}

export default FilterGroup
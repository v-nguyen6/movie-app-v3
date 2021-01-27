import React from 'react';
import { calcTime, convertMoney } from '../../helpers.js';
import FavouriteButton from './FavouriteButton';

// shows the movie info / statistics / favorites button on a single movie page
const MovieInfoBar = ( {movie, checkFav} ) => {


  return (
    <div className="movieinfobar">
      <div className="movieinfobar-content">

        <div className="movieinfobar-content-col">
          <span className="movieinfobar-info"><b>Runtime:</b> {calcTime(movie.time)}</span>
          <span className="movieinfobar-info"><b>Budget:</b> {convertMoney(movie.budget)}</span>
          <span className="movieinfobar-info"><b>Revenue:</b> {convertMoney(movie.revenue)}</span>
        </div>

        <div className="movieinfobar-content-col">
          <div className="fave">



            <span className="movieinfobar-info">Favourite <img src="/../../images/favourite_icon.png" alt="Favourite Icon"></img></span>
            
            <FavouriteButton movie={movie} checkFav={checkFav} />
          
          </div>
        </div>

      </div>
    </div>
  )
}

export default MovieInfoBar;
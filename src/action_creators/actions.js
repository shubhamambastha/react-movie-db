import { getPopular, getMovieInfo } from '../api/apiCall'

export const InitialData = (movies) => {
  return {
    type: "load",
    payload: movies
  }
}


export const getMovie = (page) => {
  // console.log("page here", page)
  return async dispatch => {
    try {
      const movies = await getPopular(page);
      // console.log("movies in page", movies)
      dispatch(InitialData(movies));
    } catch (err) {
      console.log("error in get user polls", err)
    }
  };
};


export const movieData = (movieInfo) => {
  return {
    type: "movie_info",
    payload: movieInfo
  }
}

export const getCurrMovieInfo = (movies_id) => {
  // console.log("page here", page)
  return async dispatch => {
    try {
      const movieInfo = await getMovieInfo(movies_id);
      dispatch(movieData(movieInfo));
    } catch (err) {
      console.log("error in get movie info", err)
    }
  };
};
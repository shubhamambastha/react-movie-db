import axios from "axios";
import { API_URL, API_KEY } from './key'

//https://api.themoviedb.org/3/movie/570670?api_key=856b366820cc0d70cdf7cbd6946bdab2&language=en-US

export const getPopular = async (page_no) => {
    try {
        const response = await axios.get(`${API_URL}movie/popular?api_key=${API_KEY}&page=${page_no}`);
        return response
    } catch (error) {
        console.error(error);
    }
};

export const getMovieInfo = async (movie_id) => {
    try {
        const response = await axios.get(`${API_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default { getPopular, getMovieInfo };
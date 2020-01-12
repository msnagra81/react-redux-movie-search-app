import {SEARCH_MOVIE, FETCH_MOVIES,FETCH_MOVIE_DETAILS, LOADING} from './types';
import axios from 'axios'
import {APIKey} from '../keys/ImdbKey'
//action creater is a function with returns an action
//An action is just an javascript object
const searchMovie = (text) => dispatch =>{
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    }
    )

}

const fetchMovies = (text) => dispatch =>{
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response => dispatch({
        type: FETCH_MOVIES,
        payload: response.data.Search
    }))
    .catch(err =>console.log(err));
}
const fetchMovieDetails = (id) => dispatch =>{
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response => dispatch({
        type: FETCH_MOVIE_DETAILS,
        payload: response.data
    }))
    .catch(err =>console.log(err));
}
const setLoading = ()=>{
    return {
        type: LOADING
    }
}
export {searchMovie, fetchMovies,fetchMovieDetails, setLoading}
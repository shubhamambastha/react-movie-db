import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

let initialState = {
    movies: [],
    currMovie: {},
    page: 1
}

function appReducerFunction(state = initialState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "load":
            // console.log("load first", action.payload)
            let moviesCopy = action.payload.data.results;
            stateCopy.movies = [...stateCopy.movies, ...moviesCopy];
            state = stateCopy;
            return state;

        case "movie_info":
            // console.log("load first", action.payload.data)
            let moviesInfoCopy = action.payload.data;
            stateCopy.currMovie = moviesInfoCopy;
            state = stateCopy;
            return state;

        default:
            return stateCopy;
    }
}

const rootReducers = combineReducers({
    app: appReducerFunction
});

const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;
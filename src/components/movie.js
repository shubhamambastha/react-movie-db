import React, { Component } from 'react';
import './movie.css'
import { connect } from "react-redux";
import { getCurrMovieInfo } from '../action_creators/actions';
import Header from './header';

class MovieInfo extends Component {

    constructor(props){
        super()
        const {movieId} = props.match.params
        props.dispatch(getCurrMovieInfo(movieId))
    }
    
    render() {
        let data = this.props.currMovie
        return (
            <>
            <Header />
            <div className="backdrop" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`}}>
                <div className="movie-block">
                    <div className="movieinfo-thumb">
                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='movie Thumb'/>
                    </div>
                    <div className="movieinfo-text">
                        <h1>{data.title}</h1>
                        <h3>PLOT</h3>
                        <p>{data.overview}</p>

                        <div className="rating-director">
                            <div>
                                <h3>IMDB RATING</h3>
                                <div className="score">{data.vote_average}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("movie info state", state)
    return {
        currMovie: state.app.currMovie
    };
}

export default connect(mapStateToProps)(MovieInfo);
import React, { Component } from 'react';
import './home.css'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class MovieList extends Component {

    render() {
        return (
            <div className='movie-grid'>
                {/* {console.log("props here", this.props.movies)} */}
                {this.props.movies && this.props.movies.map((data, key) => {
                    return (
                        <Link key={key} to={`/movie/${data.id}`} className="card">
                            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Avatar" width='100%' height='90%' />
                            <div className="container">
                                <h4><b>{data.title}</b></h4>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("map state", state)
    return {
        movies: state.app.movies
    };
}

export default connect(mapStateToProps)(MovieList);
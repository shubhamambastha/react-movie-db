import React, { Component } from 'react';
import './home.css'
import { connect } from "react-redux";
import { getMovie } from "../action_creators/actions";
import MovieList from './movieList';
import Header from './header';

class Home extends Component {
    constructor(props){
        super()
        props.dispatch(getMovie(1))
    }
    
    state={
        page:1
    }

    pageIncreaser(){
        let nextPage = this.state.page + 1;
        this.setState({page:nextPage})
        this.props.dispatch(getMovie(this.state.page))
    }

    render() {
        return (
            <>
                <Header />
                <MovieList />
                <button className="load-btn" onClick={()=>this.pageIncreaser()}>Load</button>
            </>
        )
    }
}

export default connect()(Home);
import React, { Component } from 'react';

import {connect} from 'react-redux';
import MovieCard from './MovieCard';
import NoResults from './NoResults';

class MoviesContainer extends Component {
    render() {
        const {movies} = this.props;
        let content = '';

        content = (movies != null && movies.length > 0) ? movies.map((movie, index) =>{
            return (<MovieCard key={index} movie={movie}/>)
        }) : <NoResults/>;
        return (
            <div className="row mb-4 justify-content-center pb-5">
              {content}  
            </div>
        );
    }
}

const mapStateToProps = state =>({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer);
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

class MovieCard extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {movie} = this.props;
        const hrefLink=`https://www.imdb.com/title/${movie.imdbID}`
        return (
            <div className="col-md-3 mb-5">
                <div className="card card-body bg-dark text-center h-100">
                    <img className="w-100 mb-2" src={movie.Poster} alt="Movie Poster"/>
        <h5 className="text-light card-title">{movie.Title} - {movie.Year}</h5>
        <Link className="btn btn-primary" to={"/movie/"+movie.imdbID}>
                        Movie Details <i className="fas fa-chevron-right "/>
        </Link>
                    
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>({
    state: state
})

export default connect(mapStateToProps)(MovieCard);
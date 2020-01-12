import React, { Component } from 'react';
import {searchMovie, fetchMovies, setLoading} from '../../actions/searchActions'
import {connect} from 'react-redux';

class SearchForm extends Component {
    // constructor(props){
    //     super(props);

    //     this.handleChange = this.handleChange.bind(this);
    // }
    handleChange = event =>{
        this.props.searchMovie(event.target.value);
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.props.setLoading();
        this.props.fetchMovies(this.props.text);
        
    }
    render() {
        return (
                 <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                        <h1 className="display-4 mb-3">
                            <i className="fa fa-search"/> Search for a movie, TV series...
                        </h1>
                        <form id="searchForm" onSubmit={this.handleSubmit.bind(this)}>
                            <input className="form-control"
                            type="text"
                            name="searchText"
                            onChange={this.handleChange}
                            placeholder="Search Movies, TV Series..."/>
                            <button type="submit" className="btn btn-primary btn-bg mt-3">
                                Search
                            </button>
                        </form>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    text: state.movies.text
})


export default connect(mapStateToProps,{searchMovie,fetchMovies, setLoading})(SearchForm);
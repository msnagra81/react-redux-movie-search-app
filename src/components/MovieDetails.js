import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchMovieDetails, setLoading} from '../actions/searchActions'
import Spinner from './Spinner';
import {Link} from 'react-router-dom'

class MovieDetails extends Component {
    componentDidMount(){
        this.props.setLoading();
        setTimeout(()=> {
            this.props.fetchMovieDetails(this.props.match.params.id);
        }, 2000)
    }
    render() {
        const {Title,Poster,Year,Rated,Released,Runtime,Genre, Director, Writer, Actors, Plot, Language,
        Country, Awards, Ratings, Metascore, imdbVotes , imdbRating, Type, DVD, BoxOffice,
        Production, Website, Response, loading} = this.props.movieDetails;
        const ratingsSpan = (data)=>{
            let ratStr ="";
            if(data != null){
                data.map((rating, index)=>{
                    let  source = rating.Source;
                    let value = rating.Value;
                     console.log(source);
                     ratStr = ratStr.concat("["+source+" - "+value+"] ")
                })
            }
            return <strong>{ratStr}</strong>;
            }

        // const ratingsSpan = (Ratings)=>{
        //     if(Ratings != null){
        //         Ratings.map((rating, index)=>{ return (<span key={index}>{rating.Source}  {rating.Value} </span>)})
        // }
    let movieInfo = (<React.Fragment>
        <div className="row">
            <div className="col-md-4 card card-body">
                <img className="img-fluid" src={Poster} alt="product image"/>
{/* <p>{Rated} | {Runtime} | {Genre} | {Released}</p> */}
            </div>
            <div className="col-md-8">
            <h1>{Title} -({Year})</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>Genre : </strong>{Genre}</li>
                <li className="list-group-item">
                <strong>Rated : </strong>{Rated}</li>
                <li className="list-group-item">
                <strong>Runtime : </strong>{Runtime}</li>
                <li className="list-group-item">
                <strong>Released : </strong>{Released}</li>
                <li className="list-group-item">
                <strong>Director : </strong>{Director}</li>
                <li className="list-group-item">
                <strong>Writer : </strong>{Writer}</li>
                <li className="list-group-item">
                <strong>Actors : </strong>{Actors}</li>
                <li className="list-group-item">
                <strong>Language : </strong>{Language}</li>
                <li className="list-group-item">
                <strong>Country : </strong>{Country}</li>
                <li className="list-group-item">
                <strong>Awards : </strong>{Awards}</li>
                <li className="list-group-item">
                <strong>Ratings : </strong> 
                {/* <button onClick={ratingsSpan}>View </button> */}
                {ratingsSpan(Ratings)}
                </li>
                <li className="list-group-item">
                <strong>Metascore : </strong>{Metascore}</li>
                <li className="list-group-item">
                <strong>imdbVotes : </strong>{imdbVotes}</li>
                <li className="list-group-item">
                <strong>imdbRating : </strong>{imdbRating}</li>
                <li className="list-group-item">
                <strong>Type : </strong>{Type}</li>
                <li className="list-group-item">
                <strong>DVD : </strong>{DVD}</li>
                <li className="list-group-item">
                <strong>BoxOffice : </strong>{BoxOffice}</li>
                <li className="list-group-item">
                <strong>Production : </strong>{Production}</li>
                <li className="list-group-item">
                <strong>Website : </strong>{Website}</li>
                <li className="list-group-item">
                <strong>Response : </strong>{Response}</li>
            </ul>
        </div>

        </div> 
        <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
                <h3>About</h3>
                {Plot}
                <hr/>
                <a href="#" className="btn btn-primary">View on IMDB</a>
                <Link to="/" className="ml-2">
                    <a className="btn btn-warning">Back to search</a>
                </Link>
                <h1><br/><br/></h1>
            </div>
        </div>
            {/* <button onClick={()=>console.log(this.props.movieDetails)}>Console Details</button> */}
            </React.Fragment>)
                let content = loading ? <Spinner/> : movieInfo;

        return (
            <div>{content}</div>
        );
    }
}
const mapStateToProps = state =>({
    loading: state.movies.loading,
    movieDetails: state.movies.movie
})

export default connect(mapStateToProps,{fetchMovieDetails, setLoading})(MovieDetails);
import React, { Component } from 'react';
import {connect} from 'react-redux'

class NoResults extends Component {
    render() {
        let disp = this.props.text != ''
        if(disp){
            return (
                <h1 className="justify-content-center">No results found</h1>
        );
        }
        else {
            return (
                <div></div>
        );}
    }
}

const mapStateToProps = state => ({
    text : state.movies.text
})
export default connect(mapStateToProps)(NoResults);
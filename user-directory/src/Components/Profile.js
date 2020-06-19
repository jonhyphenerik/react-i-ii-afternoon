import React, {Component} from 'react'


class Profile extends Component{
    constructor(){
        super();
    }


    render(){
        return(
        <div>
            <h1>{this.props.name.first + ' ' + this.props.name.first}</h1><h1>{`index/data.length`}</h1>
            <h2>From: </h2><h3>{this.props.city}</h3>
            <h2>Job Title: </h2><h3>{this.props.title}</h3>
            <h2>Employer: </h2><h3>{this.props.employer}</h3>
            <br/>
            <h2>Favorite Movies</h2>
            <li>{this.props.favoriteMovies[0]}</li>
            <li>{this.props.favoriteMovies[1]}</li>
            <li>{this.props.favoriteMovies[2]}</li>

        </div>
        )
    }
}
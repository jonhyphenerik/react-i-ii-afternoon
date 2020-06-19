import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import './data.js';
import {data} from './data.js';

class App extends Component{
    constructor()
    {
        super();
        this.state = 
            {
                index: 0 // data[this.state.index] represents a user object. Prev/Next functions will just increment and decrement the index, with wraparound at the beginning and end
            }
    }

    handleNextChange()
    {
        if(this.state.index===data.length-1){
            this.setState({index: 0})
        }
        else this.setState({index: this.state.index+1})
    }

    handlePrevChange()
    {
        if(this.state.index===0){
            this.setState({index: data.length-1})
        }
        else this.setState({index: this.state.index+1})
    }

    render()
    {
        return (
        <div className="App">
            <header className="App-header">
            <Profile user={this.state.index}/>
            <Nav />
            </header>
        </div>
        );
    }
}

export default App;

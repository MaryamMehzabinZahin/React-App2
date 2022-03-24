import React, { Component, createContext } from 'react';

class Counter extends Component {
    state = {
        count: 100,
        imageUrl: "https://picsum.photos/200"
    };
    render() { 
        return (
        <div>
        <img src={this.state.imageUrl} alt=""/>
        <span>{this.formatCount()}</span>
        <button>increase</button>
        </div>
        );
    }

    formatCount()
    {
        
    }
}


 
export default Counter;
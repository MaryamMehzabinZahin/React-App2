import React, { Component, createContext } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    render() { 
        return (
        <div>
        <h1>hello</h1>
        <button>increase</button>
        </div>
        );
    }
}
 
export default Counter;
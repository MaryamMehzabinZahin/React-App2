import React, { Component, createContext } from 'react';

class Counter extends Component {
    state = {
        count: 202,
        imageUrl: "https://picsum.photos/200"
    };
    render() { 

        let classes = this.newMethod();
        return (
        <div>
        
        <span className={classes}>{this.formatCount()}</span>
        <button>increase</button>
        </div>
        );
    }

    newMethod() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "danger";
        return classes;
    }

    formatCount()
    {
        const {count} = this.state;
        return count ===0 ? "Zero": count;
    }
}


 
export default Counter;
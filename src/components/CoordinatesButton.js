// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
   

    handleClick = (e) => {
        // debugger
        let x = e.clientX
        let y = e.clientY
        let arr = []
        arr.push(x,y)
        this.props.onReceiveCoordinates(arr)
    }
    render() {
        return (
            <div>
                
                <button onClick={(e) => this.handleClick(e)}>Click Me!</button>
            </div>
        )
    }
}


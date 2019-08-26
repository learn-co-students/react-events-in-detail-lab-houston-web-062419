// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {
constructor(props){
    super(props)
    console.log(props)
}

    func = (event) => {
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

    render() {
        return(
            <div>
                <button onClick={this.func}></button>
            </div>
        )
    }
}
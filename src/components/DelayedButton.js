import React from "react"

export default class DelayedButton extends React.Component {


 handleClick = (event) => {
 		console.log(this.props)
 		event.persist()
     setTimeout(()=>{this.props.onDelayedClick(event)}, this.props.delay)

  }

render(props){
		
		return(
			<button  onClick={this.handleClick} >Delayed</button>
		) 
		
	}

}

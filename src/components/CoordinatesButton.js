import React from "react"

export default class CoordinatesButton extends React.Component {


 handleClick = (event) => {
 	
    console.log(event.type); // prints 'click'
    let arXY = [event.screenX, event.screenY]
    this.props.onReceiveCoordinates(arXY)
    
  }

render(props){
		
		return(
			<button onClick={this.handleClick} >Coordinated</button>
		) 
		
	}

}

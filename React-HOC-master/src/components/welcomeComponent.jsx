import { Component } from "react";


class WelcomeComponent extends Component{
     render () {
        return (
             <button  onClick={() => {this.props.sayHiFunc()}}>Click me</button>
        )
     }
}

export default WelcomeComponent;
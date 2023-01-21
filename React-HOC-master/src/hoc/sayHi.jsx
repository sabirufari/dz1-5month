import { Component } from "react";
import './../app.css';

const SayHi = (WrappedComponent) => {
    return class extends Component {
        constructor(props){
            super(props);
        }

        sayHi (){
            console.log('hi');
        }

        render(){
            return (
                <WrappedComponent {...this.props} sayHiFunc={() => {this.sayHi()}}/>
            )
        }
    }
}

export default SayHi; 
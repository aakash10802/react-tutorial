// eslint-disable-next-line no-unused-vars
import React,{Component} from "react";


class Counter extends Component{
    state={
        counter:0,
        
    }
    onIncrement=()=>{
        this.setState({
            counter:this.state.counter +1
        });
    }
    onDecrement=()=>{
        this.setState({
            counter:this.state.counter -1
        });
    }
    handleinput=(event)=>{
        console.log(event.target.value);
        this.setState({ 
            input:event.target.value
        });
    }
    submitfunction=()=>{
        console.log(this.state.input);
    }
    render(){
        return(
            <div>
                <h1>counter</h1>
                <h1>{this.state.counter}</h1><br/><br/>
                <button onClick={this.onIncrement}>+</button> &nbsp;
                <button onClick={this.onDecrement}>-</button><br/><br/>
            </div>
        );
    }
    
}
export default Counter
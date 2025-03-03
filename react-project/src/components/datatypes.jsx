// eslint-disable-next-line no-unused-vars
import React,{Component} from "react";
class Com3 extends Component{
    state = {
        message: 'Welcome to React',
        counter: 10,
        isLoggedIn: false,
        user: { name: 'Alice', age: 25 },
        time: new Date(),
    };

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h2>Count: {this.state.counter}</h2>
                <p>Logged In: {this.state.isLoggedIn ? 'Yes' : 'No'}</p>
                <p>User: {this.state.user.name}, Age: {this.state.user.age}</p>
                <p>Current Date: {this.state.time.toLocaleString()}</p>
                
            </div>
        );
    }
}
export default Com3;
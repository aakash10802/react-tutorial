/* eslint-disable no-unused-vars */
import React,{Component} from "react";

class NewCom extends Component{
    state={
        var1:'python',
        var2:120

    }
    render(){
        return(
            <div>
                <h1>Aakash Python</h1>
                <h1>{this.state.var1}</h1>
                <h2>
                    {
                    this.state.var2
                    }
                </h2>
            </div>
        )
    }
}

export default NewCom;
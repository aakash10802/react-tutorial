// eslint-disable-next-line no-unused-vars
import React,{Component} from 'react'


class Three extends Component{
    state={
        v1:'mercury',
        v2:'venus',
        v3:'earth',
        v4:'mars',
        v5:'jupitar',
        v6:'saturn'
    }
    render(){
        return(
            <div>
               
                <h1>{this.state.v6}</h1>
                
            </div>
        )
    }
}
export default Three;

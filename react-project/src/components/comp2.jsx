// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import Three from './three'

 class Two extends Component {
  state={
    var1:'Python',
    var2:'Java',
    var3:'PHP',
    var4:'NASA'
  }

  newfunction =()=>{
    this.setState({
      var1:'Python *****',
      var2:'Java ********',
      var3:'PHP ********',
      var4:'NASA ******'

    });

  };
  

  render() {
    return (
      <div>
        <button onClick={this.newfunction}>Now Click</button>
        {/* <h1>{this.props.v6}</h1> */}
        <h1>{this.state.var1}</h1>
        <h1>{this.state.var2}</h1>
        <h1>{this.state.var3}</h1>
        <h1>{this.state.var4}</h1>
        <Three y={this.props.v6}/>
      </div>
    )
  }
}
export default Two;


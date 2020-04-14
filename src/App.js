import React from 'react';
import './components/styles.css'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
    count:1,
    brand:'Ford',
    switch1:true
    }
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick=()=>{
    this.setState(prevState=>{
      return{count:prevState.count +1}
    })
  }
  
  decrease=()=>{
    this.setState(prevState=>{
      return{count:prevState.count -1}
    })
  }
  
  trialMethod=()=>{
    const comp1=<div>
  			Five
  		    </div>
    return comp1
  }

  render(){

    //const comp1 = this.trialMethod();
  	const comp2=<div>
  			Not Five
  		    </div>
    return(
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>Change!</button>
          <view>{(this.state.count === 5)?this.trialMethod():comp2}</view>
          <button onClick={this.decrease}>Decrease!</button>
        </div>
    )
  }
}


export default App;

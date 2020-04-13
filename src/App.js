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
  
  trialMethod=()=>{
  	if(this.state.count === 5){
		}
  }

  render(){
  	const comp1=<div>
  			On
  		    </div>
  	const comp2=<div>
  			Off
  		    </div>
    return(
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>Change!</button>
          <h2>{
          
         
  
                comp2 
          }</h2>
        </div>
    )
  }
}


export default App;

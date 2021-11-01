import logo from './logo.svg';
import './App.css';
import React from 'react';
import  Box1  from './Box1';
import Box2 from './Box2';




class App extends React.Component {
  state={
    classActive:true,
    functionActive:false

  };
    render() {
      return (
      <div className="head">
        <h1 className="h">Styling using Functional and Class Component</h1>
        <div className="buttons">
          <button onClick={()=>{if( this.state.functionActive===false){
            this.setState({functionActive:true})}
          if(this.state.functionActive){
            this.setState({functionActive:false})
          }}}>to see styling in functional Component</button>
          <button onClick={()=>{
          if( this.state.classActive===false){
            this.setState({classActive:true})}
          if(this.state.classActive){
            this.setState({classActive:false})
          }
        }}>to see styling in functional Component</button>

        </div>
        <div className="boxes">
        <div style={{visibility:this.state.functionActive ? "visible" : "hidden"}}>
        <Box1 />
        </div>
        <div style={{visibility:this.state.classActive ? "visible":"hidden"}}>
        <Box2 />
        </div>
        </div>
      </div>);
    }
  }
  
   
  
  
 
export default App;
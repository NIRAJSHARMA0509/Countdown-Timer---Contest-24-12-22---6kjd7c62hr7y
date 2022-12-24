import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [startTime, setStartTime] = useState(0);

  useEffect(()=>{
    const timer = startTime > 0  && setTimeout(()=>setStartTime((prevState) => {return prevState - 1}), 1000);
    return () => clearTimeout(timer);
  },[startTime]);
    const setTimer = (event) => {
      if(event.keyCode === 13){
        if(isNaN(event.target.value))
          setStartTime(0);
        else{
          let num = Math.floor(event.target.value);
          setStartTime(num);
        }
      }
    };

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount"
          onKeyDown = {(event) => {setTimer(event)}/>sec.
        </h1>
      </div>
      <div id="current-time">{startTime}}</div>
    </div>
  )
}


export default App;

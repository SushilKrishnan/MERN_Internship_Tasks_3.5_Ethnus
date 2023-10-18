import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export class Main extends Component {
    calculateAge = () => {
        var today = new Date();
        var birthDate = new Date(this.refs.dat.value);
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age_now--;
        }
        document.getElementById("res").innerHTML="Your are "+ age_now + " years old"
      }
  render() {
    return (
      <div>
        <center>
            <h1>Age Calculator</h1>
            <h5 style={{padding:"0px", margin:"5px"}}>Enter your date of birth</h5>
            <input ref="dat" type='date'></input>
            <br/>
            <button onClick={this.calculateAge} style={{margin:"5px"}} className='btn btn-primary'>Calculate Age</button>
            <h4 id="res"></h4>
        </center>
      </div>
    )
  }
}

export default Main

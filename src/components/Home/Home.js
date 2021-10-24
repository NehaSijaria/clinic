import React, { Component } from 'react';
// import Homeimage from "../Homeimage"
import Navber from '../Nav/Navber';
import './Home.css';
import Mission from '../Mission';
import OurDoctors from '../OurDoctors';
import Homeimage from '../Homeimage';

// import OurDoctors from '../OurDoctors';
// import Footer from '../Footer';
// import HomeQuote from '../HomeQuote';
// import Mission from '../Mission';


export default class Home extends Component {
  render() {
    return (
      <div className = "bg-dark">
        <Navber/>
        <Homeimage/>
        <Mission/>
        <br>
           
                </br>
                
                <h1 className="head text-white" align="center"> Our Doctors </h1>
                <br />
                <br/>
                <OurDoctors/>
        
      </div>
    )
  }
}


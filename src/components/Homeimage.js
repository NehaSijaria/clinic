import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Img from '../photos/medical.png';

import Mission from './Mission';
export default class Homeimage extends Component {
   
    render() { 
        return (
        <div>
        <Card className="text-white">
        <Card.Img src={Img} alt="Card image" height="500" style={{opacity:"0.6"}}/>
              
                    
                        <h1 className="font-weight-bold text-danger">Lifescape Hospital Ltd</h1>
                        <br>
                        
                        
                        
                        </br>
                        <p className="font-weight-bold text-danger">Curing Generations for Ages</p>
                   
                    
        </Card>
        <br />
        <br/>
        
        </div> );
    }
}
 

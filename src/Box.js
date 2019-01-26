import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    render() {
      return (
<div className = "Box-image" >
<img src={this.props.image} style={{width:"100%" , height:"70%"}}/> 
<center> {this.props.name} </center>
<p> {this.props.content} </p>

</div>
      )}
}
export default Box;
import React, {Component} from 'react';
import MyButton from './MyButton';

const letters = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r","s", "t", "u", "w", "x","y", "z", "å", "ä", "ö"];
const color = {
    backgroundColor: '#ffc107',
    color: 'white',
    boxShadow: '0px 7px #ff9800'
};

let buttons = letters.map(element => <MyButton class = "button" letter = {element} color = {color} key={element}></MyButton>);


class AllButtons extends Component{
    constructor(props){
        super(props);
        this.state = {all: buttons}
        
        
    }

    reset = () => {
        document.getElementById("antal").textContent = 0;
        this.setState({all: letters.map(element => <MyButton class = "button" letter = {element} color = {color} key={element}></MyButton>)});   
         
    };

    render()
    {
        return (
        <div>
        {this.state.all}
        <button onClick = {this.reset.bind(this)}>Reset</button>
        </div>
        );
    };
}
export default AllButtons;
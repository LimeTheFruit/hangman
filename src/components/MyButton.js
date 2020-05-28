import React, {Component} from 'react';

const color = {
    backgroundColor: '#ffc107',
    color: 'white',
    boxShadow: '0px 7px #ff9800',
    disabled: 'false'
};

const gray = {
    
        backgroundColor: '#bdbdbd',
        color: 'white',
        boxShadow: '0px 7px #616161',
        disabled: 'true'
};

class MyButton extends Component{

    constructor(props){
        super(props)
    
        this.state = {
            current: color
        }
    }

    render(){
            return <button className = "button">{this.props.letter}</button>;
            
    }
}

export default MyButton;
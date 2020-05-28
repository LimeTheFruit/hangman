import React, {Component} from 'react';

const color = {
    backgroundColor: '#ffc107',
    color: 'white',
    boxShadow: '0px 7px #ff9800'
};

const gray = {
    
        backgroundColor: '#bdbdbd',
        color: 'white',
        boxShadow: '0px 7px #616161'
    
};

class MyButton extends Component{

    constructor(props){
        super(props)
    
        this.state = {
            current: this.props.color
        }
    }


    clickHandler(e){
        const antal = document.getElementById("antal");
        let nyttAntal = Number(antal.textContent) + 1;
        antal.textContent = nyttAntal;
        this.setState({
            current: gray
        })
       
    }

    render(){
        if (this.state.current === this.props.color || this.state.current === color){

            let button = <button className = "button" style = {this.state.current} onClick = {this.clickHandler.bind(this)}>{this.props.letter}</button>;
            return button;
            
        }
        else 
        {
            return <button className = "button" style = {this.state.current}>{this.props.letter}</button>
        }
    }
}

export default MyButton;
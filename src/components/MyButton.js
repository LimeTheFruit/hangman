import React from 'react';

const color = {
    backgroundColor: '#ffc107',
    color: 'white',
    boxShadow: '0px 7px #ff9800'
}

const gray = {
    backgroundColor: '#bdbdbd',
    color: 'white',
    boxShadow: '0px 7px #bdbdbd'
}

let current = color;

function click(){current = gray;};

let MyButton = (props) => <button className = "button" style = {current} onClick = {click}></button>;

export default MyButton;
import React, {useState, useEffect} from 'react';

const enabled = {
    backgroundColor: '#ffc107',
    color: 'white',
    boxShadow: '0px 7px #ff9800',
    enabled: true
};

const disabled = {
    
        backgroundColor: '#bdbdbd',
        color: 'white',
        boxShadow: '0px 7px #616161',
        enabled: false
};

const Key = ({letter, addKeyToParent, keyClicked}) => {

    const [keyStatus, setKeyStatus] = useState(enabled);

    useEffect(() =>{
        addKeyToParent({keyStatus: keyStatus, setKeyStatus: setKeyStatus});
    }, []);

    const handleClick = (e) => {

        if (keyStatus.enabled === true){
            keyClicked(e);
            setKeyStatus(disabled);
        }  
    };
    
    return <button onClick = {handleClick} className = "button" style = {keyStatus}>{letter}</button>;
            
    
}

export default Key;
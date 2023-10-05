import React from 'react'

export default function Die(props){
    
    function realDie(){
        switch(props.value){
            case 1:
            return "one";
            break;
            case 2:
            return "two";
            break;
            case 3:
            return "three";
            break;
            case 4:
            return "four";
            break;
            case 5:
            return "five";
            break;
            case 6:
            return "six";
            break;
        }
    }
     
        
        const styles = {
            backgroundColor: props.isHeld ? "#7AABE6" : "white"
        }
    
       
    return(
            //<div className={`die-box ${realDice()}`} onClick={props.toggleIsHeld} style={styles}>
                //<h2 className="die-num">{props.value}</h2>
           // </div>
           <div className={`die-box ${realDie()}`} onClick={props.toggleIsHeld} style={styles}>
            <span className="dot"></span>
                {props.value >= 2 && <span className="dot"></span>}
                {props.value >= 3 && <span className="dot"></span>}
                {props.value >= 4 && <span className="dot"></span>}
                {props.value >= 5 && <span className="dot"></span>}
                {props.value >= 6 && <span className="dot"></span>}
           </div>
        
    )
}
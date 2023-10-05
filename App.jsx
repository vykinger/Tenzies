import React from 'react'
import Die from './components/Die'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'


export default function App() {
    
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    
    React.useEffect(() => {
        const allHold = dice.every(die => die.isHeld)
        const firstNum = dice[0].value
        const equalNum = dice.every(die => die.value === firstNum)
        if(allHold && equalNum){
            setTenzies(true)
        }
    }, [dice])
    
    function allNewDice(){
        const arr = []
        for (let i = 0; i < 10; i++){
            arr.push(newDice())
        }
        return arr
    }
    
    function newDice(){
        return {
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
                }
    }
    
    function toggleIsHeld(id){
        setDice(prevDice => prevDice.map(die => {
            return die.id === id ? {...die, isHeld: !die.isHeld} : die
        }))
    }
    
    function rollDice(){
        setDice(prevDice => prevDice.map(die => {
            return die.isHeld ? die : newDice()
        }))
    }
    
    function flipTenzies() {
        setTenzies(prevTenzies => !prevTenzies)
        setDice(allNewDice())
    }
     
    
    const greateElement = dice.map(die => {
        return <Die value={die.value} key={die.id} isHeld={die.isHeld} toggleIsHeld={() => toggleIsHeld(die.id)}/>
        })
          
    
   
    
    
  return (
    <main>
        {tenzies && <Confetti position="absolute"/>}
        <h1>Tenzies</h1>
        <p className="instructions">{tenzies ? "Yiphee, you won!" : "Roll the dice until all ten show the same number. Click on the die you want to keep to freeze it."}</p>
        <div className="dice-wrapper">
            {greateElement}
        </div>
        <button onClick={tenzies ? flipTenzies : rollDice}>
            {tenzies ? "New Game" : "Roll"}
            </button>
    </main>
  )
}
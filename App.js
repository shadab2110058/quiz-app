import React,{useState} from 'react'
import Question from "./Components/Question"
import "./App.css"
const App = () => {

   const [ questionNumber, setQuestionNumber] = useState(1)

  

  

  return (
    <div className='app'>
      <div className='main'>
        <div className='top'>
          <div className='timer'>30</div>
        </div>
        <div className='bottom'><Question/></div>
      </div>
      <div className='scoreCard'><p>Scorecard</p>
      <div className='correct'>+4</div>
      <div className='wrong'>-1</div>
      <div className='total'>Total Score</div>
      <div className='totalScore'>0</div>
      </div>
    </div>
  )
}

export default App

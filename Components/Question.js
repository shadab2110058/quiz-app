import React from 'react'
import "./Question.css"

const Question = () => {

  const data  = [
    {
      id:1,question:"what is the capital of india",options:[
        { text:"",correct:false },
        { text:"",correct:false },
        { text:"",correct:true },
        { text:"",correct:false },
      ]
    },
    
  ]

  return (
    <div className='quizMain'>
     
      <div className='question'>{data[0].question}</div>
      
      <div className='answer'>
         
      <div className='option'>Lucknow</div>
      <div className='option'>Mumbai</div>
      <div className='option'>Delhi</div>
      <div className='option'>Bhopal</div>
      
      
      </div>
    </div>
  )
}

export default Question

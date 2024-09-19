'use client'

import { useState } from 'react'

export default function QuestionForm({ questions, onSubmit }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answer })
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      onSubmit(answers)
    }
  }

  const question = questions[currentQuestion]

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <h2 className="card-title">{question.text}</h2>
        <div className="form-control">
          {question.options.map((option) => (
            <label key={option.value} className="label cursor-pointer">
              <span className="label-text">{option.label}</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                value={option.value}
                onChange={() => handleAnswer(option.value)}
              />
            </label>
          ))}
        </div>
        <div className="card-actions justify-end mt-4">
          {currentQuestion > 0 && (
            <button
              className="btn btn-outline"
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
            >
              Previous
            </button>
          )}
          {currentQuestion === questions.length - 1 && (
            <button
              className="btn btn-primary"
              onClick={() => onSubmit(answers)}
            >
              Show Products
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
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
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm font-medium">{currentQuestion + 1}/{questions.length}</span>
            </div>
            <progress 
              className="progress progress-primary w-full" 
              value={progress} 
              max="100"
            ></progress>
          </div>
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
      <div className="mt-4 text-sm text-gray-500">
        {question.why}
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import QuestionForm from '@/components/QuestionForm'
import ProductList from '@/components/ProductList'
import questions from '@/data/questions.json'
import products from '@/data/products.json'
import { filterProducts } from '@/utils/filterProducts'

export default function Babybundle() {
  const [answers, setAnswers] = useState({})
  const [showProducts, setShowProducts] = useState(false)

  const handleAnswerSubmit = (newAnswers) => {
    setAnswers(newAnswers)
    setShowProducts(true)
  }

  const filteredProducts = filterProducts(products, answers)

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Baby's First Holiday Bundle</h1>
      {!showProducts ? (
        <QuestionForm questions={questions} onSubmit={handleAnswerSubmit} />
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </main>
  )
}
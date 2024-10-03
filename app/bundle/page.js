'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast, Toaster } from 'react-hot-toast'
import QuestionForm from '@/components/QuestionForm'
import questions from '@/data/questions.json'
import products from '@/data/products.json'
import { filterProducts } from '@/utils/filterProducts'

export default function Bundle() {
  const [answers, setAnswers] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleAnswerSubmit = async (newAnswers) => {
    setIsLoading(true)
    setAnswers(newAnswers)
    
    const filteredProducts = filterProducts(products, newAnswers)
    
    try {
      const response = await fetch('/api/create-bundle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ products: filteredProducts, answers: newAnswers }),
      })

      if (response.ok) {
        const { id } = await response.json()
        toast.success('Bundle created successfully!')
        router.push(`/bundle/${id}`)
      } else {
        console.error('Failed to create bundle')
        toast.error('Failed to create bundle. Please try again.')
      }
    } catch (error) {
      console.error('Error creating bundle:', error)
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Toaster position="bottom-center" />
      <h1 className="text-3xl font-bold mb-8 text-center">Your Baby's Travel Bundle</h1>
      <QuestionForm questions={questions} onSubmit={handleAnswerSubmit} />
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
    </main>
  )
}
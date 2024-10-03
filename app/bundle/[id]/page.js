'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { toast } from 'react-hot-toast'
import ProductCard from '@/components/ProductCard'

export default function SharedBundle() {
  const [bundle, setBundle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [bundleUrl, setBundleUrl] = useState('')
  const params = useParams()

  useEffect(() => {
    const fetchBundle = async () => {
      try {
        const response = await fetch(`/api/create-bundle?id=${params.id}`)
        if (response.ok) {
          const data = await response.json()
          setBundle(data)
          setBundleUrl(`${window.location.origin}/bundle/${params.id}`)
        } else {
          setError('Failed to load bundle')
          toast.error('Failed to load bundle. Please try again.')
        }
      } catch (err) {
        setError('An error occurred while fetching the bundle')
        toast.error('An error occurred. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchBundle()
  }, [params.id])

  const handleCopyClick = () => {
    navigator.clipboard.writeText(bundleUrl)
      .then(() => {
        toast.success('Link copied to clipboard!')
      })
      .catch((error) => {
        console.error('Failed to copy:', error)
        toast.error('Failed to copy link. Please try again.')
      })
  }

  if (loading) {
    return <div className="text-center py-8">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight text-center my-10">Your Baby&apos;s Travel Bundle</h1>
      <div className="mb-8 flex flex-col items-center">
        <p className="text-lg opacity-80 leading-relaxed my-2">Share your bundle with this link:</p>
        <div className="flex items-center gap-2 mb-10">
          <input value={bundleUrl} readOnly className="input input-bordered w-64" />
          <button
            onClick={handleCopyClick}
            className="btn btn-primary"
          >
            Copy
          </button>
        </div>
      </div>
      {bundle && bundle.products && (
        <section className="grid lg:grid-cols-3 mb-24 md:mb-32 gap-8">
          {bundle.products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </section>
      )}
    </main>
  )
}
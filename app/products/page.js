'use client'

import { useState, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import products from '@/data/products.json'

const categories = ['All', ...new Set(products.map(product => product.category))]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      
      <div className="flex flex-wrap justify-center gap-2 mt-10 mb-8 pb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`badge badge-sm md:badge-md hover:badge-primary font-bold px-5 py-3 ${
              selectedCategory === category ? 'badge-primary' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </section>
    </main>
  )
}
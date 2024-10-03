'use client'

import { useState } from 'react'
import { FaStar, FaTimes } from 'react-icons/fa'
import { toast } from 'react-hot-toast'

const ProductReviews = ({ productId, initialReviews = [] }) => {
  const [reviews, setReviews] = useState(initialReviews)
  const [showSidebar, setShowSidebar] = useState(false)
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' })

  const averageRating = reviews.length 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0

  const handleSubmitReview = (e) => {
    e.preventDefault()
    const reviewToAdd = {
      id: Date.now(),
      ...newReview,
      date: new Date().toISOString()
    }
    setReviews([...reviews, reviewToAdd])
    setNewReview({ rating: 0, comment: '' })
    toast.success('Review submitted successfully!')
    // Here you would typically send the new review to your backend
  }

  return (
    <div className="relative">
      <button
        className="flex items-center text-primary hover:text-primary-focus transition-colors duration-200"
        onClick={() => setShowSidebar(true)}
        aria-label={`Show ${reviews.length} reviews`}
      >
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`w-4 h-4 ${
                star <= Math.round(averageRating)
                  ? 'text-primary'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="ml-2">{reviews.length} reviews</span>
      </button>

      {showSidebar && (
        <div className="fixed inset-y-0 right-0 w-96 bg-base-100 shadow-xl p-6 overflow-y-auto z-50">
          <button
            onClick={() => setShowSidebar(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close reviews"
          >
            <FaTimes className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mb-4">Product Reviews</h2>
          <div className="space-y-4 mb-8">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-4">
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating ? 'text-primary' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Rating
              </label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className={`w-6 h-6 ${
                      star <= newReview.rating ? 'text-primary' : 'text-gray-300'
                    }`}
                    aria-label={`Rate ${star} stars`}
                  >
                    <FaStar className="w-full h-full" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium mb-1">
                Your Review
              </label>
              <textarea
                id="comment"
                rows="4"
                className="textarea textarea-bordered w-full"
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Submit Review
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ProductReviews
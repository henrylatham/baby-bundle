import mongoose from 'mongoose';

const BundleSchema = new mongoose.Schema({
  products: [
    {
      id: String,
      name: String,
      description: String,
      price: Number,
      image: String,
      category: String,
      asin: String,
      affiliateLink: String,
      tags: [String]
    }
  ],
  answers: {
    type: Map,
    of: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Bundle || mongoose.model('Bundle', BundleSchema);
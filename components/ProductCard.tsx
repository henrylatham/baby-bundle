export default function ProductCard({ product }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
        <div className="card-actions justify-end">
          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Buy on Amazon
          </a>
        </div>
      </div>
    </div>
  )
}
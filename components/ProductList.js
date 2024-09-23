import ProductCard from './ProductCard'

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          imageUrl={product.imageLink || "/placeholder.svg"}
        />
      ))}
    </div>
  )
}
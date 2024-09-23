// import Image from 'next/image'
import { 
  FaBaby, FaBed, FaCar, FaUtensils, FaShoppingBag, FaBath, 
  FaStethoscope, FaGamepad, FaUmbrella, FaMoon
} from 'react-icons/fa'

const categoryIcons = {
  'Baby Carriers': FaBaby,
  'Travel Cribs': FaBed,
  'Travel Systems': FaCar,
  'Strollers': FaCar,
  'Feeding': FaUtensils,
  'Diaper Bags': FaShoppingBag,
  'Diapering': FaBaby,
  'Bathing': FaBath,
  'Health': FaStethoscope,
  'Toys': FaGamepad,
  'Travel Accessories': FaUmbrella,
  'Sleep': FaMoon,
  'Car Accessories': FaCar,
}

export default function ProductCard({ title, description, price, category }) {
  const IconComponent = categoryIcons[category] || FaBaby;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm">
      {/* Commented out Image component
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover bg-gray-200"
        />
      </div>
      */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <IconComponent size={20} className="text-gray-600" />
          </div>
          <span className="text-2xl font-bold">
            ${price.toFixed(2)}
          </span>
        </div>
        <button className="btn btn-outline w-full mt-4">
          Add to Basket
        </button>
      </div>
    </div>
  )
}
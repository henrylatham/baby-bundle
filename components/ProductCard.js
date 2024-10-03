import Image from 'next/image'
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

export default function ProductCard({ product }) {
  console.log('Product data:', product);

  const { id, name, description, price, category, image, affiliateLink } = product;

  const IconComponent = categoryIcons[category] || FaBaby;

  console.log('Image path:', image);
  console.log('Affiliate Link:', affiliateLink);

  const handleClick = (e) => {
    e.preventDefault()
    console.log('Clicked. Affiliate Link:', affiliateLink);
    if (affiliateLink) {
      window.open(affiliateLink, '_blank')
    } else {
      console.error('No affiliate link provided');
    }
  }

  return (
    <div onClick={handleClick} className="block cursor-pointer">
      <div className="bg-base-200 rounded-box overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-center object-cover hover:scale-[1.03] duration-200 ease-in-out"
            priority
          />
        </div>
        <div className="p-6">
          <h2 className="mb-1 text-xl md:text-2xl font-bold">{name}</h2>
          <p className="text-base-content/80 space-y-4">{description}</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2">
              <IconComponent size={20} className="text-gray-600" aria-hidden="true" />
              <span className="sr-only">{category}</span>
            </div>
            <span className="text-2xl font-bold">
              ${price.toFixed(2)}
            </span>
          </div>
          <button 
            className="btn btn-primary btn-outline w-full mt-4"
            aria-label={`Buy ${name} on Amazon`}
            onClick={handleClick}
          >
            Buy on Amazon
          </button>
        </div>
      </div>
    </div>
  )
}
import Image from 'next/image'
import { 
  FaBaby, FaBed, FaCar, FaUtensils, FaShoppingBag, FaStethoscope
} from 'react-icons/fa'

const categoryIcons = {
  'Baby Carriers': FaBaby,
  'Travel Cribs': FaBed,
  'Travel Systems': FaCar,
  'Feeding': FaUtensils,
  'Diaper/Nappies': FaShoppingBag,
  'Health': FaStethoscope,
}

export default function ProductCard({ product }) {
  const { id, name, description, price, category, image, affiliateLink } = product;

  const IconComponent = categoryIcons[category] || FaBaby;

  const handleClick = (e) => {
    e.preventDefault();
    if (affiliateLink) {
      console.log('Clicked. Affiliate Link:', affiliateLink);
      window.open(affiliateLink, '_blank', 'noopener,noreferrer');
    } else {
      console.error('No affiliate link provided for product:', name);
      alert('Sorry, the product link is currently unavailable.');
    }
  }

  return (
    <div className="bg-base-200 rounded-box overflow-hidden flex flex-col h-full">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-center object-cover hover:scale-[1.03] duration-200 ease-in-out"
          priority
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="mb-2 text-xl md:text-2xl font-bold">{name}</h2>
        <p className="text-base-content/80 mb-4 flex-grow">{description}</p>
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <IconComponent size={20} className="text-gray-600" aria-hidden="true" />
              <span className="text-sm font-medium text-gray-600">{category}</span>
            </div>
            <span className="text-2xl font-bold">
              ${price.toFixed(2)}
            </span>
          </div>
          <button 
            className="btn btn-primary w-full"
            aria-label={`Buy ${name} on Amazon`}
            onClick={handleClick}
            disabled={!affiliateLink}
          >
            {affiliateLink ? 'Buy on Amazon' : 'Currently Unavailable'}
          </button>
        </div>
      </div>
    </div>
  )
}
import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { HeartIcon } from '@heroicons/react/24/outline'
import tokyoImg from '../assets/area-photos/tokyo.jpg'
import Image from 'next/image'
import { CafeInfo } from '../types'

const AreaCafe = (cafe: CafeInfo, index: Number) => {
    const { addToFavorites, removeFromFavorites, favorites } = useAppContext();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
      const cafeIsFavorite = favorites.indexOf(cafe.name) >= 0;

      if (cafeIsFavorite) {
        setIsFavorite(true)
      } else {
        setIsFavorite(false)
      }
     
    }, [favorites])
  
    const handleClick = () => {
      if (isFavorite) {
        removeFromFavorites(cafe);
        setIsFavorite(false);
      } else {
        addToFavorites(cafe);
        setIsFavorite(true);
      }

    }

  return (
    <div className="hover:drop-shadow-xl hover:cursor-pointer rounded-lg text-xl w-4/5 md:w-2/3 xl:w-1/2 my-5 pt-3 sm:pt-10 md:pb-4 px-2 sm:px-8 text-center bg-[#e4bb97] shadow-sm shadow-neutral-400 ">
      <div className='w-50 mx-20'>
      <Image
        src={cafe.image ? cafe.image : tokyoImg}
        alt="cafe image"
        layout='responsive'
        className='rounded'
      />
      </div>
        <h1 className='text-2xl md:text-3xl mt-6'>{cafe.name}</h1>
        <p className='text-lg'>{cafe.address}</p>
      <div>
        <button onClick={handleClick}>
          <HeartIcon 
            className={`h-9 mx-auto hover:cursor-pointer hover:text-orange-200 sm:mt-3 ${isFavorite  ? 'text-white' : 'text-black'}`}
          />
        </button>
      </div>
    </div>
  )
}
export default AreaCafe

// favorites.includes(`${cafe.name}`)
import { useRouter } from 'next/router'
import Link from 'next/link'
import { cafeDetails } from '../../assets/cafeDetails'
import cafeOptions from '../../assets/cafeOptions'
import cafeOptionsJapan from '../../assets/cafeOptionsJapan'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'
import { useAppContext } from '../../context/AppContext'
import { useState } from 'react'
import AreaCafe from '../../components/AreaCafe';

type Props = {}

const Area = (props: Props) => {
  const router = useRouter();
  const { area } = router.query;

  const routerArea = cafeDetails.find(x => x.id == area);
  const neighborhood = routerArea?.cafes;
  const imgSrc = area === 'tokyo' || area === 'osaka' || area === 'kyoto' || area === 'fukuoka' ? cafeOptionsJapan.find(x => x.value == area)?.img : cafeOptions.find(x => x.value == area)?.img;

  const { addToFavorites, favorites } = useAppContext();

  const handleClick = (cafe: any) => {
    addToFavorites(cafe);
  }

  return (
    <div className='h-screen bg-[#fef5ef]'>
    <div className='h-100 bg-[#fef5ef] font-special'>
      <Link href="/">
          <ArrowLeftCircleIcon className='h-9 ml-3 mt-3 z-10 text-white absolute hover:cursor-pointer' />
        </Link>
      <header>
        <div id="banner-image" style={{backgroundImage: `url(${imgSrc?.src})`}} className="bg-lime-800/90 h-72 text-center bg-cover bg-center">
          <h1 className='text-5xl font-medium text-slate-100 drop-shadow-xl shadow-black w-1/2 mx-auto pt-52 z-20'>{area}</h1>
        </div>
      </header>
      <div className='flex flex-col w-2/3 mx-auto items-center'>
        {neighborhood && neighborhood.map((data, index) => {
          return (
          <AreaCafe key={index} {...data} />
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default Area

// use when getting data from outside

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch(`adsfasdfas${context.query.id}`);
//   const character = await res.json();

//   return {
//     props: {
//       character,
//     },
//   };
// };
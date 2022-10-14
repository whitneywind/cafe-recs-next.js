import { useAppContext } from '../../context/AppContext'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Cafe {
  name: String;
  address: String;
  parking: Boolean
}

type Props = {
  cafe: Cafe
}
const favorites = () => {
    const { favorites } = useAppContext();

  return (
    <main className='bg-[#DFB77C]/70 h-screen overflow-hidden font-special w-screen border-white'>
      <Link href="/">
          <ArrowLeftCircleIcon className='h-9 ml-3 mt-4 z-10 text-white absolute hover:cursor-pointer' />
        </Link>
      <div className='w-100 text-center mt-20 flex flex-col items-center space-y-24'>
        <h1 className='text-6xl text-brown-600'>my favorites</h1>
        <div className='bg-white h-fit w-1/2 rounded '>
          {favorites && favorites.map((cafe : string) => {
            console.log(cafe)
            return <div key={`${cafe}`} className="text-3xl my-5 ">
              {cafe}
            </div>
          })
        }
        </div>
      </div>
    </main>
  )
}
export default favorites
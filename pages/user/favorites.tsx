import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import SearchBar from '../../components/SearchBar'
import { Cafe } from '../../types'
import Favorites from '../../components/Favorites'

type Props = {
  cafe: Cafe
}
const favorites = () => {

  return (
    <main className='bg-[#DFB77C]/70 h-screen overflow-hidden font-special w-screen border-white'>
      <Link href="/">
          <ArrowLeftCircleIcon className='h-9 ml-3 mt-4 z-10 text-white absolute hover:cursor-pointer' />
      </Link>
      <div className='w-1/3 absolute right-0 px-2 pt-2 z-10'>
        <SearchBar />
      </div>
      {/* <div className='w-100 text-center mt-32 flex flex-col items-center space-y-16'>
        <h1 className='text-6xl text-neutral-700'>my favorites</h1>
        <div className='bg-white h-fit w-2/5 rounded '>
          {!favorites || favorites.length === 0 && <div>no favorites to show</div>}
          {favorites && favorites.map((cafe: any) => {
            return <div key={`${cafe.id ? cafe.id : cafe.name}`} className="text-3xl my-5 text-center ">
              <p>{cafe.name}</p>
              <Link href={`/user/${cafe.area ? cafe.area : area}`}>
                <ArrowSmallRightIcon className='h-7 mx-auto mb-3'/>
              </Link>
              <hr />
            </div>
          })
        }
        </div>
      </div> */}
      <Favorites />
    </main>
  )
}

export default favorites
import { useAppContext } from '../context/globalContext'
import Link from 'next/link'
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'

type Props = {}

const Favorites = (props: Props) => {
const { favorites } = useAppContext();
  const area = 'tokyo';

  return (
    <div className='w-100 text-center mt-32 flex flex-col items-center space-y-16'>
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
      </div>
  )
}
export default Favorites
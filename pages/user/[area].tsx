import { useRouter } from 'next/router'
import Link from 'next/link'
import { cafeDetails } from '../../assets/cafeDetails'
import cafeOptions from '../../assets/cafeOptions'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'
import { useAppContext } from '../../context/AppContext'

type Props = {}

const Area = (props: Props) => {
  const router = useRouter();
  const { area } = router.query;

  const routerArea = cafeDetails.find(x => x.id == area);
  const neighborhood = routerArea?.cafes;
  const imgSrc = cafeOptions.find(x => x.value == area)?.img;

  const { addToFavorites, favorites } = useAppContext();

  const handleClick = (cafe: any) => {
    addToFavorites(cafe);
    console.log('favorites on cafe page: ', favorites)
  }

  // const [neighborhood, setNeighborhood] = useState<CafeInfo[]>()

  // useEffect(() => {
  //   setNeighborhood(routerArea?.cafes)
  // }, []);

  // console.log(routerArea)
  return (
    <div className='h-screen bg-[#fef5ef]'>
    <div className='h-100 bg-[#fef5ef] font-special'>
      <Link href="/">
          <ArrowLeftCircleIcon className='h-9 ml-2 mt-2 z-10 text-white absolute hover:cursor-pointer' />
        </Link>
      <header>
        <div id="banner-image" style={{backgroundImage: `url(${imgSrc?.src})`}} className="bg-lime-800/90 h-60 text-center bg-cover bg-center">
          <h1 className='text-5xl font-medium text-slate-100 drop-shadow-xl shadow-black w-1/2 mx-auto pt-40 z-20'>{area}</h1>
        </div>
      </header>
      <div className='flex flex-col w-2/3 mx-auto items-center'>
        {neighborhood && neighborhood.map((cafe) => {
          return (
          <div key={cafe.name} className="hover:drop-shadow-xl hover:cursor-pointer rounded-lg text-xl w-3/4 my-5 pt-10 pb-4 px-20 text-center bg-[#e4bb97] shadow-sm shadow-neutral-400 ">
            <h1 className='text-2xl'>{cafe.name}</h1>
            <p className='text-lg'>{cafe.address}</p>
            <div>
              <button onClick={() => handleClick(cafe)}>
                <HeartIcon className='h-9 mx-auto hover:cursor-pointer hover:text-white mt-3' />
              </button>
            </div>
          </div>
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
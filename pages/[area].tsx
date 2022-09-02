import { useRouter } from 'next/router'
import Link from 'next/link'
import { cafeDetails } from '../assets/cafeDetails'
import cafeOptions from '../assets/cafeOptions'
import Image from 'next/image'
// import cafeImg from '../assets/coffee.svg'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'

type Props = {}

const Area = (props: Props) => {
  const router = useRouter();
  const { area } = router.query;

  const routerArea = cafeDetails.find(x => x.id == area);
  const neighborhood = routerArea?.cafes;
  const imgSrc = cafeOptions.find(x => x.value == area)?.img;

  // const [neighborhood, setNeighborhood] = useState<CafeInfo[]>()

  // useEffect(() => {
  //   setNeighborhood(routerArea?.cafes)
  // }, []);

  // console.log(routerArea)
  return (
    <div className='h-screen bg-orange-100 font-special'>
      <Link href="/">
          <ArrowLeftCircleIcon className='h-9 ml-2 mt-2 z-10 text-white absolute hover:cursor-pointer' />
        </Link>
      <header>
        <div id="banner-image" style={{backgroundImage: `url(${imgSrc?.src})`}} className="bg-lime-800/90 h-60 text-center bg-cover bg-center">
          {/* <Image src={imgSrc} objectFit='cover' /> */}
          <h1 className='text-5xl font-medium text-slate-100 drop-shadow-xl shadow-black w-1/2 mx-auto pt-40 z-20'>{area}</h1>
        </div>
      </header>
      <div className='flex flex-col w-2/3 mx-auto items-center'>
        {neighborhood && neighborhood.map((cafe) => {
          return <div key={cafe.name} className="hover:drop-shadow-xl hover:cursor-pointer rounded-lg text-xl w-3/4 my-5 py-10 px-20 text-center bg-lime-700/50 shadow-sm shadow-neutral-400">
            <h1 className='text-2xl'>{cafe.name}</h1>
              {cafe.address}
            </div>
        })}
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
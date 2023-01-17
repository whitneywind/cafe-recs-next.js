import { useRouter } from 'next/router'
import Link from 'next/link'
import { cafeDetails } from '../../assets/cafeDetails'
import cafeOptions from '../../assets/cafeOptions'
import cafeOptionsJapan from '../../assets/cafeOptionsJapan'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import AreaCafe from '../../components/AreaCafe';
import AddCafeModal from '../../components/AddCafeModal'
import { GetServerSideProps } from 'next'
import connect from '../database/connection'

type Props = {
  caves?: {}
}

const Area = (props: Props) => {
  const router = useRouter();
  const { area } = router.query;

  const tokyoAreas = ['tokyo', 'osaka', 'kyoto', 'fukuoka'];

  const routerArea = cafeDetails.find(x => x.id == area);
  const neighborhood = routerArea?.cafes;


  const imgSrc = tokyoAreas.find(neighborhood => neighborhood === area) ? cafeOptionsJapan.find(neighborhood => neighborhood.value == area)?.img : cafeOptions.find(neighborhood => neighborhood.value == area)?.img;

  return (
    <div className='h-screen bg-[#fef5ef]'>
      <div className='h-100 bg-[#fef5ef] font-special'>
        <Link href="/">
            <ArrowLeftCircleIcon className='h-12 ml-4 mt-3 z-10 text-white absolute hover:cursor-pointer' />
          </Link>
          <AddCafeModal />
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

// export const getServerSideProps: GetServerSideProps = async () => {
//   let caves;
//   try {
//     const client = await connect();
//     const db = client.db("caves");

//     caves = await db
//       .collection("caves")
//       .find({})
//       .limit(20)
//       .toArray();
//   } catch (e) {
//     console.log(e);
//   }
//   return {
//     props: { caves: JSON.parse(JSON.stringify(caves)) },
// };
// };
import { CafeList } from "../types"
import torranceImg from '../assets//area-photos/IMG_5903.jpg'
import artsDistrictImg from '../assets//area-photos/artsdistrict.jpg'
import koreatownImg from '../assets//area-photos/koreatown.jpg'
import sawtelleImg from '../assets//area-photos/sawtelle.jpg'
import echoparkImg from '../assets//area-photos/echopark.jpg'
import losfelizImg from '../assets/area-photos/losfeliz.jpg'

const cafeOptions : CafeList[] = [
    { label: 'los feliz', value: 'los-feliz', img: losfelizImg },
    { label: 'arts district', value: 'arts-district', img: artsDistrictImg },
    // { label: 'torrance', value: 'torrance', img: torranceImg },
    { label: 'koreatown', value: 'koreatown', img: koreatownImg},
    { label: 'sawtelle', value: 'sawtelle', img: sawtelleImg },
    { label: 'echo park', value: 'echo-park', img: echoparkImg },
  ]

  export default cafeOptions
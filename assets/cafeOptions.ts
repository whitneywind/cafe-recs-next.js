import { CafeList } from "../types"
import torranceImg from '../assets/IMG_5903.jpg'
import artsDistrictImg from '../assets/artsdistrict.jpg'
import koreatownImg from '../assets/koreatown.jpg'
import sawtelleImg from '../assets/sawtelle.jpg'
import echoparkImg from '../assets/echopark.jpg'
import losfelizImg from '../assets/losfeliz.jpg'

const cafeOptions : CafeList[] = [
    { label: 'arts district', value: 'arts-district', img: artsDistrictImg },
    { label: 'torrance', value: 'torrance', img: torranceImg },
    { label: 'koreatown', value: 'koreatown', img: koreatownImg},
    { label: 'sawtelle', value: 'sawtelle', img: sawtelleImg },
    { label: 'echo park', value: 'echo-park', img: echoparkImg },
    { label: 'los feliz', value: 'los-feliz', img: losfelizImg },
  ]

  export default cafeOptions
import { CafeInfo, CafeArea } from "../types"
// area images
import torranceImg from '../assets//area-photos/IMG_5903.jpg'
import artsDistrictImg from '../assets//area-photos/artsdistrict.jpg'
import koreatownImg from '../assets//area-photos/koreatown.jpg'
import sawtelleImg from '../assets//area-photos/sawtelle.jpg'
import echoparkImg from '../assets//area-photos/echopark.jpg'
import losfelizImg from '../assets/area-photos/losfeliz.jpg'

import tokyoImg from '../assets/area-photos/tokyo.jpg'

// cafe images
import shirohigeImg from '../assets/cafe-photos/shirohige.jpg'
import canyoncoffee from '../assets/cafe-photos/canyon-coffee.jpg'
import eightfold2 from '../assets/cafe-photos/eightfold-ep.jpg'
import thyme from '../assets/cafe-photos/thyme.jpg'
import yeems from '../assets/cafe-photos/yeems.jpg'
import maruFeliz from '../assets/cafe-photos/maruFeliz.jpg'

export const cafeDetails: CafeArea[] = [
    {
        area: "arts district",
        id: "arts-district",
        cafes: [
            {
                name: "verve",
                address: "500 Mateo Street",
                parking: true,
                areaImg: artsDistrictImg,
            },
            {
                name: "maru arts district",
                address: "1019 S Santa Fe Ave",
                parking: false,
                areaImg: artsDistrictImg,
            },
            {
                name: "rykn",
                address: "710 S Santa Fe Ave",
                parking: false,
                areaImg: artsDistrictImg,
            },
        ]
    },
    {
        area: "torrance",
        id: "torrance",
        cafes: [
            {
                name: "croissants du tokyo",
                address: "1740 artesia blvd",
                parking: true,
                areaImg: torranceImg,
            },
            {
                name: "yamari",
                address: "3525 w carson st.",
                parking: true,
                areaImg: torranceImg,
            },
            {
                name: "corridor flow",
                address: "24614 narbonne ave",
                parking: true,
                areaImg: torranceImg,
            },
        ]
    },
    {
        area: "koreatown",
        id: "koreatown",
        cafes: [
            {
                name: "yeems coffee",
                address: "3033 w 6th st",
                parking: true,
                image: yeems,
                areaImg: koreatownImg,
            },
            {
                name: "sharp specialty coffee",
                address: "3421 w 6th st",
                parking: false,
                areaImg: koreatownImg,
            },
            {
                name: "3thyme",
                address: "600 s harvard blvd",
                parking: false,
                image: thyme,
                areaImg: koreatownImg,
            },
        ]
    },
    {
        area: "sawtelle",
        id: "sawtelle",
        cafes: [
            {
                name: "chitchat coffee and matcha",
                address: "1854 sawtelle blvd",
                parking: false,
                areaImg: sawtelleImg,
            },
            {
                name: "teaspoon",
                address: "1947 sawtelle blvd",
                parking: false,
                areaImg: sawtelleImg,
            },
            {
                name: "kiff kafe",
                address: "12229 w pico blvd",
                parking: false,
                areaImg: sawtelleImg,
            },
        ]
    },
    {
        area: "echo park",
        id: "echo-park",
        cafes: [
            {
                name: "stereoscope",
                address: "1501 sunset blvd",
                parking: true,
                areaImg: echoparkImg,
            },
            {
                name: "konbi",
                address: "1463 sunset blvd",
                parking: false,
                areaImg: echoparkImg,
            },
            {
                name: "eightfold coffee",
                address: "1294 w sunset blvd",
                parking: false,
                image: eightfold2,
                areaImg: echoparkImg,
            },
            {
                name: "canyon coffee",
                address: "32423 sunset blvd",
                parking: false,
                image: canyoncoffee,
                areaImg: echoparkImg,
            }
        ]
    },
    {
        area: "los feliz",
        id: "los-feliz",
        cafes: [
            {
                name: "maru",
                address: "1936 hillhurst ave",
                parking: false,
                image: maruFeliz,
                areaImg: losfelizImg,
            },
            {
                name: "blue bottle",
                address: "2066 hillhurst ave",
                parking: true,
                areaImg: losfelizImg,
            },
            {
                name: "all time",
                address: "2040 hillhurst ave",
                parking: false,
                areaImg: losfelizImg,
            },
        ]
    },
    {
        area: "tokyo",
        id: "tokyo",
        cafes: [
            {
                name: "cafe kitsune",
                address: "2066 hillhurst ave",
                parking: true,
                areaImg: tokyoImg,
            },
            {
                name: "shirohige's cream puff shop",
                address: "1936 hillhurst ave",
                parking: false,
                image: shirohigeImg,
                areaImg: tokyoImg,
            },
            {
                name: "omnibus",
                address: "2040 hillhurst ave",
                parking: false,
                areaImg: tokyoImg,
            },
        ]
    },
]
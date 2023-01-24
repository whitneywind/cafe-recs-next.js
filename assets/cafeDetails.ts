import { CafeInfo, CafeArea } from "../types"
// area images
import torranceImg from '../assets//area-photos/IMG_5903.jpg'
import artsDistrictImg from '../assets//area-photos/artsdistrict.jpg'
import koreatownImg from '../assets//area-photos/koreatown.jpg'
import sawtelleImg from '../assets//area-photos/sawtelle.jpg'
import echoparkImg from '../assets//area-photos/echopark.jpg'
import losfelizImg from '../assets/area-photos/losfeliz.jpg'

import tokyoImg from '../assets/area-photos/tokyo.jpg'
// import osakaImg from '../assets/area-photos/osaka.jpg'

// cafe images
import shirohigeImg from '../assets/cafe-photos/shirohige.jpg'
import canyoncoffee from '../assets/cafe-photos/canyon-coffee.jpg'
import eightfold2 from '../assets/cafe-photos/eightfold-ep.jpg'
import thyme from '../assets/cafe-photos/thyme.jpg'
import yeems from '../assets/cafe-photos/yeems.jpg'
import maruFeliz from '../assets/cafe-photos/maruFeliz.jpg'

export const cafeDetails: CafeArea[] = [
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
                area: 'los-feliz'
            },
            {
                name: "blue bottle",
                address: "2066 hillhurst ave",
                parking: true,
                areaImg: losfelizImg,
                area: 'los-feliz'
            },
            {
                name: "all time",
                address: "2040 hillhurst ave",
                parking: false,
                areaImg: losfelizImg,
                area: 'los-feliz'
            },
        ]
    },
    {
        area: "arts district",
        id: "arts-district",
        cafes: [
            {
                name: "verve",
                address: "500 Mateo Street",
                parking: true,
                areaImg: artsDistrictImg,
                area: "arts-district"
            },
            {
                name: "maru arts district",
                address: "1019 S Santa Fe Ave",
                parking: false,
                areaImg: artsDistrictImg,
                area: "arts-district"
            },
            {
                name: "rykn",
                address: "710 S Santa Fe Ave",
                parking: false,
                areaImg: artsDistrictImg,
                area: "arts-district"
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
                area: "torrance"
            },
            {
                name: "yamari",
                address: "3525 w carson st.",
                parking: true,
                areaImg: torranceImg,
                area: "torrance"
            },
            {
                name: "corridor flow",
                address: "24614 narbonne ave",
                parking: true,
                areaImg: torranceImg,
                area: "torrance"
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
                area: "koreatown"
            },
            {
                name: "sharp specialty coffee",
                address: "3421 w 6th st",
                parking: false,
                areaImg: koreatownImg,
                area: "koreatown"
            },
            {
                name: "3thyme",
                address: "600 s harvard blvd",
                parking: false,
                image: thyme,
                areaImg: koreatownImg,
                area: "koreatown"
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
                area: "sawtelle"
            },
            {
                name: "teaspoon",
                address: "1947 sawtelle blvd",
                parking: false,
                areaImg: sawtelleImg,
                area: "sawtelle"
            },
            {
                name: "kiff kafe",
                address: "12229 w pico blvd",
                parking: false,
                areaImg: sawtelleImg,
                area: "sawtelle"
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
                area: "echo-park"
            },
            {
                name: "konbi",
                address: "1463 sunset blvd",
                parking: false,
                areaImg: echoparkImg,
                area: "echo-park"
            },
            {
                name: "eightfold coffee",
                address: "1294 w sunset blvd",
                parking: false,
                image: eightfold2,
                areaImg: echoparkImg,
                area: "echo-park"
            },
            {
                name: "canyon coffee",
                address: "32423 sunset blvd",
                parking: false,
                image: canyoncoffee,
                areaImg: echoparkImg,
                area: "echo-park"
            }
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
                area: "tokyo"
            },
            {
                name: "shirohige's cream puff shop",
                address: "1936 hillhurst ave",
                parking: false,
                image: shirohigeImg,
                areaImg: tokyoImg,
                area: "tokyo"
            },
            {
                name: "cafe reissue",
                address: "2040 hillhurst ave",
                parking: false,
                areaImg: tokyoImg,
                area: "tokyo"
            },
            {
                name: "the little bakery",
                address: "2040 hillhurst ave",
                parking: false,
                areaImg: tokyoImg,
                area: "tokyo"
            },
            {
                name: "cookie time",
                address: "2040 hillhurst ave",
                parking: false,
                areaImg: tokyoImg,
                area: "tokyo"
            },
            {
                name: "oshiage nyanko",
                address: "2040 hillhurst ave",
                parking: false,
                areaImg: tokyoImg,
                area: "tokyo"
            },
        ]
    },
    {
        area: "osaka",
        id: "osaka",
        cafes: [
            {
                name: "usagi to boku",
                address: "2066 hillhurst ave",
                parking: true,
                area: "osaka"
            },
            {
                name: "shirohige's cream puff shop",
                address: "1936 hillhurst ave",
                parking: false,
                area: "osaka"
            },
            {
                name: "jtrrd",
                address: "2040 hillhurst ave",
                parking: false,
                area: "osaka"

            },
        ]
    },
    {
        area: "fukuoka",
        id: "fukuoka",
        cafes: [
            {
                name: "mume",
                address: "2066 hillhurst ave",
                parking: true,
                area: "fukuoka"
            },
            {
                name: "tagashira tea",
                address: "1936 hillhurst ave",
                parking: false,
                area: "fukuoka"
            },
            {
                name: "hachi matcha",
                address: "2040 hillhurst ave",
                parking: false,
                area: "fukuoka"

            },
            {
                name: "shirogane sabo",
                address: "2040 hillhurst ave",
                parking: false,
                area: "fukuoka"

            },
        ]
    },
    {
        area: "kyoto",
        id: "kyoto",
        cafes: [
            {
                name: "arabica",
                address: "2066 hillhurst ave",
                parking: true,
                area: "kyoto"
            },
            {
                name: "miffy sakura",
                address: "1936 hillhurst ave",
                parking: false,
                area: "kyoto"
            },
            {
                name: "gion tsujiri",
                address: "2040 hillhurst ave",
                parking: false,
                area: "kyoto"

            },
            {
                name: "ippodo matcha",
                address: "2040 hillhurst ave",
                parking: false,
                area: "kyoto"

            },
        ]
    },
]
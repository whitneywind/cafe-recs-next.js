import { CafeInfo, CafeArea } from "../types"
import shirohigeImg from '../assets/cafe-photos/shirohige.jpg'

export const cafeDetails: CafeArea[] = [
    {
        area: "arts district",
        id: "arts-district",
        cafes: [
            {
                name: "verve",
                address: "500 Mateo Street",
                parking: true,
            },
            {
                name: "maru",
                address: "1019 S Santa Fe Ave",
                parking: false,
            },
            {
                name: "rykn",
                address: "710 S Santa Fe Ave",
                parking: false,
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
            },
            {
                name: "yamari",
                address: "3525 w carson st.",
                parking: true,
            },
            {
                name: "corridor flow",
                address: "24614 narbonne ave",
                parking: true,
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
            },
            {
                name: "sharp specialty coffee",
                address: "3421 w 6th st",
                parking: false,
            },
            {
                name: "3thyme",
                address: "600 s harvard blvd",
                parking: false,
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
            },
            {
                name: "teaspoon",
                address: "1947 sawtelle blvd",
                parking: false,
            },
            {
                name: "kiff kafe",
                address: "12229 w pico blvd",
                parking: false,
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
            },
            {
                name: "konbi",
                address: "1463 sunset blvd",
                parking: false,
            },
            {
                name: "eightfold coffee",
                address: "1294 w sunset blvd",
                parking: false,
            },
            {
                name: "canyon coffee",
                address: "32423 sunset blvd",
                parking: false
            }
        ]
    },
    {
        area: "los feliz",
        id: "los-feliz",
        cafes: [
            {
                name: "blue bottle",
                address: "2066 hillhurst ave",
                parking: true,
            },
            {
                name: "maru",
                address: "1936 hillhurst ave",
                parking: false,
            },
            {
                name: "all time",
                address: "2040 hillhurst ave",
                parking: false,
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
            },
            {
                name: "shirohige's cream puff shop",
                address: "1936 hillhurst ave",
                parking: false,
                image: shirohigeImg
            },
            {
                name: "omnibus",
                address: "2040 hillhurst ave",
                parking: false,
            },
        ]
    },
]
import { StaticImageData } from "next/image";


export interface CafeArea {
    area: string,
    id: string,
    cafes: CafeInfo[],
}

export interface CafeInfo {
    name: string,
    address: string,
    parking?: boolean,
    image?: string | StaticImageData,
    areaImg?: string | any,
    isFavorite?: boolean,
    id?: number,
    area?: string
}

export interface CafeList {
    label: string;
    value: string;
    img?: string | any,
  }

 export interface Cafe {
    name: String;
    address: String;
    parking: Boolean
  }
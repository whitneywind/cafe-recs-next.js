import { StaticImageData } from "next/image";

export interface CafeInfo {
    name: string,
    address: string,
    parking?: boolean,
    image?: string | StaticImageData,
    isFavorite?: boolean
}

export interface CafeArea {
    area: string,
    id: string,
    cafes: CafeInfo[],
}

export interface CafeList {
    label: string;
    value: string;
    img?: string | any,
  }
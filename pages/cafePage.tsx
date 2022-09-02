import { useEffect, useState } from "react"
import { cafeDetails } from "../assets/cafeDetails"
import cafeOptions from "../assets/cafeOptions"
import { CafeInfo, CafeArea, CafeList } from "../types"

type Props = {}

const cafePage = (props: Props) => {
    const [cafeArea, setCafeArea] = useState<CafeList[]>();

    useEffect(() => {
        setCafeArea(cafeOptions);
        console.log(cafeArea)
    }, []);

    console.log("outside of useEffect: ", cafeArea)
  return (
    <>
        <div>{cafeArea && cafeArea[1].label} cafes</div>
        {cafeDetails.map(cafe => {
            return (
                <div>
                    <p>area: {cafe.area}</p>
                    <p>name: {cafe.cafes[0].name}</p>
                </div>
            )
        })}
    </>
  )
}
export default cafePage
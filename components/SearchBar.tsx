import { ChangeEvent, useState, useCallback } from "react"
import { cafeDetails } from '../assets/cafeDetails'
import { CafeInfo, CafeArea } from "../types"
import debounce from 'lodash.debounce'

type Props = {}
const SearchBar = (props: Props) => {
    const [searchTerm, setSearchTerm] = useState("");

    let ListOfCafes: CafeInfo[] = [];

    for (let area of cafeDetails) {
        ListOfCafes = ListOfCafes.concat(...area.cafes)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const debouncedChangeHandler = useCallback(
        debounce(handleChange, 500)
      , []);

  return (
    <div className="w-1/3 lg:w-1/4">
        <input 
            type='text'
            name="search-bar"
            placeholder="search for a cafe"
            onChange={debouncedChangeHandler} 
            className='placeholder:italic placeholder:text-slate-400 text-lg bg-white w-full border border-slate-300 rounded-md pt-2 pb-1 pl-2  shadow-sm focus:outline-none focus:border-slate-500 focus:ring-sky-500 focus:ring-1'
        />
        <ul className="bg-white/80">
            {searchTerm !== "" && ListOfCafes.filter((cafe: CafeInfo) => cafe.name.toLowerCase().includes(searchTerm)
            ).map((cafe: CafeInfo) => (
                <li key={cafe.name} className="text-xl">{cafe.name}</li>
            ))}
        </ul>
    </div>
  )
}
export default SearchBar

// (e) => setSearchTerm(e.target.value)
// (e) => handleChange(e)
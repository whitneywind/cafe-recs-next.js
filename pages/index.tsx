import type { NextPage } from 'next'
import { useState } from 'react';
import cafeOptions from '../assets/cafeOptions';
import Link from 'next/link';
import { BookmarkSquareIcon } from '@heroicons/react/24/outline'

const Home: NextPage = () => {
  const [area, setArea] = useState('');

  const handleChange = (event : any) => {
    setArea(event.target.value);
  }

  return (
    <div className="bg-main-bg h-screen bg-center bg-no-repeat bg-cover overflow-hidden font-special">
      <nav className='flex justify-around xs:w-1/2 sm:w-1/3 md:w-1/4 right-0 absolute align-right pr-5 lg:bg-slate-200/70 rounded-b-lg items-center'>
        <Link href="#" className=''>
          <BookmarkSquareIcon className='h-9 text-stone-200 lg:text-stone-700 hover:cursor-pointer hover:text-stone-400' />
        </Link>
        <Link href="/user/register">
          <a className="cursor-pointer text-stone-200 text-xl pt-1 hover:text-stone-400 lg:text-stone-700">sign-in / register</a>
        </Link>
      </nav>
        <main className='flex items-center'>
          <div className='bg-stone-200 h-100 mt-48 w-1/2 lg:w-1/3 flex flex-col text-center mx-auto text-slate-700 opacity-90 pb-6 rounded'>
            <header className=' pt-10 pb-5'>
              {!area && <h1 className='text-3xl'>select a neighborhood</h1>}
            </header>
            <select value={area} onChange={handleChange} className="w-3/5 mx-auto text-center mb-4 pt-2 text-2xl outline-none">
              <option value="" disabled></option>
             {cafeOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option> )}
            </select>

            {area !== '' && (
              <button className='rounded-full bg-white w-fit px-5 pb-2 pt-3 mt-1 mx-auto'><Link href={`/user/${area}`}>find cafes</Link></button>
            )}
          </div>
        </main>
    </div>
  )
}

export default Home

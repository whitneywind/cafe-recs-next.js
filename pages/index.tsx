import type { NextPage } from 'next'
import { useState } from 'react';
import cafeOptions from '../assets/cafeOptions';
import cafeOptionsJapan from '../assets/cafeOptionsJapan';
import Link from 'next/link';
import { BookmarkSquareIcon } from '@heroicons/react/24/outline'


const Home: NextPage = () => {
  const [area, setArea] = useState('');

  const handleChange = (event : any) => {
    setArea(event.target.value);
  }

  return (
    <div className="bg-main-bg h-screen bg-center bg-no-repeat bg-cover overflow-hidden font-special">
      <nav className='flex justify-between w-screen px-5 absolute rounded-bl-lg items-center bg-black/50'>
        <Link href="/user/favorites" className=''>
          <BookmarkSquareIcon className='h-9 text-stone-200 hover:cursor-pointer hover:text-stone-400' />
        </Link>
        <Link href="/user/register">
          <a className="cursor-pointer text-stone-200 text-xl pt-1 hover:text-stone-400">sign-in / register</a>
        </Link>
      </nav>
        <main className='flex items-center mt-7'>
          <div className='bg-[#C3A88D] h-100 mt-48 w-1/2 lg:w-1/3 flex flex-col text-center mx-auto text-white pb-6 rounded'>
            <header className=' pt-10 pb-5'>
              <h1 className='text-3xl'>{!area ? 'select a neighborhood' : 'neighborhood:'}</h1>
            </header>
            <select value={area} onChange={handleChange} className="w-3/5 mx-auto text-center mb-4 pt-2 text-2xl outline-orange-200 text-slate-700">
              <option value="default" defaultValue={"select"}></option>
             {cafeOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option> )}
             <option value="---" disabled>---</option>
             {cafeOptionsJapan.map((option) => <option value={option.value} key={option.value}>{option.label}</option> )}
            </select>

            {area !== '' && (
              <button className='rounded-full bg-white text-slate-700 w-fit px-5 pb-2 pt-3 mt-1 mx-auto'><Link href={`/user/${area}`}>find cafes</Link></button>
            )}
          </div>
        </main>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import { useState } from 'react';
import cafeOptions from '../assets/cafeOptions';
import cafeOptionsJapan from '../assets/cafeOptionsJapan';
import Link from 'next/link';
import { BookmarkSquareIcon } from '@heroicons/react/24/outline'


const Home: NextPage = () => {
  const [area, setArea] = useState('');

  const handleChange = (event: any) => {
    setArea(event.target.value);
  }

  return (
    <div className="bg-[#e4bb97]/70 h-screen overflow-hidden font-special">
      <nav className='flex justify-between px-5 mt-2 mx-2 rounded-md items-center bg-[#91745c]/90'>
        <Link href="/user/favorites" className=''>
          <BookmarkSquareIcon className='h-9 text-stone-200 hover:cursor-pointer hover:text-stone-400' />
        </Link>
        <Link href="/user/register">
          <a className="cursor-pointer text-stone-200 text-xl pt-1 hover:text-stone-400">sign-in / register</a>
        </Link>
      </nav>
      <main className='flex items-center'>
        <div className='bg-main-bg bg-center bg-no-repeat bg-cover overflow-hidden h-100 mt-32 w-4/5 md:w-2/3 lg:w-1/2 flex flex-col text-center mx-auto text-white py-24 pb-40 rounded'>
          <header className=' pt-10 pb-5'>
            <h1 className='text-3xl font-bold drop-shadow-md'>{!area ? 'select a neighborhood' : 'neighborhood:'}</h1>
          </header>
          <select value={area} onChange={handleChange} className="w-2/5 mx-auto text-center mb-4 pt-2 text-2xl outline-orange-200 text-slate-700">
            <option value="default" defaultValue={"select"}></option>
            {cafeOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            <option value="---" disabled>---</option>
            {cafeOptionsJapan.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
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

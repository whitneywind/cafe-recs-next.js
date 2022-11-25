import type { NextPage } from 'next'
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Link from 'next/link';
import { useAppContext } from '../../context/AppContext';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'


const Register: NextPage = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { user, toggleUser } = useAppContext();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: SyntheticEvent) => {
        toggleUser();
    }

    return (
    <div className="bg-[#DFB77C]/70 h-screen overflow-hidden font-special">
        <Link href="/">
          <ArrowLeftCircleIcon className='h-9 ml-2 mt-2 z-10 text-white absolute hover:cursor-pointer' />
        </Link>
        <div className="w-3/4 xl:w-1/2 mx-auto bg-[#FAF5EF] rounded mt-36 text-slate-800 grid grid-cols-4 shadow-md">
            <form onSubmit={handleSubmit} action="/api/register" method="post" className='col-span-3 px-10'>
                <header className='mt-10 mb-4 text-center'>
                    <h1 className='text-4xl font-bold'>register</h1>
                </header>
                <main className='text-center flex flex-col pb-8 items-center'>
                    <input onChange={handleChange} required type="text" name="name" placeholder="   name" className='bg-[#FAF5EF]rounded my-2 pt-2 text-lg w-4/5' />
                    <input onChange={handleChange} required type="email" name="email" placeholder="   email" className='rounded my-2 pt-2 text-lg w-4/5' />
                    <input onChange={handleChange} required type="password" name="password" placeholder="password" className='rounded my-2 pt-2 text-lg w-4/5' />
                    <button className='bg-[#96897B] w-fit px-3 rounded-md mt-6 text-lg pt-1 text-white' type="submit">sign-up</button>
                </main>
            </form>
            <div className='col-span-1 bg-[#96897B] text-white flex flex-col rounded-r'>
                <p className='flex text-xl font-semibold w-100 mx-auto pt-32 pb-4 text-center'>have an account?</p>
                <button className='bg-[#fef5ef] w-fit px-3 mx-auto rounded-md text-lg text-black pt-1'>
                    <Link href="/user/sign-in">sign-in</Link>
                </button>
            </div>
        </div>
    </div>
  )
}
export default Register
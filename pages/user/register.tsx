import type { NextPage } from 'next'
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Link from 'next/link';
import { useAppContext } from '../../context/AppContext';

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
        e.preventDefault();
        console.log(userInfo);
        console.log('before toggling', `${user}`)
        toggleUser();
        console.log('after toggling', `${user}`)
        console.log(typeof toggleUser)

    }

    return (
    <div className="bg-[#fef5ef] h-screen overflow-hidden font-special">
        <div className="w-3/4 xl:w-1/2 mx-auto bg-white rounded mt-36 text-slate-800 shadow-md shadow-slate-300 grid grid-cols-4">
            <form onSubmit={handleSubmit} className='col-span-3 px-10'>
                <header className='mt-10 mb-4 text-center'>
                    <h1 className='text-4xl font-bold'>register</h1>
                </header>
                <main className='text-center flex flex-col pb-8 items-center'>
                    <input onChange={handleChange} required type="name" name="name" placeholder="   name" className='bg-slate-100 rounded my-2 text-lg w-4/5' />
                    <input onChange={handleChange} required type="email" name="email" placeholder="   email" className='bg-slate-100 rounded my-2 text-lg w-4/5' />
                    <input onChange={handleChange} required type="password" name="password" placeholder="   password" className='bg-slate-100 rounded my-2 text-lg w-4/5' />
                    <button className='bg-[#b47e84] w-fit px-3 rounded-md mt-6 text-lg pt-1 text-white' type="submit">sign-up</button>
                </main>
            </form>
            <div className='col-span-1 bg-[#b47e84] text-white flex flex-col'>
                <p className='flex text-xl font-semibold w-100 mx-auto pt-32 pb-4 text-center'>have an account?</p>
                <button className='bg-[#fef5ef] w-fit px-3 mx-auto rounded-md text-lg text-black pt-1'><Link href="/user/sign-in">sign-in</Link></button>
            </div>
        </div>
    </div>
  )
}
export default Register
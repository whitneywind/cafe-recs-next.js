import type { NextPage } from 'next'
import { SyntheticEvent, useState, FormEventHandler, ChangeEvent } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router';

const Register: NextPage = (props): JSX.Element => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const router = useRouter();

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            email: userInfo.email,
            password: userInfo.password,
            redirect: false,
        });

        console.log(signIn)
        console.log(userInfo, res);
        
        router.push('../auth/protected')

    };

    return (
    <div className="bg-[#fef5ef] h-screen overflow-hidden font-special">
        <div className="w-3/4 xl:w-1/2 mx-auto bg-white rounded mt-36 text-slate-800 shadow-md shadow-slate-300 grid grid-cols-4">
            <div className='col-span-1 bg-[#b47e84] text-slate-800 flex flex-col'>
                <p className='flex text-xl font-semibold text-white text-center pt-24 pb-4 mx-auto'>don't have an account?</p>
                <button className='bg-[#fef5ef] w-fit px-3 mx-auto rounded-md text-lg pt-1'><Link href="/user/register">sign-up</Link></button>
            </div>
            <form onSubmit={handleSubmit} className='col-span-3 px-10'>
                <header className='mt-10 mb-4 text-center'>
                    <h1 className='text-4xl font-bold'>sign in</h1>
                </header>
                <main className='text-center flex flex-col pb-8 items-center'>
                    <input 
                        required 
                        type="email" 
                        name="email" 
                        placeholder="   email" 
                        className='bg-slate-100 rounded my-2 text-lg w-4/5'
                        onChange={handleChange} 
                    />
                    <input required type="password" name="password" placeholder="   password" className='bg-slate-100 rounded my-2 text-lg w-4/5' />
                    <button 
                        className='bg-[#b47e84] w-fit px-3 rounded-md mt-6 text-lg pt-1 text-white' type="submit">
                        sign-in
                    </button>
                </main>
            </form>
        </div>
    </div>
  )
}
export default Register
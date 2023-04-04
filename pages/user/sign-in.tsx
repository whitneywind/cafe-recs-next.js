import type { NextPage } from 'next'
import { SyntheticEvent, useState, FormEventHandler, ChangeEvent } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'

const Register: NextPage = (props): JSX.Element => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const router = useRouter();
    // const callbackUrl = (router.query?.callbackUrl as string) ?? "/";

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        const res = await signIn("credentials", {
            email: userInfo.email,
            password: userInfo.password,
            redirect: false,
        });
        console.log('userinfo from tsx page: ', userInfo)
        if (res?.error) {
            console.log('error with signin')
            console.log('signin error: ', JSON.stringify(res.error));
        } else {
            console.log('no error with signin on tsx page')
            router.push('../auth/protected')
        }
    };

    return (
    <div className="bg-[#DFB77C]/70 h-screen overflow-hidden font-special">
        <Link href="/">
          <ArrowLeftCircleIcon className='h-9 ml-2 mt-2 z-10 text-white absolute hover:cursor-pointer' />
        </Link>
        <div className="w-3/4 xl:w-1/2 mx-auto bg-[#FAF5EF] rounded mt-36 text-slate-800 shadow-md grid grid-cols-4">
            <div className='col-span-1 bg-[#96897B] text-slate-800 rounded-l flex flex-col'>
                <p className='flex text-xl font-semibold text-white text-center pt-24 pb-4 mx-auto'>don&apos;t have an account?</p>
                <button className='bg-[#fef5ef] w-fit px-3 mx-auto rounded-md text-lg pt-1'>
                    <Link href="/user/register">sign-up</Link>
                </button>
            </div>
            <form onSubmit={handleSubmit} action="/api/sign-in" method="post" className='col-span-3 px-10'>
                <header className='mt-10 mb-4 text-center'>
                    <h1 className='text-4xl font-bold text-slate-800'>sign in</h1>
                </header>
                <main className='text-center flex flex-col pb-8 items-center'>
                    <input 
                        required 
                        type="email" 
                        name="email" 
                        placeholder="   email" 
                        className='rounded my-2 pt-2 text-lg w-4/5'
                        onChange={handleChange} 
                    />
                    <input 
                        required
                        type="password"
                        name="password"
                        placeholder="   password"
                        className='rounded my-2 pt-2 text-lg w-4/5'
                        onChange={handleChange}
                    />
                    <button 
                        className='bg-[#96897B] w-fit px-3 rounded-md mt-6 text-lg pt-1 text-white' type="submit">
                        sign-in
                    </button>
                </main>
            </form>
        </div>
    </div>
  )
}
export default Register
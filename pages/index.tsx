import type { NextPage } from 'next'
import { useState } from 'react';
import cafeOptions from '../assets/cafeOptions';
import Modal from '../components/modal';
import Link from 'next/link';
// import styles from '../styles/Home.module.css'
// style="background-image: url(...)"

const Home: NextPage = () => {
  const [area, setArea] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event : any) => {
    setArea(event.target.value);
  }


  return (
    <div className="bg-main-bg h-screen bg-center bg-no-repeat bg-cover overflow-hidden font-special">
      <nav className='text-right w-full text-neutral-200'>
        <Link href="#">sign-in / register</Link>
      </nav>
        <main className='h-screen relative bottom-20 flex items-center'>
          <div className='bg-stone-200 w-1/2 lg:w-1/3 flex flex-col text-center mx-auto text-slate-700 opacity-90 pb-6 rounded'>
            <header className=' pt-10 pb-5'>
              <h1 className='text-3xl'>select a neighborhood</h1>
            </header>
            <select value={area} onChange={handleChange} className="w-3/5 mx-auto text-center mb-4 pt-2 text-xl">
              <option value="" disabled></option>
             {cafeOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option> )}
            </select>

            {area !== '' && (
              <button className='rounded-full bg-white w-fit px-5 pb-2 pt-3 mt-1 mx-auto'><Link href={`/${area}`}>find cafes</Link></button>
            )}
          </div>
        </main>
        {/* {showModal && <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                Hello from the modal!
        </Modal>} */}
    </div>
  )
}

export default Home

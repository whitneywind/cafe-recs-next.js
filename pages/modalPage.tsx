import type { NextPage } from 'next'
import { useState } from 'react';
import cafeOptions from '../assets/cafeOptions';
import Modal from '../components/modal';

// import styles from '../styles/Home.module.css'
// style="background-image: url(...)"


// why does the modal work on this page but not index.js????

const Home: NextPage = () => {
  const [area, setArea] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event : any) => {
    setArea(event.target.value);
  }

  const handleClick = ( event: any) => {
    setShowModal(true);
  }

  return (
    <div className="bg-main-bg h-screen bg-center bg-no-repeat bg-cover overflow-hidden">
      <nav className='text-right w-full text-neutral-200'>
        <p>sign-in/register</p>
        <p>about</p>
      </nav>
        <main className='h-screen relative bottom-20 flex items-center'>
          <div className='bg-stone-200 w-1/2 lg:w-1/3 flex flex-col text-center mx-auto text-slate-700 opacity-90 pb-6 rounded'>
            <header>
              <h1 className='text-2xl py-10'>select a neighborhood</h1>
            </header>
            <select value={area} onChange={handleChange} className="w-3/4 mx-auto text-center">
             {cafeOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option> )}
            </select>
            {area !== '' && (
              <button className='rounded-full bg-white w-fit px-5 py-2 mt-5 mx-auto' onClick={handleClick}>find cafe</button>
            )}
          </div>
        </main>
        <div>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                Hello from the modal!
            </Modal>
        </div>
    </div>
  )
}

export default Home

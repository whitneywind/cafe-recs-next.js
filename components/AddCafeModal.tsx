import React, { ReactNode, useState } from "react";
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { useDisableBodyScroll } from "../hooks/useDisableBodyScroll";
import useModal from "../hooks/useModal";
import { NextPage } from "next";
import { ChangeEvent, SyntheticEvent } from "react";



interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}


export function Modal(props: ModalType) {
    useDisableBodyScroll(props.isOpen);
  return (
    <>
        {props.isOpen && (
            <div 
                className="z-10 w-screen h-screen absolute top-0 left-0 bg-black/30 flex justify-center items-center overflow-y-hidden" 
                onClick={props.toggle}
            >
                <div
                    className="block bg-white w-1/2 h-1/2 rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                >
                    {props.children}
                </div>
            </div>
        )}
    </>
  );
}

const AddCafe: NextPage = () => {
    const { isOpen, toggle } = useModal();
    const [newCafe, setNewCafe] = useState({
        name: "",
        address: "",
        neighborhood: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewCafe({
            ...newCafe,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: SyntheticEvent) => {
        console.log(newCafe)
        
    }

    return (
      <div>
        <PlusCircleIcon className='h-12 right-0 mt-3 z-20 text-white absolute mr-6 hover:cursor-pointer' onClick={toggle} />
        <Modal isOpen={isOpen} toggle={toggle}>
            <div>
                <form onSubmit={handleSubmit} action="/api/registerCafe" method="post">
                    <header className="bg-[#ba997b] p-3 pt-5 text-2xl text-center text-white">Add a Cafe</header>
                    <main className="text-center flex flex-col">
                        <input onChange={handleChange} required type="text" name="name" placeholder="name" className='' />
                        <input onChange={handleChange} required type="text" name="address" placeholder="address" className='' />
                        <input onChange={handleChange} required type="text" name="neighborhood" placeholder="neighborhood" className='' />
                        <button className='bg-[#ba997b] w-fit px-3 rounded-sm text-lg pt-1 text-white' type="submit">submit</button>
                    </main>
                </form>
            </div>
        </Modal>
      </div>
    );
  }

  export default AddCafe;
import React, { ReactNode, useState, useEffect } from "react";
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { useDisableBodyScroll } from "../hooks/useDisableBodyScroll";


interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

function useModal() {
    const [isOpen, setisOpen] = useState(false);
  
    const toggle = () => {
      setisOpen(!isOpen);
    };
  
    return {
      isOpen,
      toggle
    };
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
                    className="block bg-white w-1/2 h-1/2 p-2 rounded-sm"
                    onClick={(e) => e.stopPropagation()}
                >
                    {props.children}
                </div>
            </div>
        )}
    </>
  );
}

export default function AddCafeModal() {
    const { isOpen, toggle } = useModal();
    return (
      <div>
        <PlusCircleIcon className='h-12 right-0 mt-3 z-20 text-white absolute mr-6 hover:cursor-pointer' onClick={toggle} />
        <Modal isOpen={isOpen} toggle={toggle}>
            <div>modal content</div>
        </Modal>
      </div>
    );
  }
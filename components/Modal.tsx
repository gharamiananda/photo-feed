'use client'


import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal :React.FC<{children:React.ReactNode}>= ({children}) => {


    const router=useRouter()
    const modalRef = useRef<HTMLDialogElement>(null); // Explicitly set the ref type to HTMLDialogElement

    useEffect(() => {
        if (modalRef.current && !modalRef.current.open) { // Check if modalRef.current is not null before accessing properties/methods
            modalRef.current.showModal(); // Explicitly call showModal() on modalRef.current
        }
    }, []);


    const onHide=()=>{
        router.back();
    }

  return  createPortal(
    <dialog
    ref={modalRef}
    onClose={onHide}
    className='bg-teal-500'
    >

        <span
        onClick={onHide}
        className='flex justify-end cursor-pointer'
        >
            <Image
            width={30}
            height={30}
            src="/xmark.svg"
            alt='close'
            />
        </span>
{children}
    </dialog>,
    document.getElementById('modal-root-content') as Element | DocumentFragment
  )
}

export default Modal
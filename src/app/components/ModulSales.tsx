import Image from 'next/image'
import React from 'react'

interface Props {
    srcImg: string;
    altImg: string;
    title: string;
    subtitle: string;

}

export default function ModulSales({ srcImg, altImg, title, subtitle } : Props) {
  return (
    <div className='flex w-[75%] border-b-2 border-text-text-secundario mx-auto  py-4'>
        <Image 
          src={srcImg} 
          alt={altImg} 
          width={40} 
          height={40} 
          loading='lazy'
          style={{ width: "auto", height: "auto" }}
        />
        <div className='pl-6'>
        <a href='#' className='text-xl font-semibold text-text-primario'>{title}</a>
        <p className='text-text-secundario'> {subtitle}</p>
          
        </div>
    </div>
  )
}

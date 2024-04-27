import { TPhotoCard } from '@/lib/image-data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PhotoCard:React.FC<{photoInfo:TPhotoCard}> = ({photoInfo}) => {
  return (
       
   
      <Link href={`photos/${photoInfo.id}`} className="group">
     
        <Image
        width={700}
        height={700}
        src={photoInfo.url} alt="" />

       
        <div className="title-container">
          <h4 className="title">{photoInfo.title}</h4>
        </div>
      </Link>
    
    
  )
}

export default PhotoCard
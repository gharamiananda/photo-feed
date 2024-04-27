import { TPhotoCard } from "@/lib/image-data"
import React from "react"
import PhotoCard from "./PhotoCard"

const PhotoList:React.FC<{photos:TPhotoCard[]|undefined}> = ({photos}) => {

  console.log('photos', photos)
  return (
    <div className="container my-4 lg:my-8">
    <div className="img-grid">

   {
   photos && photos.length>0 && (
    photos.map((photo) =>(
      <PhotoCard key={photo.id} photoInfo={photo} />
    ))

   )
   }
  </div>
  </div>

  )
}

export default PhotoList
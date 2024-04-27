import { TPhotoCard } from "@/lib/image-data";
import Image from "next/image";
import React from "react";

const PhotoDetails:React.FC<{id:string;lang:'bn'|'en'}>=async ({id,lang}) => {

  
    // const dictionary = await getDictionary(lang);

    const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`);
  
    const photoInfo:TPhotoCard|undefined=await response.json();

  return (
    <div className="container my-4 lg:my-8">
    <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
      <div className="col-span-12 lg:col-span-8 border rounded-xl">
        <img className="max-w-full h-full max-h-[70vh] mx-auto" src={photoInfo?.url} alt="" />
      </div>
      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
        <h2 className="text-lg lg:text-2xl font-bold mb-2">
         {photoInfo?.title}
        </h2>
        <div className="text-xs lg:text-sm text-black/60 mb-6">
          #nature, #river, #ocean
        </div>
        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
          <div className="flex justify-between">
            <span>Views</span>
            <span className="font-bold">10M</span>
          </div>
          <div className="flex justify-between">
            <span>Share</span>
            <span className="font-bold">10M</span>
          </div>
          <div className="flex justify-between">
            <span>Up loaded</span>
            <span className="font-bold">31 January 2024</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <Image
              width={100}
              height={100}
               className="size-12 lg:size-14 rounded-full border"
                src={photoInfo?.author.avatar as string} alt="avatar" />
              <div className="spacy-y-3">
                <h6 className="lg:text-lg font-bold">{photoInfo?.author.name}</h6>
                <p className="text-black/60 text-xs lg:text-sm">420 Followers</p>
              </div>
            </div>
            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <img src="./assets/icons/follow.svg" className="w-5 h-5" />
              Follow
            </button>
          </div>
          <p className="text-xs lg:text-sm text-black/60">
           {photoInfo?.likes}
          </p>
        </div>
        <div className="mt-6">
          <div className="flex items-stretch gap-3">
            <button
              className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
              width={100}
              height={100}
              alt="" src="/heart.svg" className="w-5 h-5" />
              100
            </button>
            <button
              className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
              width={100}
              height={100}
              alt=""
               src="/save.svg" className="w-5 h-5" />
              Save
            </button>
            <button
              className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
              width={100}
              height={100}
              alt=""
               src="/share.svg" className="w-5 h-5" />

              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PhotoDetails
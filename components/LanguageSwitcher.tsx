import Image from 'next/image'

const LanguageSwitcher = () => {
  return (

    <div className="flex gap-4 items-center">

     
        <div className="relative">
        <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
    <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
      <Image
      width={100}
      height={100}
      className="max-w-8" src="/bd.png" alt="bangla" />
      Bangla
    </li>
    <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
      <Image
      width={100}
      height={100}
       className="max-w-8" src="/usa.png" alt="bangla" />
      English
    </li>
  </div>
        </div>
      </div>
   
  )
}

export default LanguageSwitcher
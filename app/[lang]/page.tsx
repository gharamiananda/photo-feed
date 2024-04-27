import PhotoList from "@/components/PhotoFeed";
import { TPhotoCard } from "@/lib/image-data";
import { getDictionary } from "./disctionaries";

export default async function Home({params: {lang}}:{params: {lang:'bn'|'en'}}) {
  const dictionary = await getDictionary(lang);

  const response = await fetch(`${process.env.BASE_API_URL}/photos`);

  const photos:TPhotoCard[]|undefined=await response.json();
  return (
    <div>{dictionary.followers}
    <PhotoList photos={photos} />
    
    </div>
  );
}

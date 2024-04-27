import PhotoDetails from "@/components/PhotoDetails";

// export default async function Home({params: {lang}}:{params: {lang:'bn'|'en'}}) {
const page = ({params: {id,lang}}:{params: {id:string;lang:'bn'|'en'}}) => {
    
  return (
    <PhotoDetails id={id} lang={lang} />
  )
}

export default page
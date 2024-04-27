import { getPhotoById } from "@/lib/image-data";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest,{params}:{params:{id:string}}){
    const photoId= params?.id;

    const data = await getPhotoById(photoId);
    return NextResponse.json(data)
}
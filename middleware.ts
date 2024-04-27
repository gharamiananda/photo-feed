import { match } from "@formatjs/intl-localematcher";

import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from "next/server";

let locales =['en', 'bn'];
let defaultLocale ='en';

function getLocate(request:NextRequest){
const acceptedLanguage = request.headers.get('accept-language')??undefined;


let headers ={
    'accept-language': acceptedLanguage
}


let languages = new Negotiator({headers}).languages();

return match(languages, locales,defaultLocale);
}


export async function middleware(request:NextRequest) {
const pathname=request.nextUrl.pathname;
const  pathnameIsMissingLocale=locales.every(locale=>!pathname.startsWith(`/${locale}`) && pathname!==`/${locale}`)


if(pathnameIsMissingLocale){
    const locale=getLocate(request);
    return NextResponse.redirect(new URL(`/${locale}${request.nextUrl.pathname}`,request.url))
}
}

export const config = {
    matcher: [
      // Skip all internal paths (_next, assets, api)
      '/((?!api|assets|.*\\..*|_next).*)',
      // Optional: only run on root (/) URL
      // '/'
    ],
  }
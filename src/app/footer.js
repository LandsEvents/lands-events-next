'use client';
export default function Footer()
{
 return (
     <div className="w-screen h-[300px] bg-gray-800 pt-10">
         <div className="w-1/4 mb-5 flex justify-center">
             <ul className="space-y-2">
                 <p className="pb-5">Pagina's :</p>
                 <li className="underline"><a href="/">Home</a></li>
                 <li className="underline"><a href="/calender">Events</a></li>
                 <li className="underline"><a href="/fotoalbums">Fotoalbums</a></li>
                 <li className="underline"><a href="/nieuws">Nieuws</a></li>
             </ul>
         </div>
         <div className="w-1/4 mt-5 mb-5">

         </div>
         <div className="w-1/4 mt-5 mb-5">

         </div>
         <div className="w-1/4 mt-5 mb-5">

         </div>
     </div>
 )
}
import Image from "next/image";

export default function Events() {
    return(
        <main className="max-w-screen min-h-screen bg-lands-bg">
            {/*Main Container v  */}
            <div className="max-w-screen h-full">
                {/*Banner*/}
                <section>
                    {/*<div className="pt-20 border-b-[1px] border-black bg-lands-accent max-w-screen h-[200px] pb-20">
                        <div className="flex justify-center">
                            <h1 className="text-3xl text-white">Fotoalbums</h1>
                        </div>
                    </div>*/}
                </section>
                {/*Album Grid*/}
                <section>
                    <div className="pt-20 max-w-full flex flex-wrap justify-center">
                        {/*Nieuws Card*/}
                        <div
                            className="w-[35%] h-[35%] p-6 bg-lands-achter border border-lands-accent shadow-sm shadow-lands-accent">
                            <div className="p-[120px]">
                            </div>
                            <div className="flex flex-row justify-center space-x-[250px]">
                                <p className="mb-3 font-normal text-white">Nieuwsartikel</p>
                                <a href="/nieuws/id" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-lands-geel rounded-lg focus:ring-4 focus:outline-none focus:ring-lands-geel">
                                Bekijk Artikel
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                </a>
                            </div>
                        </div>
                        <div
                            className="w-[45%] h-[35%] p-6 bg-lands-bg border border-lands-accent shadow-sm shadow-lands-accent">
                            <p className="mb-3 font-normal text-black">Nieuwsbeschrijving</p>
                            <div className="p-[120px]"></div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
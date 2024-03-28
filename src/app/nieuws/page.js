'use client'
import {NewsContext} from "@/app/libs/context";
import {useContext} from "react";
import {NewsCard} from "@/app/nieuws/nieuws";

export default function Events() {
    const [news, setNews] = useContext(NewsContext)
    console.log(news)
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
                    {news.map(n => <NewsCard news={n}/>)}
                </section>
            </div>
        </main>
    )
}
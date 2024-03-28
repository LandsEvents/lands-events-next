'use client'
import Link from "next/link";

export class nieuws {
    id;
    title;
    body;
    eventId;
    createdAt;
    updateAt;
    constructor(id, title, body, eventId, createdAt, updateAt) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.eventId = eventId;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
    }
}

export function NewsCard({news}) {

    return (
        <div className="pt-20 max-w-full flex flex-wrap justify-center">
            {/*Nieuws Card*/}
            <div
                className="w-[35%] h-[35%] p-6 bg-lands-achter border border-lands-accent shadow-sm shadow-lands-accent">
                <div className="p-[120px]">
                </div>
                <div className="flex flex-row justify-center space-x-[250px]">
                    <p className="mb-3 font-normal text-white">{news.title}</p>
                    <a href="/nieuws/id"
                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-lands-geel rounded-lg focus:ring-4 focus:outline-none focus:ring-lands-geel">
                        <Link href={'/nieuws/' + news.id}>Bekijk Artikel</Link>
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
                <p className="mb-3 font-normal text-black">{news.body}</p>
                <div className="p-[120px]"></div>
            </div>
        </div>
)
}

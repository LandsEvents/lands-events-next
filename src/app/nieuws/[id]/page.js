'use client';
import {nieuws} from "@/app/nieuws/nieuws";
import {useEffect, useState} from "react";
import nextConfig from "../../../../next.config.mjs";

export default function Page({ params }) {

    const [ni, setNi] = useState(new nieuws())
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(nextConfig.server + '/api/news/' + params.id)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setNi(new nieuws(data.id, data.news_title, data.body, data.event_id, data.created_at, data.updated_at))
                setLoading(false)
            })
    }, []);

    if(loading) return <div>loading...</div>

    return (
        <div>
            {ni.title} <br/>
            {ni.body}
        </div>
    )
}
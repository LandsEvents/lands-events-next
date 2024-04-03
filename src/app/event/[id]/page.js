'use client';
import {event} from "@/app/event/event";
import {useEffect, useState} from "react";

export default function Page({ params }) {

    const [ev, setEv] = useState(new event())
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://landsevents.test/api/events/' + params.id)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setEv(new event(data.id, data.name, new Date(data.begin_date), new Date(data.end_date),
                    data.description, data.category, data.location, data.price, data.image))
                setLoading(false)
            })
    }, []);

    if(loading) return <div>loading...</div>

    return (
        <div className={'flex flex-col w-full items-center text-center mt-10'}>
            <div className={'text-2xl'}>{ev.name}</div>
            <div className={'text-xl text-slate-500'}>{ev.location}</div>
            <div className={'text-lg text-slate-500'}>{ev.category}</div>
            <div>
                <span className={'text-sm text-slate-700'}>
                    {ev.begin_date.toISOString().substring(0, 10)} <span className={'mr-1'}/>
                    {ev.begin_date.toLocaleTimeString('default', {
                        hour: 'numeric',
                        minute: 'numeric'
                    })}
                    <span className={'mr-1'}/>
                    - {ev.end_date.toISOString().substring(0, 10)} <span className={'mr-1'}/>
                    {ev.end_date.toLocaleTimeString('default', {
                        hour: 'numeric',
                        minute: 'numeric'
                    })}
                </span>
            </div>
            <img src={"http://landsevents.test/storage/" + ev.image}/>
            <div className={"max-w-xl"}>{ev.description}</div>
        </div>
    )
}
'use client';
import {useEffect, useState} from "react";
import Calendar from "react-calendar";
import "../globals.css"
import {event} from "@/app/event";


export default function Calender() {
    const [events, setEvents] = useState([])
    const [activeDate, setActiveDate] = useState(new Date());

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://lands-events-laravel.test/api/events')
            .then((res) => res.json())
            .then((data) => {
                let newEvents = []
                for (const d of data) {
                    newEvents[newEvents.length] = new event(d.id, d.name, new Date(d.begin_date), new Date(d.end_date), d.description, d.category, d.location, d.price)
                }

                setEvents(newEvents)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>

    let eventsInMonth = []
    for (let e of events) {
        if (e.begin_date.getFullYear() >= activeDate.getFullYear() && e.end_date.getFullYear() <= activeDate.getFullYear() &&
            e.begin_date.getMonth() >= activeDate.getMonth() && e.end_date.getMonth() <= activeDate.getMonth()) {
            eventsInMonth[eventsInMonth.length] = e
        }
    }

    function dateWithinRange(x, a ,b) {
        return  x.getFullYear() >= a.getFullYear() &&  x.getFullYear() <= b.getFullYear() &&
                x.getMonth() >= a.getMonth() && x.getMonth() <= b.getMonth()  &&
                x.getDate() >= a.getDate() && x.getDate() <= b.getDate()
    }

    function changeDate(i) {
        let newDate = new Date(activeDate.getTime())
        newDate.setMonth(activeDate.getMonth() + i)
        console.log(newDate)
        setActiveDate(newDate);
    }

    function dateForward() {
        changeDate(1);
    }

    function dateBackward() {
        changeDate(-1);
    }

    function DayStyling(date, view) {
        if(view !== "month") return false
        for (let e of events) {
            if(dateWithinRange(date, e.begin_date, e.end_date)) {
                var yesterday = new Date(date.getTime());
                yesterday.setDate(date.getDate() - 1);

                yesterday = dateWithinRange(yesterday, e.begin_date, e.end_date);

                var tomorrow = new Date(date.getTime());
                tomorrow.setDate(date.getDate() + 1);

                tomorrow = dateWithinRange(tomorrow, e.begin_date, e.end_date);

                if(yesterday && tomorrow)
                    return "bg-slate-800"
                else if(yesterday)
                    return "rounded-r-lg bg-slate-800"
                else if(tomorrow)
                    return "rounded-l-lg bg-slate-800"
                else
                    return "rounded-full bg-slate-800"
            }
        }
        return null
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                {activeDate.toLocaleString('default', { year: 'numeric', month: 'long' })}
                <div className={'flex flex-row'}>
                    <button className={"bg-slate-900"} onClick={dateBackward}>left</button>
                    <Calendar
                        showNavigation={false}
                        activeStartDate={activeDate}
                        tileClassName={({date, view}) => DayStyling(date, view)}
                        showNeighboringMonth={false}
                        showFixedNumberOfWeeks={false}
                        maxDetail={"month"}
                    />
                    <button className={"bg-slate-900"} onClick={dateForward}>right</button>
                </div>
                {eventsInMonth.map((e) =>
                    <div>
                        <div>{e.name} <span className={'text-sm text-slate-500'}>{e.location}</span></div>
                        <span className={'text-sm text-slate-700'}>
                            <span className={'mr-1'}>{e.begin_date.toLocaleDateString('default', {day: 'numeric'})}</span>
                            <span className={'mr-1'}>{e.begin_date.toLocaleTimeString('default', { hour: 'numeric', minute: 'numeric'})}</span>
                            <span className={'mr-1'}>-</span>
                            <span className={'mr-1'}>{e.end_date.toLocaleDateString('default', {day: 'numeric'})}</span>
                            <span className={'mr-1'}>{e.end_date.toLocaleTimeString('default', {hour: 'numeric', minute: 'numeric'})}</span>
                        </span>
                        <div>{e.description}</div>
                    </div>)
                }

            </div>
        </main>
    );
}


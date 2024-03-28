'use client';
import {useContext, useState} from "react";
import Calendar from "react-calendar";
import "../globals.css"
import {EventCard} from "@/app/event/event";
import {EventContext, NewsContext} from "@/app/libs/context";


export default function Calender() {
    const [activeDate, setActiveDate] = useState(new Date());
    const [events, setEvents] = useContext(EventContext)
    const [news, setNews] = useContext(NewsContext)
    console.log(news)
    let eventsInMonth = []
    if(events !== undefined) {
        for (let e of events) {
            if (e.begin_date.getFullYear() >= activeDate.getFullYear() && e.end_date.getFullYear() <= activeDate.getFullYear() &&
                e.begin_date.getMonth() >= activeDate.getMonth() && e.end_date.getMonth() <= activeDate.getMonth()) {
                eventsInMonth[eventsInMonth.length] = e
            }
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
        if(events === undefined)  return false
        for (let e of eventsInMonth) {
            if(dateWithinRange(date, e.begin_date, e.end_date)) {
                let yesterday = new Date(date.getTime());
                yesterday.setDate(date.getDate() - 1);
                let wasY = false;
                for (const e2 of eventsInMonth) {
                    if (dateWithinRange(yesterday, e2.begin_date, e2.end_date)) {
                        wasY = true
                        break;
                    }
                }

                let tomorrow = new Date(date.getTime());
                tomorrow.setDate(date.getDate() + 1);

                let wasT = false;
                for (const e2 of eventsInMonth) {
                    if (dateWithinRange(tomorrow, e2.begin_date, e2.end_date)) {
                        wasT = true
                        break;
                    }
                }
                if(wasY && wasT)
                    return "bg-slate-800"
                else if(wasY)
                    return "rounded-r-lg bg-slate-800"
                else if(wasT)
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
                <div className={"flex-col items-center"}>{eventsInMonth.map((e) => {return <tr key={e.id}><EventCard className={'flex-1'} event={e} showFullDate={false}/></tr>} )}</div>
            </div>
        </main>
    );
}


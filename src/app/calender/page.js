'use client';
import {useState} from "react";
import Calendar, {MonthView} from "react-calendar";
import "../globals.css"

export default function Calender() {
    const [events, setEvents] = useState([
        new event(1, 'event 1', new Date(2024, 1, 1, 11), new Date(2024, 1, 3, 14, 30), null, 'description', 'catagory', 'location'),
        new event(2, 'event 2', new Date(2024, 1, 24, 11), new Date(2024, 1, 25, 14, 30), null, 'description', 'catagory', 'location'),
        new event(1, 'event 3', new Date(2024, 2, 7, 11), new Date(2024, 2, 7, 14, 30), null, 'description', 'catagory', 'location'),
        new event(2, 'event 4', new Date(2024, 2, 20, 11), new Date(2024, 2, 20, 14, 30), null, 'description', 'catagory', 'location')]);

    const [activeDate, setActiveDate] = useState(new Date());

    let eventsInMonth = []

    console.log(activeDate)
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

class event {
    id;
    name;
    begin_date;
    end_date;
    time;
    description;
    category;
    location;
    price;
    constructor(id, name, begin_date, end_date, time, description, category, location, price) {
        this.id = id;
        this.name = name;
        this.begin_date = begin_date;
        this.end_date = end_date;
        this.time = time;
        this.description = description;
        this.category = category;
        this.location = location;
        this.price = price;
    }
}

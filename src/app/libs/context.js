'use client';
import React, {createContext, useContext, useEffect} from "react";
import { event } from "@/app/components/event";

export const EventContext = createContext();
export default function Context({children}) {
    const [events, setEvents] = React.useState()
    useEffect(() => {
        fetch('http://lands-events-laravel.test/api/events')
            .then((res) => res.json())
            .then((data) => {
                let newEvents = []
                for (const d of data) {
                    newEvents[newEvents.length] = new event(d.id, d.name, new Date(d.begin_date), new Date(d.end_date), d.description, d.category, d.location, d.price)
                }

                setEvents(newEvents)
            })
    }, []);

    return(
        <EventContext.Provider value={[events, setEvents]}>
            {children}
        </EventContext.Provider>
    )
}
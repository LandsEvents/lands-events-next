'use client';
import React, {createContext, useContext, useEffect} from "react";
import { event } from "@/app/components/event";
import { news } from "@/app/components/news";

export const EventContext = createContext();
export default function Context({children}) {
    const [events, setEvents] = React.useState()
    const [news, setNews] = React.useState()
    const [hasLoaded, setLoaded] = React.useState(0)
    useEffect(() => {
        fetch('http://lands-events-laravel.test/api/events')
            .then((res) => res.json())
            .then((data) => {
                let newEvents = []
                for (const d of data) {
                    newEvents[newEvents.length] = new event(d.id, d.name, new Date(d.begin_date), new Date(d.end_date), d.description, d.category, d.location, d.price)
                }
                setLoaded(true);
                console.log(data)
                setEvents(newEvents)
            }).catch((reason) => {
            setLoaded(hasLoaded+1);
        });

        fetch('http://lands-events-laravel.test/api/news')
            .then((res) => res.json())
            .then((data) => {
                let newNews = []
                for (const d of data) {
                    newNews[newNews.length] = new news(d.id, d.name, d.body, d.event_id)
                }
                setLoaded(true);
                console.log(data)
                setNews(newNews)
            }).catch((reason) => {
            setLoaded(hasLoaded+1);
        })
    }, []);

    if(hasLoaded < 2) {
        return (
            <div>
                loading...
            </div>
        )
    }

    return(
        <EventContext.Provider value={[events, setEvents, news, setNews]}>
            {children}
        </EventContext.Provider>
    )
}
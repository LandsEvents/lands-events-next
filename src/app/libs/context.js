'use client';
import React, {createContext, useContext, useEffect} from "react";
import { event } from "@/app/event/event";
import { nieuws } from "@/app/nieuws/nieuws";
import nextConfig from "../../../next.config.mjs";

export const EventContext = createContext();
export const NewsContext = createContext();
export default function Context({children}) {
    const [events, setEvents] = React.useState([])
    const [news, setNews] = React.useState([])
    const [hasLoaded, setLoaded] = React.useState(0)
    useEffect(() => {
        fetch(nextConfig.server + '/api/events')
            .then((res) => res.json())
            .then((data) => {
                let newEvents = []
                for (const d of data) {
                    newEvents[newEvents.length] = new event(d.id, d.name, new Date(d.begin_date), new Date(d.end_date), d.description, d.category, d.location, d.price, d.image)
                }
                setLoaded(true);
                setEvents(newEvents)
            }).catch((reason) => {
            setLoaded(hasLoaded+1);
        });

        fetch(nextConfig.server + '/api/news')
            .then((res) => res.json())
            .then((data) => {
                let newNews = []
                for (const d of data) {
                    newNews[newNews.length] = new nieuws(d.id, d.news_title, d.body, d.event_id, d.created_at, d.updated_at)
                }
                setLoaded(true);
                setNews(newNews)
            }).catch((reason) => {
            setLoaded(hasLoaded+1);
        })
    }, []);

    if(!hasLoaded) {
        return (
            <div>
                loading...
            </div>
        )
    }
    return(
        <EventContext.Provider value={[events, setEvents]}>
            <NewsContext.Provider value={[news, setNews]}>
                {children}
            </NewsContext.Provider>
        </EventContext.Provider>
    )
}
'use client'
import Link from "next/link";

export class nieuws {
    id;
    title;
    body;
    eventId;
    constructor(id, title, body, eventId) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.eventId = eventId;
    }
}

export function NewsCard({nieuws}) {

    return (
        <div>
            {nieuws.id} <br/>
            {nieuws.title} <br/>
            {nieuws.body} <br/>
            {nieuws.eventId} <br/>
        </div>
    )
}

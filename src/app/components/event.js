import Link from "next/link";

export class event {
    id;
    name;
    begin_date;
    end_date;
    description;
    category;
    location;
    price;

    constructor(id, name, begin_date, end_date, description, category, location, price) {
        this.id = id;
        this.name = name;
        this.begin_date = begin_date;
        this.end_date = end_date;
        this.description = description;
        this.category = category;
        this.location = location;
        this.price = price;
    }
}

export function EventCard({event, showFullDate}) {

    function sameDay(a,b) {
        return a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate()
    }

    let begin_date;
    let end_date;

    if(showFullDate) {
        begin_date = event.begin_date.toISOString().substring(0, 10)
        if(!sameDay(event.begin_date, event.end_date)) {
            end_date = event.end_date.toISOString().substring(0, 10)
        }
    } else {
        begin_date = event.begin_date.toLocaleDateString('default', {day: 'numeric'})
        if(!sameDay(event.begin_date, event.end_date)) {
            end_date = event.end_date.toLocaleDateString('default', {day: 'numeric'})
        }
    }

    return (
        <div>
            <div>
                <Link href={"/event/" + event.id}>{event.name}</Link>
                <br/>
                <span className={'text-sm text-slate-500'}>{event.location}</span>
                <span className={'text-sm text-slate-600 ml-1'}>{event.category}</span>
            </div>
            <span className={'text-sm text-slate-700'}>
                                {begin_date} <span className={'mr-1'}/>
                {event.begin_date.toLocaleTimeString('default', {
                    hour: 'numeric',
                    minute: 'numeric'
                })}
                <span className={'mr-1'}/>
                - {end_date} {sameDay(event.begin_date, event.end_date) ? null : <span className={'mr-1'}/>}
                {event.end_date.toLocaleTimeString('default', {
                    hour: 'numeric',
                    minute: 'numeric'
                })}
            </span>
            <div className={"max-w-xl"}>{event.description}</div>
        </div>
    )
}

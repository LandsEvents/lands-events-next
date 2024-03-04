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
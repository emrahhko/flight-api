import { v4 as Id } from "uuid";

const flights =
 [
    {
        id : Id(),
        from : 'Brussels',
        to :  'New York',
        date : '2022-07-09',
        price : '999',
        company : 'Sabena'
    },
    {
        id : Id(),
        from : 'Milan',
        to :  'Jakarta',
        date : '2020-09-11',
        price : '1999',
        company : 'Turksih Airlines'
    },
    {
        id : Id(),
        from : 'Trabzon',
        to :  'Auckland',
        date : '2023-07-11',
        price : '2999',
        company : 'Sabena'
    }
];

class Flight {
    static getAll() {
        return flights;
    }

    static getById(id) {
        return flights.find((flight) => flight.id === id);
    }

    static add(flight) {
        const newFlight = {
            id: Id(),
            ...flight
        };
        flights.unshift(newFlight);
        return newFlight;
    }

    static update(id, flight) {
        const updatedFlight = Flight.getById(id);
        if (updatedFlight) {
            updatedFlight.from = flight.from;
            updatedFlight.to = flight.to;
            updatedFlight.date = flight.date;
            updatedFlight.price = flight.price;
            updatedFlight.company = flight.company;
        }
    }

    static delete(id) {
        const index = flight.findIndex((flight) => flight.id === id);
        flight.splice(index, 1);
        return {id};
    }
}

export default Flight;
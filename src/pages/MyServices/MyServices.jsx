
import { useEffect, useState } from "react";
import TableCart from "./TableCart";



const MyServices = () => {
    const [services, setServices] = useState([]);
    console.log(services)
    const url = 'http://localhost:5000/product';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [url])


    return (
        <div className="overflow-x-auto">
            <h1>Bookings : {services.length}</h1>
            <div>
                {
                    services.map(booking => <TableCart
                        key={booking._id}
                        booking={booking}
                    ></TableCart>)
                }
            </div>
        </div>
    );
};

export default MyServices;
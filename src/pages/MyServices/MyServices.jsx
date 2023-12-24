
import { useState } from "react";
import TableCart from "./TableCart";
import { useLoaderData } from "react-router-dom";



const MyServices = () => {
    const service = useLoaderData();
    const [services, setServices] = useState(service);
    console.log('sur', services)
    // const url = 'https://b8a11-server-side-bdjahid.vercel.app/product';
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [url])


    return (
        <div className="overflow-x-auto">
            <h1>Bookings : {services.length}</h1>
            <div>
                {
                    services.map(booking => <TableCart
                        key={booking._id}
                        booking={booking}
                        services={services}
                        setServices={setServices}
                    ></TableCart>)
                }
            </div>
        </div>
    );
};

export default MyServices;
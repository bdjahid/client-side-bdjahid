
import { useContext, useEffect, useState } from "react";
import TableCart from "./TableCart";
import { AuthContext } from "../../provider/AuthProvider";




const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    console.log('sur', services)
    const url = `http://localhost:5000/product?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [url])


    return (
        <div className="overflow-x-auto">
            <h1>Add services : {services.length}</h1>
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
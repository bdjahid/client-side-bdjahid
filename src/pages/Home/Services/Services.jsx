import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet-async";



const Services = () => {
    const [dataLength, setDataLength] = useState(6)
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="my-10">
            <Helmet>
                <title>Tours and Guide Agency | Services</title>
            </Helmet>
            <h2 className="text-4xl text-fuchsia-600 font-bold text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {
                    services.slice(0, dataLength).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className={dataLength === services.length ? 'hidden' : ''}>
                <div className="text-center my-8">
                    <button onClick={() => setDataLength(services.length)} className="btn btn-info">Show all services</button>
                </div>
            </div>
        </div>
    );
};

export default Services;
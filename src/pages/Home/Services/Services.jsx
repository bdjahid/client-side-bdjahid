import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet-async";
import Product from './Product';
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CardService from "./CardService";






const Services = () => {
    const products = useLoaderData();
    console.log(products)
    const [dataLength, setDataLength] = useState(6)
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://b8a11-server-side-bdjahid.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const [searchResults, setSearchResults] = useState([]);


    const handleSearch = async (event) => {
        event.preventDefault();
        const form = event.target;
        const item = form.search.value;
        console.log(item)

        let result = await axios.get(`https://b8a11-server-side-bdjahid.vercel.app/services/${item}`)

        result = await result.json()

        if (result) {
            setServices(result)
        }
    }
    return (
        <div className="my-10">
            <Helmet>
                <title>Tours and Guide Agency | Services</title>
            </Helmet>
            <form onSubmit={handleSearch}>
                <div className="flex justify-center">
                    <div className="join">
                        <input name="search" type="text" placeholder="search ....." className="input input-bordered join-item" />
                        <button className="btn btn-info join-item">Search</button>
                    </div>
                </div>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ms-14 md:ms-0">
                {
                    searchResults.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>

            <h2 className="text-4xl text-fuchsia-600 font-bold text-center my-10">Our Services</h2>
            <div>
                {
                    services.slice(0, dataLength).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div>
                {
                    products.map(product => <CardService
                        key={product._id}
                        product={product}
                    ></CardService>)
                }
            </div>
            <div className={dataLength === services.length ? 'hidden' : ''}>
                <div className="text-center mb-20">
                    <button onClick={() => setDataLength(services.length)} className="btn btn-info">Show all services</button>
                </div>
            </div>
        </div>
    );
};

export default Services;
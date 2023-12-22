import { Button } from "flowbite-react";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Tour from "../../Home/Tour/Tour"
import Acordion from "../Acordion/Acordion";
import { Link, useLoaderData } from "react-router-dom";
import Card from "./Card";


const Home = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <Helmet>
                <title>Tours and Guide Agency | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {
                    services.slice(0, 6).map(service => <Card
                        key={service._id}
                        service={service}
                    ></Card>)
                }
            </div>
            <Link to="/services">
                <div className="flex justify-center my-5">
                    <Button gradientMonochrome="info">Show All Service</Button>
                </div>
            </Link>
            <About></About>
            <Tour></Tour>
            <Acordion></Acordion>
        </div>
    );
};

export default Home;
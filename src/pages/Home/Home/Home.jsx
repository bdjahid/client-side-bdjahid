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
            <div>
                <h2 className="text-4xl text-fuchsia-600 font-bold text-center my-10">Our Services</h2>
                <p className="text-center mx-32">Discover the world with Our Services tours agency! Embark on unforgettable adventures curated just for you. From breathtaking landscapes to cultural escapades, our expertly crafted tours ensure an immersive and seamless experience. Let us take you on a journey of discovery and create memories that last a lifetime.</p>
            </div>
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
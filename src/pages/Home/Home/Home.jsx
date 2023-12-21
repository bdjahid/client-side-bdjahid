import { Button } from "flowbite-react";
import Banner from "../Banner/Banner";

import Services from "../Services/Services";
import About from "./About/About";
import Acordion from "./Acordion/Acordion";
import Tour from "./Tour/Tour";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>

            <div className="flex justify-center my-5">
                <Button gradientMonochrome="info">Show All Service</Button>
            </div>
            <About></About>
            <Tour></Tour>
            <Acordion></Acordion>
        </div>
    );
};

export default Home;
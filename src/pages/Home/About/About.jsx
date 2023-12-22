
import img from '../../../../public/img4.jpg'


const About = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="rounded-lg shadow-2xl w-3/4" />
                <div>
                    <h1 className="text-5xl font-bold">About Us!</h1>
                    <p className="py-6 w-96">Voyage Vista: Where Journeys Begin!
                        Embark on unforgettable escapades with Voyage Vista, your premier travel companion. Discover tailored adventures across captivating destinations worldwide. Our dedicated experts curate personalized itineraries, ensuring every journey reflects your desires. Immerse yourself in cultural odysseys, unwind at luxurious retreats, or seek adrenaline-fueled escapades—all with seamless precision. Trust our commitment to excellence, from meticulous planning to unparalleled on-ground support. Experience hassle-free travel, enriched by our global network of accommodations and experiences. Join us at Voyage Vista, where exploration meets luxury, crafting timeless memories one voyage at a time. Your adventure awaitslets redefine travel together!</p>

                </div>
            </div>
        </div>
    );
};

export default About;
import img from '../../../../assets/3376728.png'
import img1 from '../../../../assets/4586974.png'
import img2 from '../../../../assets/7131204.png'
import img3 from '../../../../assets/vector-illustration-modern-single-isolated-260nw-58413604.webp'
import img4 from '../../../../assets/images.jpeg'
import img5 from '../../../../assets/pngtree-travel-agency-line-icon-vector-png-image_6696786.png'
import img6 from '../../../../assets/pngtree-website-travel-agency-icon-flight-airliner-minute-vector-png-image_16096976.png'
import img7 from '../../../../assets/travel-agency-5913786-4974047.webp'
import img8 from '../../../../assets/vector-illustration-modern-single-isolated-260nw-58413604.webp'
import image from '../../../../assets/hotel.jpg'
const Tour = () => {
    return (
        <div>
            <div>
                <img className='' src={image} alt="" />
            </div>
            <div>
                <p className=' mx-10 text-center text-3xl font-bold'>
                    A travel agency serves as a guiding compass in the world of travel, expertly navigating the vast terrain of destinations, accommodations, and experiences. These agencies curate bespoke adventures, meticulously arranging flights, accommodations, and activities, tailored to individual desires and budgets. Their expertise transforms dreams into seamless itineraries, armed with insider knowledge and access to exclusive deals. By providing personalized recommendations and handling logistical details, they alleviate the complexities of trip planning, ensuring each journey is a tapestry of unforgettable moments. From exotic getaways to cultural explorations, travel agencies serve as the gateway to a world brimming with discovery and exploration.
                </p>
            </div>
            <div className='grid grid-cols-3 mx-96 my-10 py-20'>
                <img className='w-32 h-32 mb-5 btn btn-while bg-while-400 hover' src={img} />
                <img className='w-32 h-32 mb-5 btn btn-while bg-while-400 hover' src={img1} />
                <img className='w-32 h-32 mb-5 btn btn-while bg-while-400 hover' src={img3} />
                <img className='w-32 mb-5 h-32 btn btn-while bg-while-400 hover' src={img4} />
                <img className='w-32 h-32 mb-5 btn btn-while bg-while-400 hover' src={img5} />
                <img className='w-32 h-32 mb-5 btn btn-while bg-while-400 hover' src={img6} />
                <img className='w-32 h-32 mb-5 btn btn-while bg-while-400 hover' src={img7} />
                <img className='w-32 h-32 mb-5 btn btn-while bg-while-400 hover' src={img8} />
                <img className='w-32 h-32 mb-5 btn btn-while bg-while-400 hover' src={img2} />
            </div>
        </div>
    );
};

export default Tour;
import { Carousel } from "flowbite-react";
import img1 from '../../../../public/ima2.jpeg'
import img2 from '../../../../public/img1.jpeg'
import img3 from '../../../../public/img3.jpg'
import img4 from '../../../../public/img4.jpeg'
import img5 from '../../../../public/img5.jpg'



const Banner = () => {
    return (
        <div className="h-96 sm:h-96 xl:h-96 2xl:h-96">
            <Carousel>
                <img src={img1} alt="..." />
                <img src=
                    {img2} alt="..." />
                <img src={img3} alt="..." />
                <img src=
                    {img4} alt="..." />
                <img src={img5} alt="..." />
            </Carousel>
        </div>
    );
};

export default Banner;
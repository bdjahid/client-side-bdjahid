import { Carousel } from "flowbite-react";
import img1 from '../../../../public/304-Clothes-Swap-banner.png'
import img2 from '../../../../public/img3.jpeg'
import img3 from '../../../../public/images.jpeg'
import img4 from '../../../../public/imags.jpeg'
import img5 from '../../../../public/img2.jpeg'



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
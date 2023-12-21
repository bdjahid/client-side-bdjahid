import { AvatarGroup } from "flowbite-react";




const ServiceCard = ({ service }) => {
    const { service_name, img, price, description, name, image, area } = service
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p>Price : ${price}</p>
                <p>{description}</p>
                <div className="text-center">
                    <p>{name}</p>
                    <p>{area}</p>
                    <div className="avatar mt-4">
                        <div className="w-24 rounded-full">
                            <img src={image} />
                        </div>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-info">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
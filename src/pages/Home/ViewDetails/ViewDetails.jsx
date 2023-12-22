import { Link, useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const services = useLoaderData();
    console.log(services)
    console.log(services.service_name)
    const { _id, service_name, img, price, description, name, image, area } = services
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mx-20 my-10">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body w-2/4">
                <h2 className="card-title">{service_name}</h2>
                <p>{area}</p>
                <p>${price}</p>
                <p>{name}</p>
                <img className="w-20" src={image} alt="" />
                <p>{description}</p>
                <Link to={`/booking/${_id}`}>
                    <div className="card-actions justify-end">
                        <button className="btn btn-info">Booking Now</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ViewDetails;
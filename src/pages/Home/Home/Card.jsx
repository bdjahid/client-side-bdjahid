import { Link } from "react-router-dom";


const Card = ({ service }) => {
    const { _id, service_name, img, price, description, name, image } = service
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className="h-96 rounded-lg" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p>Price : ${price}</p>
                <p>{description}</p>
                <div className="text-center">
                    <p>{name}</p>
                    <div className="avatar mt-4">
                        <div className="w-24 rounded-full">
                            <img src={image} />
                        </div>
                    </div>
                </div>
                <Link to={`/services/${_id}`}>
                    <div className="card-actions justify-end">
                        <button className="btn btn-info">View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Card;




const ServiceCard = ({ service }) => {
    const { service_name, img, price, description, name, image } = service
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p>{price}</p>
                <p>{description}</p>
                <p>{name}</p>
                <p>{image}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
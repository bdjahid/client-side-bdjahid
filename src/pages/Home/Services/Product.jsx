
const Product = ({ product }) => {
    const { img, service_name } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h1>{service_name}</h1>
            </div>
        </div>
    );
};

export default Product;
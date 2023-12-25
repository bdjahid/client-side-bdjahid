import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableCart = ({ booking, services, setServices }) => {
    const { _id, area, description, photo, price, service } = booking
    console.log(booking.service)
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b8a11-server-side-bdjahid.vercel.app/product/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success"
                            });
                            const remaining = services.filter(product => product._id !== _id)
                            setServices(remaining)
                        }
                    })
            }
        });
    }
    // const handleUpdate = (id) => {

    // }

    return (
        <div className="card card-side bg-base-100 shadow-xl mx-40 mb-10">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service}</h2>
                <p>${price}</p>
                <p>Location : {area}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">DELETE</button>
                    <Link to={`/update/${_id}`}>
                        <button className="btn btn-primary">UPDATE</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TableCart;
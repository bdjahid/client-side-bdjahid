import Swal from "sweetalert2";

const TableCart = ({ booking }) => {
    const { _id, service, photo, } = booking
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
                fetch(`http://localhost:5000/product/${_id}`, {
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
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">DELETE</button>
                    <button className="btn btn-primary">UPDATE</button>
                </div>
            </div>
        </div>
    );
};

export default TableCart;
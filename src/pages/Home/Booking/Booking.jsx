import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Booking = () => {

    const services = useLoaderData();
    const { _id, service_name, img, price } = services
    const { user } = useContext(AuthContext);

    const handleBookService = e => {
        e.preventDefault();


        const form = e.target;
        const service = form.service.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            service,
            email,
            img,
            date,
            services_id: _id,
            price: price
        }
        console.log(order)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service book successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })

    }

    return (
        <div className="my-9 mx-5">
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name="service" defaultValue={service_name} placeholder="service_name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Image</span>
                        </label>
                        <input type="text" name="photo" defaultValue={img} placeholder="img" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="email" className="input input-bordered" disabled required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" disabled required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$ ' + price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control my-5">
                    <label className="label">
                        <span className="label-text">Instruction</span>
                    </label>
                    <textarea className="input input-bordered" type="text" name="instruction" id="" cols="2" rows="2" required></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Purchase Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Booking;
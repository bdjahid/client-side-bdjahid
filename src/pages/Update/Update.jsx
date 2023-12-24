
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useLoaderData } from 'react-router-dom';


const Update = () => {
    const services = useLoaderData();
    // console.log(services)
    const { _id, area, description, photo, price, service } = services
    const handleAddServiceUpdate = e => {
        e.preventDefault()
        const from = e.target;
        const photo = from.photo.value;
        const service = from.service.value;
        const price = from.price.value;
        const area = from.area.value;
        const description = from.description.value;

        const updateService = { photo, service, price, area, description };
        console.log(updateService)


        fetch(`https://b8a11-server-side-bdjahid.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service Update successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })


    }
    return (
        <div className="my-10 mx-5">
            <Helmet>
                <title>Tours and Guide Agency | UPDATE</title>
            </Helmet>
            <h2 className="text-5xl font-extrabold">Service Update</h2>
            <form onSubmit={handleAddServiceUpdate} className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name="service" defaultValue={service} placeholder="Enter service name" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Service Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="Enter Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Service Location</span>
                        </label>
                        <input type="text" name="area" defaultValue={area} placeholder="area" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text">Service Description</span>
                    </label>
                    <input type="text" name="description" defaultValue={description} placeholder="Enter description" className="input input-bordered w-full" required />
                </div>
                <button className="btn w-full mt-2">ADD A SERVICE</button>
            </form>
        </div>
    );
};

export default Update;
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";



const AddService = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const handleAddService = e => {
        e.preventDefault()
        console.log('click')
        const from = e.target;
        const photo = from.photo.value;
        const service = from.service.value;
        const name = from.name.value;
        const email = from.email.value;
        const price = from.price.value;
        const area = from.area.value;
        const description = from.description.value;

        const newService = { photo, service, name, email, price, area, description };
        console.log(newService)


    }
    return (
        <div className="my-10 mx-5">
            <Helmet>
                <title>Tours and Guide Agency | Add Service</title>
            </Helmet>
            <h2 className="text-5xl font-extrabold">Add a Car</h2>
            <form onSubmit={handleAddService} className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name="service" placeholder="Enter service name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input defaultValue={user?.displayName
                        } type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input defaultValue={user?.email} type="text" name="email" placeholder="Enter email name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Enter Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Area</span>
                        </label>
                        <input type="text" name="area" placeholder="area" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name="description" placeholder="Enter description" className="input input-bordered w-full" required />
                </div>
                <button className="btn w-full mt-2">ADD A SERVICE</button>
            </form>
        </div>
    );
};

export default AddService;
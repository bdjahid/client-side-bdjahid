import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import TableRow from "./TableRow";
import axios from "axios";


const MySchedules = () => {
    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState([]);

    const url = `https://b8a11-server-side-bdjahid.vercel.app/bookings?email=${user?.email}`;
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setBooks(data))
    // }, [url])
    axios.get(url, { withCredentials: true })
        .then(res => {
            setBooks(res.data)
        })

    return (
        <div className="overflow-x-auto">
            <h1 className="text-5xl">My Bookings : {books.length}</h1>
            <table className="table">
                {/* head */}
                <thead>
                    {/* <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                    </th> */}
                    <tr>
                        <th>Image</th>
                        <th>Service Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => <TableRow
                            key={book._id}
                            book={book}
                        ></TableRow>)
                    }
                </tbody>
            </table>
            <div>
                <h1 className="text-5xl my-4">My pending</h1>

            </div>
        </div>
    );
};

export default MySchedules;
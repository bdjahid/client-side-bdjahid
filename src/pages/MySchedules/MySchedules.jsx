import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import TableRow from "./TableRow";


const MySchedules = () => {
    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [url])

    return (
        <div className="overflow-x-auto">
            <h1>Bookings : {books.length}</h1>
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
        </div>
    );
};

export default MySchedules;
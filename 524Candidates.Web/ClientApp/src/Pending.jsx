import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Pending = () => {

    const [people, setPeople] = useState([]);


    useEffect(() => {
        const getPending = async() => {
            const { data } = await axios.get('/api/candidates/getall?status=pending');
            setPeople(data);
        }
        getPending();
    }, [])

    return (<div className="container" style={{ marginTop: 80 }}>
        <table className="table table-hover table-striped table-bordered">
            <thead>
                <tr>
                    <th />
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                    {people.map(p => (
                        <tr key={p.id}>
                            <td>
                                <Link to={`/viewDetails/${p.id}`}>
                                    View Details
                                </Link>
                            </td>
                            <td>{p.firstName}</td>
                            <td>{p.lastName}</td>
                            <td>{p.phoneNumber}</td>
                            <td>{p.email}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
)
}

export default Pending;
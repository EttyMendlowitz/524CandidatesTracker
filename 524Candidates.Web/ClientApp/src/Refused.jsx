import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Refused = () => {

    const [people, setPeople] = useState([]);
    const [viewNotes, setViewNotes] = useState(true);


    useEffect(() => {
        const getRefused = async () => {
            const { data } = await axios.get('/api/candidates/getall?status=refused');
            setPeople(data);
        }
        getRefused();
    }, [])

    const onToggleClick = () => {
        setViewNotes(!viewNotes);
    }

    return (<div className="container" style={{ marginTop: 80 }}>
        <div>
            <h1>Refused</h1>
            <div>
                <button className="btn btn-success" onClick={onToggleClick}>Toggle Notes</button>
                <table className="table table-hover table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            {viewNotes ? <th>Notes</th> : null}
                        </tr>
                    </thead>
                    <tbody>
                        {people.map(p => (
                            <tr key={p.id}>
                                <td>{p.firstName}</td>
                                <td>{p.lastName}</td>
                                <td>{p.phoneNumber}</td>
                                <td>{p.email}</td>
                                {viewNotes ? <td>{p.notes}</td> : null}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    )
}

export default Refused;
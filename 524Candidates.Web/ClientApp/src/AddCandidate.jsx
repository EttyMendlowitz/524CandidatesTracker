import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCandidateCount } from './CandidateCountContext';

const AddCandidate = () => {

    const navigate = useNavigate();
    const { refreshCandidateCount } = useCandidateCount();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notes, setNotes] = useState('');

    const onSubmitClick = async() => {
        await axios.post('/api/candidates/add', { firstName, lastName, email, phoneNumber, notes, RegistrationStatus: 'Pending'});
        await refreshCandidateCount();
        navigate('/')
        
    }


    return (<div className="container" style={{ marginTop: 80 }}>
        <div className="row" style={{ marginTop: 20 }}>
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Add Candidate</h4>
                    <input
                        value={firstName}
                        onChange={e => setFirstName(e.target.value) }
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="form-control"
                    />
                    <br />
                    <input
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="form-control"
                    />
                    <br />
                    <input
                        onChange={e => setEmail(e.target.value) }
                        value={email }
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                    />
                    <br />
                    <input
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value) }
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="form-control"
                    />
                    <br />
                    <textarea
                        onChange={e => setNotes(e.target.value)}
                        rows={5}
                        className="form-control"
                        name="notes"
                        defaultValue={notes}
                    />
                    <br />
                    <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddCandidate;
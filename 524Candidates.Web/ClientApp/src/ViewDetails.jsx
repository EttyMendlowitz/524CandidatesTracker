import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCandidateCount } from './CandidateCountContext';

const ViewDetails = () => {
    const { id } = useParams();
    const [candidate, setCandidate] = useState({});
    const [isPending, setIsPending] = useState(true);
    const { refreshCandidateCount } = useCandidateCount();
    const navigate = useNavigate();

    useEffect(() => {
        const getCandidate = async () => {
            const { data } = await axios.get(`/api/candidates/getbyid?id=${id}`);
            setCandidate(data);
        }
        getCandidate();
    }, [])

    const onRefuseClick = async () => {
        const { data } = await axios.post('/api/candidates/changestatus', { id, status: 'Refused' });
        setCandidate(data);
        setIsPending(false);
        await refreshCandidateCount();;

    }

    const onConfirmClick = async () => {
        const { data } = await axios.post('/api/candidates/changestatus', { id, status: 'Confirmed' });
        setCandidate(data);
        setIsPending(false);
        await refreshCandidateCount();

    }

    return (<div className="container" style={{ marginTop: 80 }}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Name: {candidate.firstName} {candidate.lastName }</h4>
                    <h4>Email: {candidate.email }</h4>
                    <h4>Phone: {candidate.phoneNumber }</h4>
                    <h4>Status: {candidate.registrationStatus }</h4>
                    <h4>Notes: </h4>
                    <p>{candidate.notes }</p>

                    {isPending? <div>
                        <button className="btn btn-primary" onClick={onConfirmClick}>Confirm</button>
                        <button className="btn btn-danger" onClick={onRefuseClick}>Refuse</button>
                    </div> : null}
                   
                </div>

            </div>
        </div>
    </div>
)
}

export default ViewDetails;
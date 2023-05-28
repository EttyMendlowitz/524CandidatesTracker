import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const CandidateCountContext = createContext();

const CandidateCountContextComponent = ({ children }) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [refusedCount, setRefusedCount] = useState(0);


    const refreshCandidateCount = async () => {
        const pending = await axios.get('/api/candidates/getcount?status=Pending')
        setPendingCount(pending.data);
        const confirmed = await axios.get('/api/candidates/getcount?status=Confirmed')
        setConfirmedCount(confirmed.data);
        const refused = await axios.get('/api/candidates/getcount?status=Refused')
        setRefusedCount(refused.data);
    }

    useEffect(() => {
        refreshCandidateCount();
    }, [])

    return (
        <CandidateCountContext.Provider value={{ pendingCount, confirmedCount, refusedCount, refreshCandidateCount }}>
            {children}
        </CandidateCountContext.Provider>)
}

const useCandidateCount = () => {
    return useContext(CandidateCountContext);
}

export { CandidateCountContextComponent, useCandidateCount };
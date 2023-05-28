import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './Layout';
import AddCandidate from './AddCandidate';
import Pending from './Pending';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { CandidateCountContextComponent } from './CandidateCountContext';
import Confirmed from './Confirmed';
import Refused from './Refused';
import ViewDetails from './ViewDetails'

const App = () => {
    return (
        <CandidateCountContextComponent>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/addCandidate' element={<AddCandidate />} />
                    <Route exact path='/pending' element={<Pending />} />
                    <Route exact path='/confirmed' element={<Confirmed />} />
                    <Route exact path='/refused' element={<Refused />} />
                    <Route exact path='/viewDetails/:id' element={<ViewDetails />} />

                </Routes>
            </Layout>
        </CandidateCountContextComponent>
    )


}
export default App;
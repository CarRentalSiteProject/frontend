import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import MenuView from './MenuView';

function useQuery() { // get params from main page
    return new URLSearchParams(useLocation().search);
}

function Search() {
    const query = useQuery();
    const startPlace = query.get(`place`);
    const startDate = query.get(`start`);
    const endDate = query.get(`end`);
    const location = useLocation();
    // since location is not iterable, it should be declare by special way
    const { cars, chplace, chdate, redate } = location.state || {}; // Add fallback to avoid undefined errors

    // const [chplace, setChplace] = useState('');
    // const [chdate, setChdate] = useState('');
    // const [redate, setRedate] = useState('');
    // const navigate = useNavigate();

    // useEffect(() => {
    //     // send params to the backend when the component mounts
    //     const postSearchData = async () => {
    //         try {
    //             const response = await axios.post('http://localhost:8080/carrent/searchPlace', {
    //                 chplace,
    //                 chdate,
    //                 redate
    //             });
    //             console.log('API Response:', response.data);
    //         } catch (error) {
    //             console.error('Error searching for cars:', error);
    //         }
    //     };

    //     postSearchData();
    //     }, [chplace, chdate, redate]);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:8080/carrent/searchPlace', {
    //             chplace,
    //             chdate,
    //             redate
    //         });
    //         console.log('API Response:', response.data);
    //         navigate('/search', { state: { cars: response.data, chdate, redate } });
    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //     }
    // };

    return (
        <div className="wrapper">
            <section className=" pb-5 position-relative pt-5">
                <div className="container-fluid">
                    <div class="row ps-5 pe-5">
                        <div className="col-xl-3 col-lg-5">
                            <p>Searching for cars available from {startDate} to {endDate} at {startPlace}</p>
                            <SideBar startPlace={startPlace} startDate={startDate} endDate={endDate}/>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <MenuView />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Search;
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
    const [chplace, setChPlace] = useState(startPlace || ''); 
    const [chdate, setChDate] = useState(startDate || '');
    const [redate, setReDate] = useState(endDate || '');
    const [cars, setCars] = useState([]);  // State to store fetched car data
    // const navigate = useNavigate();

    console.log("Search,");

    useEffect(() => {
        // send params to the backend when the component mounts
        const postSearchData = async () => {
            try {
                const response = await axios.post('http://localhost:8080/carrent/searchPlace', {
                    chplace,
                    chdate,
                    redate
                });
                console.log('API Response:', response.data);
                setCars(response.data);  // Save the fetched cars data
            } catch (error) {
                console.error('Error searching for cars:', error);
            }
        };
        postSearchData();
        }, [chplace, chdate, redate]);

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
                            <MenuView cars={cars}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Search;
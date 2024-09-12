import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import SideBar from './SideBar';
import MenuView from './MenuView';

function useQuery() { 
    return new URLSearchParams(useLocation().search);
}

function Search() {
    const query = useQuery();
    const startPlace = query.get('place');
    const startDate = query.get('start');
    const endDate = query.get('end');

    const [cars, setCars] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0); // Current page state
    const [totalPages, setTotalPages] = useState(1); // Total pages
    const pageSize = 9; // Page size (can be adjustable)

    const jwtToken = Cookies.get('jwt');

    const searchCars = async (chplace, chdate, redate, page = 0) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`http://localhost:8080/car/queryPage`, {
                chplace,
                chdate,
                redate,
                page,
                size: pageSize
            }, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                },
                withCredentials: true
            });
            setCars(response.data.cars);
            setTotalPages(response.data.totalPages); // Set total pages
        } catch (error) {
            console.error('Error searching for cars:', error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        if (startPlace && startDate && endDate) {
            searchCars(startPlace, startDate, endDate, currentPage);
        }
    }, [startPlace, startDate, endDate, currentPage]);

    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            setCurrentPage(newPage);
        }
    };

    const pages = [];
    for (let i = 0; i < totalPages; i++) {
        pages.push(
            <li className={`page-item ${i === currentPage ? 'active' : ''}`} key={i}>
                <a className="page-link"
                onClick={() => handlePageChange(i)} // Pass the correct page index
                disabled={i === currentPage}>
                    {i + 1} {/* Displaying 1-based page number */}
                </a>
            </li>
        );
    }


    return (
        <div className="wrapper">
            <section className="pb-5 position-relative pt-5">
                <div className="container-fluid">
                    <div className="row ps-5 pe-5">
                        <div className="col-xl-3 col-lg-5">
                            <p>Searching for cars available from {startDate} to {endDate} at {startPlace}</p>
                            <SideBar 
                                startPlace={startPlace} 
                                startDate={startDate} 
                                endDate={endDate}
                                onSearch={searchCars}
                            />
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            {isLoading ? <p>Loading...</p> : <MenuView cars={cars} />}
                            <nav aria-label="Page navigation example">
                                <ul className="pagination d-flex justify-content-center">
                                    <li className="page-item">
                                        <a className="page-link"
                                    onClick={() => handlePageChange(currentPage - 1)} 
                                    disabled={currentPage === 0}>
                                        Previous
                                        </a>
                                    </li>
                                    {pages}
                                    <li className="page-item">
                                        <a className="page-link"
                                    onClick={() => handlePageChange(currentPage + 1)} 
                                    disabled={currentPage + 1 >= totalPages}>
                                        Next
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Search;

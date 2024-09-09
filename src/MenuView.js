import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function MenuView({cars}) {
    const location = useLocation();
    const navigate = useNavigate();
    // since location is not iterable, it should be declare by special way
    const { chplace, chdate, redate } = location.state || {}; // Add fallback to avoid undefined errors
    const [selectedCar, setSelectedCar] = useState('');

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:8080/carrent/order2', {
    //             selectedCar,
    //             chdate,
    //             redate
    //         });
    //         console.log('API Response:', response.data);
    //         // Handle the response, maybe navigate to a confirmation page
    //         navigate('/rentOrder', { state: { carDetail: response.data, chdate, redate } });
    //     } catch (error) {
    //         console.error('Error submitting order:', error);
    //     }
    // };

    var carInfo = [
        {}
    ];

    const listItems = carInfo.map((car) =>
        <li key={car.endpoint}>{car.endpoint}</li> 
    );

    return (
        <div className="container pb-5">
            <h1>Available Cars</h1>
            <form onSubmit>
                {/* <div className="g-4 justify-content-center mt-2 mb-3 row row-cols-lg-3 row-cols-md-2">
                    {cars && cars.length > 0 ? (
                        cars.map((car) => (
                            <div key={car.Car_ID}>
                                <div className="bg-white border shadow-sm">
                                <img src="https://images.unsplash.com/photo-1554666869-04dafcdc7a48?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQxN3x8Y2FyJTIwc3V2fGVufDB8fHx8MTYzMTY4NTkwNg&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" className="img-fluid w-100" alt={car.CarType} width="600" height="450"/>
                                    <div className="p-4">
                                        <h4 className="fw-bold h5">{car.CarType}</h4>
                                        <p className="small">description</p>
                                        <span className="fw-bold pb-1 pt-1 text-dark">${car.Price}/day</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No cars available.</p>
                    )}
                </div> */}
                <div className="g-4 justify-content-center mt-2 mb-3 row row-cols-lg-3 row-cols-md-2">
                    <div> 
                        <div className="bg-white border shadow-sm"> 
                            <a href="#"><img src="https://images.unsplash.com/photo-1554666869-04dafcdc7a48?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQxN3x8Y2FyJTIwc3V2fGVufDB8fHx8MTYzMTY4NTkwNg&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" className="img-fluid w-100" alt="..." width="600" height="450"/></a>
                            <div className="p-4">
                                <h4 className="fw-bold h5"><a href="" className="link-secondary text-decoration-none">BMW M3 2010</a></h4>
                                <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <hr />
                                <div className="align-items-center d-flex justify-content-between">
                                    <div className="align-items-center d-inline-flex gap-1 pb-1 pt-1">
                                        <span>4.9</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" className="text-primary">
                                            <g>
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <span className="fw-bold pb-1 pt-1 text-dark">$2500/day</span>
                                </div>
                            </div>                                 
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination d-flex justify-content-center">
                        <li class="page-item"><a class="page-link" href="">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="">1</a></li>
                        <li class="page-item"><a class="page-link" href="">Next</a></li>
                    </ul>
                </nav>
            </form>
        </div>
    );
}

export default MenuView;
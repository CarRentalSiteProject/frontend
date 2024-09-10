// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import SideBar from './SideBar';
// import MenuView from './MenuView';

// function useQuery() { // get params from main page
//     return new URLSearchParams(useLocation().search);
// }

// function Search() {
//     const query = useQuery();
//     const startPlace = query.get(`place`);
//     const startDate = query.get(`start`);
//     const endDate = query.get(`end`);

//     // State to store search parameters and fetched car data
//     const [chplace, setChPlace] = useState(startPlace || ''); 
//     const [chdate, setChDate] = useState(startDate || '');
//     const [redate, setReDate] = useState(endDate || '');
//     const [cars, setCars] = useState([]);  // State to store fetched car data
//     // const navigate = useNavigate();

//     console.log("Search,");

//     // Function to handle the search triggered by SideBar.js
//     const handleSearch = async (searchParams) => {
//         const { chPlace, chdate, redate } = searchParams;
//         setChPlace(chPlace);
//         setChDate(chdate);
//         setReDate(redate);

//         try {
//             const response = await axios.post('http://localhost:8080/carrent/searchPlace', {
//                 chplace: chPlace,
//                 chdate,
//                 redate
//             });
//             console.log('API Response:', response.data);
//             setCars(response.data);  // Save the fetched car data
//         } catch (error) {
//             console.error('Error searching for cars:', error);
//         }
//     };

//     // useEffect(() => {
//     //     // send params to the backend when the component mounts
//     //     const postSearchData = async () => {
//     //         try {
//     //             const response = await axios.post('http://localhost:8080/carrent/searchPlace', {
//     //                 chplace,
//     //                 chdate,
//     //                 redate
//     //             });
//     //             console.log('API Response:', response.data);
//     //             setCars(response.data);  // Save the fetched cars data
//     //         } catch (error) {
//     //             console.error('Error searching for cars:', error);
//     //         }
//     //     };
//     //     postSearchData();
//     //     }, [chplace, chdate, redate]);

//     return (
//         <div className="wrapper">
//             <section className=" pb-5 position-relative pt-5">
//                 <div className="container-fluid">
//                     <div class="row ps-5 pe-5">
//                         <div className="col-xl-3 col-lg-5">
//                             <p>Searching for cars available from {startDate} to {endDate} at {startPlace}</p>{/* Pass the handleSearch function to SideBar */}
//                             <SideBar startPlace={startPlace} startDate={startDate} endDate={endDate} onSearch={handleSearch} />
//                         </div>
//                         <div className="col-xl-7 col-lg-7">
//                             <MenuView cars={cars}/>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Search;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
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

    const [cars, setCars] = useState([]); // Store the API response (car data)
    const [isLoading, setIsLoading] = useState(false);

    // Function to search for cars based on the given params
    const searchCars = async (chplace, chdate, redate) => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:8080/carrent/searchPlace', {
                chplace,
                chdate,
                redate
            });
            setCars(response.data);
        } catch (error) {
            console.error('Error searching for cars:', error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        if (startPlace && startDate && endDate) {
            searchCars(startPlace, startDate, endDate); // Automatically search when params are available
        }
    }, [startPlace, startDate, endDate]);

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
                                onSearch={searchCars} // Pass search function to SideBar for manual search
                            />
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            {isLoading ? <p>Loading...</p> : <MenuView cars={cars} />}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Search;

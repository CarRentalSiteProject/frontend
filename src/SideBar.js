import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// function SideBar({startPlace, startDate, endDate}) {
//     const [chplace, setChPlace] = useState(startPlace || ''); 
//     const [chdate, setChDate] = useState(startDate || '');
//     const [redate, setReDate] = useState(endDate || '');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             console.log("SideBar, " + { chplace, chdate, redate });
//             navigate(`/search?place=${chplace}&start=${chdate}&end=${redate}`);
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };

//     return (
//         <div id="sidebar" className="sidebar sticky-lg-top">
//             <div className="card bg-white border border-3 border-primary rounded col-sm p-4">
//                 <div className="cardbody">
//                     <h2 className="h5 mb-4 pt-1 pb-3 border-bottom fw-bold text-dark">Let's find your ideal car</h2>
//                     <form onSubmit={handleSubmit}> 
//                         <div className="align-items-center gx-2 gy-3">
//                             <div className="col-sm p-2"> 
//                                 <select 
//                                     className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0" 
//                                     value={chplace} 
//                                     onChange={(e) => setChPlace(e.target.value)}
//                                     required
//                                 >
//                                     <option value="">Locations</option>
//                                     <option value="Taipei">Taipei</option>
//                                     <option value="NewTaipei">NewTaipei</option>
//                                     <option value="Keelung">Keelung</option>
//                                     <option value="Taoyuan">Taoyuan</option>
//                                     <option value="Hsinchu">Hsinchu</option>
//                                     <option value="Taichung">Taichung</option>
//                                     <option value="Changhua">Changhua</option>
//                                     <option value="Yunlin">Yunlin</option>
//                                     <option value="Chiayi">Changhua</option>
//                                     <option value="Tainan">Tainan</option>
//                                     <option value="Kaohsiung">Kaohsiung</option>
//                                     <option value="Pingtung">Pingtung</option>
//                                     <option value="Hualien">Hualien</option>
//                                     <option value="Taitung">Taitung</option>
//                                 </select>
//                             </div>
//                             <div className="col-sm p-2"> 
//                                 <input 
//                                     type="date" 
//                                     className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
//                                     value={chdate}
//                                     onChange={(e) => setChDate(e.target.value)}
//                                     required
//                                 /> 
//                             </div>
//                             <div className="col-sm p-2"> 
//                                 <input 
//                                     type="date" 
//                                     className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
//                                     value={redate}
//                                     onChange={(e) => setReDate(e.target.value)}
//                                     required
//                                 /> 
//                             </div>
//                             <div className="col-sm-auto  p-2 text-end"> 
//                                 <button type="submit" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">Search</button>                                             
//                             </div>
//                         </div>                                     
//                     </form>
//                     <h2 className="h5 mb-4 pt-1 pb-3 border-bottom fw-bold text-dark">Sort by</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="col-sm p-2">
//                             <div class="form-check">
//                                 <input class="form-check-input" type="radio" value="option1" id="exampleRadios1" />
//                                 <label class="form-check-label " for="exampleRadios1">
//                                 Brands
//                                 </label>
//                             </div>
//                             <div class="form-check">
//                                 <input class="form-check-input" type="radio" value="option1" id="exampleRadios2" />
//                                 <label class="form-check-label" for="exampleRadios2">
//                                 Price
//                                 </label>
//                             </div>
//                             <div class="form-check">
//                                 <input class="form-check-input" type="radio" value="option1" id="exampleRadios3" />
//                                 <label class="form-check-label" for="exampleRadios3">
//                                 Passengers
//                                 </label>
//                             </div>
//                         </div>
//                         <div className="align-items-center gx-2 gy-3">
//                             <div className="col-sm p-2">
//                                 <div class="form-check">
//                                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                                     <label class="form-check-label " for="flexCheckDefault">
//                                     Increasing
//                                     </label>
//                                 </div>
//                                 <div class="form-check">
//                                     <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
//                                     <label class="form-check-label" for="flexCheckChecked">
//                                     Decreasing
//                                     </label>
//                                 </div>
//                             </div>
//                             <div className="col-sm-auto  p-2 text-end"> 
//                                 <button type="submit" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">Apply</button>
//                             </div>
//                         </div>                                     
//                     </form>
//                     <h2 className="h5 mb-4 pt-1 pb-3 border-bottom fw-bold text-dark">Conditions</h2>
//                     <form onSubmit={handleSubmit}> 
//                         <div className="align-items-center gx-2 gy-3">
//                             <div className="col-sm p-2"> 
//                                 <label className="h6 mb-3 pt-1 pb-3 border-bottom fw-bold text-dark">Type</label>
//                                 <input 
//                                     type="date" 
//                                     className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
//                                     value={chdate}
//                                     onChange={(e) => setChDate(e.target.value)}
//                                     required
//                                 /> 
//                             </div>
//                             <div className="col-sm p-2">
//                                 <label for="priceRange" className="h6 mb-3 pt-1 pb-3 border-bottom fw-bold form-label text-dark">Price</label>
//                                 <input type="range" class="form-range" min="0" max="5" step="0.5" id="priceRange" />
//                             </div>
//                             <div className="col-sm p-2">
//                                 <label className="h6 mb-3 pt-1 pb-3 border-bottom fw-bold text-dark">Passengers</label>
//                                 <input 
//                                     type="date" 
//                                     className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
//                                     value={redate}
//                                     onChange={(e) => setReDate(e.target.value)}
//                                     required
//                                 /> 
//                             </div>
//                             <div className="col-sm-auto  p-2 text-end"> 
//                                 <button type="submit" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">Search</button>                                             
//                             </div>
//                         </div>                                     
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

function SideBar({ startPlace, startDate, endDate }) {
    const [chplace, setChPlace] = useState(startPlace || ''); 
    const [chdate, setChDate] = useState(startDate || '');
    const [redate, setReDate] = useState(endDate || '');
    const [sortBy, setSortBy] = useState('price');
    const [sortDirection, setSortDirection] = useState('desc');
    const navigate = useNavigate();

    const handleSearching = async (e) => {
        e.preventDefault();
        try {
            console.log("SideBar, " + { chplace, chdate, redate, sortBy });
            navigate(`/search?place=${chplace}&start=${chdate}&end=${redate}&sortBy=${sortBy}&direction=${sortDirection}`);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("SideBar, " + { chplace, chdate, redate, sortBy });
            navigate(`/search?place=${chplace}&start=${chdate}&end=${redate}&sortBy=${sortBy}&direction=${sortDirection}`);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div id="sidebar" className="sidebar sticky-lg-top">
            <div className="card bg-white border border-3 border-primary rounded col-sm p-4">
                <div className="cardbody">
                    <form onSubmit={handleSearching}>
                        <h2 className="h5 mb-4 pt-1 pb-3 border-bottom fw-bold text-dark" data-bs-toggle="collapse" data-bs-target="#collapse-search-1" aria-expanded="false" aria-controls="collapse-search-1">
                            <span>
                            Location & Date
                            {/* https://www.svgrepo.com/ */}
                            <svg className="float-end" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"/>
                            </svg>
                            </span>
                        </h2>
                        <div className="align-items-center gx-2 gy-3 collapse" id="collapse-search-1">
                            <div className="col-sm p-2"> 
                                <select 
                                    className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0" 
                                    value={chplace} 
                                    onChange={(e) => setChPlace(e.target.value)}
                                    required
                                >
                                    <option value="">Locations</option>
                                    <option value="Taipei">Taipei</option>
                                    <option value="NewTaipei">NewTaipei</option>
                                    <option value="Keelung">Keelung</option>
                                    <option value="Taoyuan">Taoyuan</option>
                                    <option value="Hsinchu">Hsinchu</option>
                                    <option value="Taichung">Taichung</option>
                                    <option value="Changhua">Changhua</option>
                                    <option value="Yunlin">Yunlin</option>
                                    <option value="Chiayi">Changhua</option>
                                    <option value="Tainan">Tainan</option>
                                    <option value="Kaohsiung">Kaohsiung</option>
                                    <option value="Pingtung">Pingtung</option>
                                    <option value="Hualien">Hualien</option>
                                    <option value="Taitung">Taitung</option>
                                </select>
                            </div>
                            <div className="col-sm p-2"> 
                                <input 
                                    type="date" 
                                    className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                    value={chdate}
                                    onChange={(e) => setChDate(e.target.value)}
                                    required
                                /> 
                            </div>
                            <div className="col-sm p-2"> 
                                <input 
                                    type="date" 
                                    className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                    value={redate}
                                    onChange={(e) => setReDate(e.target.value)}
                                    required
                                /> 
                            </div>
                        </div>
                        <h2 className="h5 mb-4 pt-1 pb-3 border-bottom fw-bold text-dark" data-bs-toggle="collapse" data-bs-target="#collapse-search-2" aria-expanded="false" aria-controls="collapse-search-2">
                            <span>
                            Sort by
                            <svg className="float-end" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"/>
                            </svg>
                            </span>
                        </h2>
                        <div className="collapse" id="collapse-search-2">
                            {/* Sort by selection */}
                            <div className="col-sm p-2">
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        value="price" 
                                        checked={sortBy === "price"} 
                                        onChange={() => setSortBy('price')} 
                                    />
                                    <label className="form-check-label">Price</label>
                                </div>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        value="peopleNub" 
                                        checked={sortBy === "peopleNub"} 
                                        onChange={() => setSortBy('peopleNub')} 
                                    />
                                    <label className="form-check-label">Passengers</label>
                                </div>
                            </div>
                        
                            {/* Sort direction */}
                            <div className="col-sm p-2">
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        checked={sortDirection === "asc"} 
                                        onChange={() => setSortDirection('asc')} 
                                    />
                                    <label className="form-check-label">Increasing</label>
                                </div>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        checked={sortDirection === "desc"} 
                                        onChange={() => setSortDirection('desc')} 
                                    />
                                    <label className="form-check-label">Decreasing</label>
                                </div>
                            </div>
                            <div className="col-sm-auto  p-2 text-end"> 
                                <button type="submit" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">Search</button>
                            </div>
                        </div>
                    </form>
                    <h2 className="h5 mb-4 pt-1 pb-3 border-bottom fw-bold text-dark" data-bs-toggle="collapse" data-bs-target="#collapse-search-3" aria-expanded="false" aria-controls="collapse-search-3">
                        <span>
                            Conditions
                            {/* https://www.svgrepo.com/ */}
                            <svg className="float-end" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"/>
                            </svg>
                        </span>
                    </h2>
                    <form onSubmit={handleSubmit}> 
                        <div className="align-items-center gx-2 gy-3 collapse" id="collapse-search-3">
                            <div className="col-sm p-2"> 
                                <label className="h6 mb-3 pt-1 pb-3 border-bottom fw-bold text-dark">Type</label>
                                <select></select>
                            </div>
                            <div className="col-sm p-2">
                                <label for="priceRange" className="h6 mb-3 pt-1 pb-3 border-bottom fw-bold form-label text-dark">Price</label>
                                <input type="range" class="form-range" min="0" max="5" step="0.5" id="priceRange" />
                            </div>
                            <div className="col-sm p-2">
                                <label for="passengersRange" className="h6 mb-3 pt-1 pb-3 border-bottom fw-bold text-dark">Passengers</label>
                                <input type="range" class="form-range" min="0" max="5" step="0.5" id="passengersRange" /> 
                            </div>
                            <div className="col-sm-auto  p-2 text-end"> 
                                <button type="submit" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">Search</button>                                             
                            </div>
                        </div>                                     
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
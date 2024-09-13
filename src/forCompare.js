import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SideBar({startPlace, startDate, endDate}) {
    const [chplace, setChPlace] = useState(startPlace || ''); 
    const [chdate, setChDate] = useState(startDate || '');
    const [redate, setReDate] = useState(endDate || '');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("SideBar, " + { chplace, chdate, redate });
            navigate(`/search?place=${chplace}&start=${chdate}&end=${redate}`);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div id="sidebar" className="sidebar sticky-lg-top">
            <div className="card bg-white border border-3 border-primary rounded col-sm p-4">
                <div className="cardbody">
                    <h2 className="h5 mb-4 pt-1 pb-3 border-bottom fw-bold text-dark">Let's find your ideal car</h2>
                    <form onSubmit={handleSubmit}> 
                        <div className="align-items-center gx-2 gy-3">
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
                            <div className="col-sm-auto  p-2 text-end"> 
                                <button type="submit" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">Search</button>                                             
                            </div>
                        </div>                                     
                    </form>
                    <h2 className="h5 mb-4 pt-1 pb-3 border-bottom fw-bold text-dark">Sort by</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="col-sm p-2">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" value="option1" id="exampleRadios1" />
                                <label class="form-check-label " for="exampleRadios1">
                                Brands
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" value="option1" id="exampleRadios2" />
                                <label class="form-check-label" for="exampleRadios2">
                                Price
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" value="option1" id="exampleRadios3" />
                                <label class="form-check-label" for="exampleRadios3">
                                Passengers
                                </label>
                            </div>
                        </div>
                        <div className="align-items-center gx-2 gy-3">
                            <div className="col-sm p-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label " for="flexCheckDefault">
                                    Increasing
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label class="form-check-label" for="flexCheckChecked">
                                    Decreasing
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-auto  p-2 text-end"> 
                                <button type="submit" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">Apply</button>
                            </div>
                        </div>                                     
                    </form>
                    <h2 className="h5 mb-4 pt-1 pb-3 border-bottom fw-bold text-dark">Conditions</h2>
                    <form onSubmit={handleSubmit}> 
                        <div className="align-items-center gx-2 gy-3">
                            <div className="col-sm p-2"> 
                                <label className="h6 mb-3 pt-1 pb-3 border-bottom fw-bold text-dark">Type</label>
                                <input 
                                    type="date" 
                                    className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                    value={chdate}
                                    onChange={(e) => setChDate(e.target.value)}
                                    required
                                /> 
                            </div>
                            <div className="col-sm p-2">
                                <label for="priceRange" className="h6 mb-3 pt-1 pb-3 border-bottom fw-bold form-label text-dark">Price</label>
                                <input type="range" class="form-range" min="0" max="5" step="0.5" id="priceRange" />
                            </div>
                            <div className="col-sm p-2">
                                <label className="h6 mb-3 pt-1 pb-3 border-bottom fw-bold text-dark">Passengers</label>
                                <input 
                                    type="date" 
                                    className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                    value={redate}
                                    onChange={(e) => setReDate(e.target.value)}
                                    required
                                /> 
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
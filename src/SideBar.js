import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SideBar() {
    const [chplace, setChplace] = useState('');
    const [chdate, setChdate] = useState('');
    const [redate, setRedate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/carrent/searchPlace', {
                chplace,
                chdate,
                redate
            });
            console.log('API Response:', response.data);
            navigate('/menu', { state: { cars: response.data, chdate, redate } });
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
                                    onChange={(e) => setChplace(e.target.value)}
                                    required
                                >
                                    <option value="">請選擇縣市</option>
                                    <option value="Taipei">台北</option>
                                    <option value="NewTaipei">新北</option>
                                    <option value="Keelung">基隆</option>
                                    <option value="Taoyuan">桃園</option>
                                    <option value="Hsinchu">新竹</option>
                                    <option value="Taichung">台中</option>
                                    <option value="Changhua">彰化</option>
                                    <option value="Yunlin">雲林</option>
                                    <option value="Chiayi">嘉義</option>
                                    <option value="Tainan">台南</option>
                                    <option value="Kaohsiung">高雄</option>
                                    <option value="Pingtung">屏東</option>
                                    <option value="Hualien">花蓮</option>
                                    <option value="Taitung">台東</option>
                                </select>
                            </div>
                            <div className="col-sm p-2"> 
                                <input 
                                    type="date" 
                                    className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                    value={chdate}
                                    onChange={(e) => setChdate(e.target.value)}
                                    required
                                /> 
                            </div>
                            <div className="col-sm p-2"> 
                                <input 
                                    type="date" 
                                    className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                    value={redate}
                                    onChange={(e) => setRedate(e.target.value)}
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
                                <label className="h6 mb-3 pt-1 pb-3 border-bottom fw-bold text-dark">Brands</label>
                                <input 
                                    type="date" 
                                    className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                    value={chdate}
                                    onChange={(e) => setChdate(e.target.value)}
                                    required
                                /> 
                            </div>
                            <div className="col-sm p-2">
                                <label className="h6 mb-3 pt-1 pb-3 border-bottom fw-bold text-dark">Price</label>
                                <input 
                                    type="date" 
                                    className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                    value={redate}
                                    onChange={(e) => setRedate(e.target.value)}
                                    required
                                /> 
                            </div>
                            <div className="col-sm p-2">
                                <label className="h6 mb-3 pt-1 pb-3 border-bottom fw-bold text-dark">Passengers</label>
                                <input 
                                    type="date" 
                                    className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                    value={redate}
                                    onChange={(e) => setRedate(e.target.value)}
                                    required
                                /> 
                            </div>
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
                                    onChange={(e) => setChdate(e.target.value)}
                                    required
                                /> 
                            </div>
                            <div className="col-sm p-2">
                                <label className="h6 mb-3 pt-1 pb-3 border-bottom fw-bold text-dark">Price</label>
                                <input 
                                    type="date" 
                                    className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                    value={redate}
                                    onChange={(e) => setRedate(e.target.value)}
                                    required
                                /> 
                            </div>
                            <div className="col-sm p-2">
                                <label className="h6 mb-3 pt-1 pb-3 border-bottom fw-bold text-dark">Passengers</label>
                                <input 
                                    type="date" 
                                    className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                    value={redate}
                                    onChange={(e) => setRedate(e.target.value)}
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
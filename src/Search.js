import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation  } from 'react-router-dom';
import SideBar from './SideBar';
import MenuView from './MenuView';

function Search() {
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
        <div className="wrapper">
            <section className=" pb-5 position-relative pt-5">
                <div className="container-fluid">
                    <div class="row ps-5 pe-5">
                        <div className="col-xl-3 col-lg-5">
                            <SideBar />
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
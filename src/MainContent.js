import React from 'react';

function MainContent() {
    return (
        <main>
            <div>search</div>
            <section className="pb-5 pt-5"> 
                <div className="container pb-5 pt-5"> 
                    <div className="align-items-center gx-0 gy-5 mb-5 row"> 
                        <div className="col-lg-7"> 
                            <img src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDJ8fGNhcnxlbnwwfHx8fDE2MzE2NzIwOTU&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1000&h=650&fit=crop" className="img-fluid w-100" alt="..." width="1000" height="650"/> 
                        </div>
                        <div className="col-lg-5"> 
                            <div className="bg-white ms-lg-n5  pb-lg-5 position-relative ps-lg-5 pt-lg-5">
                                <h2 className="h5 text-primary">Rental Cars &amp; Much More</h2>
                                <h3 className="fw-bold h1 mb-3 text-capitalize text-dark">Experience a Rental service like never before</h3>
                                <div className="bg-primary col-2 d-inline-flex mb-3 pb-1"></div>
                                <p className="mb-4">Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. Curabitur ac sagittis neque, vel egestas est.</p>
                                <a href="#" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">Learn More</a>
                            </div>                             
                        </div>                         
                    </div>
                    <div className="align-items-center gy-4 row"> 
                        <div className="col-lg-4 col-xl-3 me-auto"> 
                            <h4 className="fw-bold h3 text-capitalize text-dark">Our Service is Built with Trust</h4>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>
                        <div className="col-lg-8"> 
                            <div className="row row-cols-lg-3 row-cols-md-3"> 
                                <div className="pb-3 pt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke="currentColor" width="5rem" height="5rem" className="mb-3 text-primary">
                                        <path d="M13 50v-1.849a2.73 2.73 0 0 0-.741-1.87l-4.038-4.293A4.499 4.499 0 0 1 7 38.907V21.998A2.998 2.998 0 0 1 9.998 19h.004A2.999 2.999 0 0 1 13 21.998V27m38 23v-1.849c0-.695.265-1.364.741-1.87l4.038-4.293A4.499 4.499 0 0 0 57 38.907V21.998A2.998 2.998 0 0 0 54.002 19h-.004A2.999 2.999 0 0 0 51 21.998V27M29 56.379v-4.933c0-.383-.152-.751-.424-1.022A1.442 1.442 0 0 0 27.554 50H13.446c-.383 0-.751.152-1.022.424A1.442 1.442 0 0 0 12 51.446v4.933m23 0v-4.933c0-.383.152-.751.424-1.022A1.442 1.442 0 0 1 36.446 50h14.108c.383 0 .751.152 1.022.424.272.271.424.639.424 1.022v4.933" fill="none" stroke-width="2"/>
                                        <path d="M28 50v-5.491c0-2.439-1-4.771-2.767-6.453l-7.49-7.13a2.71 2.71 0 0 0-3.785.047l-.002.002a2.767 2.767 0 0 0 0 3.912l4.527 4.527M36 50v-5.491c0-2.439 1-4.771 2.767-6.453l7.49-7.13a2.71 2.71 0 0 1 3.785.047l.002.002a2.767 2.767 0 0 1 0 3.912l-4.527 4.527M22.25 16.464a1.499 1.499 0 0 1 1.5-1.5h3.75a1.5 1.5 0 0 0 1.5-1.5V9.5A1.5 1.5 0 0 1 30.5 8h3A1.5 1.5 0 0 1 35 9.5v3.964a1.5 1.5 0 0 0 1.5 1.5h3.75a1.5 1.5 0 0 1 1.5 1.5V19.5a1.503 1.503 0 0 1-1.5 1.5H36.5a1.503 1.503 0 0 0-1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-4a1.503 1.503 0 0 0-1.5-1.5h-3.75a1.503 1.503 0 0 1-1.5-1.5v-3.036z" fill="none" stroke-width="2"/>
                                    </svg>
                                    <h4 className="fw-bold h5 mb-0 text-dark">Insured &amp; Safe</h4> 
                                </div>
                                <div className="pb-3 pt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke="currentColor" width="5rem" height="5rem" className="mb-3 text-primary">
                                        <path d="M49.972 21.334c.003-2.264.011-4.339.028-5.976a2.574 2.574 0 0 0-1.082-2.109 2.596 2.596 0 0 0-2.344-.351m-.249.334-.002.001m-16.987-.534a17.589 17.589 0 0 1-11.907.2l-.003-.001A2.596 2.596 0 0 0 14 15.358v18.717m17.455 18.167 11.83-6.799" fill="none" stroke-width="2"/>
                                        <path d="M54 14.908a6.172 6.172 0 0 0-8.146-5.848l-.002.001a14.905 14.905 0 0 1-9.999-.166l-2.623-.984a3.507 3.507 0 0 0-2.46 0l-2.623.984a14.905 14.905 0 0 1-9.999.166l-.002-.001A6.172 6.172 0 0 0 10 14.908V34.14a17.257 17.257 0 0 0 8.263 14.728l11.35 6.93a3.504 3.504 0 0 0 3.573.048l12.156-6.986A17.256 17.256 0 0 0 54 33.898v-18.99z" fill="none" stroke-width="2" stroke-linecap="butt"/>
                                        <circle cx="32" cy="26" r="5" fill="none" stroke-width="2"/>
                                        <path d="M21.169 40.5C23.64 36.554 27.574 34 32 34c4.426 0 8.36 2.554 10.831 6.5" fill="none" stroke-width="2"/>
                                    </svg>
                                    <h4 className="fw-bold h5 mb-0 text-dark">Certified Chauffeur</h4> 
                                </div>
                                <div className="pb-3 pt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke="currentColor" width="5rem" height="5rem" className="mb-3 text-primary">
                                        <path d="M38.028 13.749c8.148 2.342 14.116 9.856 14.116 18.753m-.479 4.315c-1.966 8.695-9.745 15.195-19.03 15.195m-4.854-.61c-8.423-2.159-14.656-9.807-14.656-18.9m.48-4.314c1.966-8.695 9.744-15.195 19.03-15.195m0 33.193v7.316m-13.1-7.9 1.674-1.674m-2.258-11.426h-7.316m7.9-13.099 1.674 1.674m11.426-9.575v7.317m11.425 2.258 1.674-1.674m7.901 13.099h-7.316M44.06 43.928l1.674 1.674" fill="none" stroke-width="2"/>
                                        <circle cx="32.635" cy="32.502" r="26" fill="none" stroke-width="2"/>
                                        <path d="M37.039 34.711a2.369 2.369 0 0 1 1.652 2.01l.214 2a2.177 2.177 0 0 1-2.167 2.412h-.001c-5.92 0-10.727-4.807-10.727-10.728 0-1.799.444-3.495 1.228-4.985a2.779 2.779 0 0 1 2.365-1.44c.457-.051.973-.064 1.467-.077a1.956 1.956 0 0 1 2.004 2.038l-.17 4.093a1.522 1.522 0 0 1-.934 1.34l-1.584.66a6.562 6.562 0 0 0 2.251 3.485l1.456-1.725 2.946.917z" fill="none" stroke-width="2"/>
                                    </svg>
                                    <h4 className="fw-bold h5 mb-0 text-dark">24/7 Support</h4> 
                                </div>                                 
                            </div>                             
                        </div>                         
                    </div>                     
                </div>
            </section>
            <section className="bg-light pb-5 pt-5"> 
                <div className="container pb-5 pt-5">
                    <div className="mb-4 row">
                        <div className="col-md">
                            <h2 className="h5 text-primary">Our Top Cars</h2>
                            <h3 className="fw-bold h1 mb-3 text-dark">Cars For All Your Needs</h3>
                            <div className="bg-primary col-2 d-inline-flex mb-3 pb-1"></div>
                        </div>
                    </div>
                    <div className="g-4 justify-content-center row row-cols-lg-3 row-cols-md-2"> 
                        <div> 
                            <div className="bg-white border shadow-sm"> 
                                <a href="#"><img src="https://images.unsplash.com/photo-1575090536203-2a6193126514?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDN8fGh5dW5kYWl8ZW58MHx8fHwxNjMxNjk3ODI1&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" className="img-fluid w-100" alt="..." width="600" height="450"/></a>
                                <div className="p-4">
                                    <h4 className="fw-bold h5"><a href="" className="link-secondary text-decoration-none">Hyundai Creta 2017</a></h4>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <hr/>
                                    <div className="align-items-center d-flex justify-content-between">
                                        <div className="align-items-center d-inline-flex gap-1 pb-1 pt-1">
                                            <span>4.7</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" className="text-primary">
                                                <g>
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"></path>
                                                </g>
                                            </svg>
                                            <span>(245 reviews)</span>
                                        </div>
                                        <span className="fw-bold pb-1 pt-1 text-dark">$40/day</span>
                                    </div>
                                </div>                                 
                            </div>                             
                        </div>
                        <div> 
                            <div className="bg-white border shadow-sm"> 
                                <a href="#"><img src="https://images.unsplash.com/photo-1619976215249-0b68cef412b0?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE2fHxob25kYXxlbnwwfHx8fDE2MzE2OTcxODY&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" className="img-fluid w-100" alt="..." width="600" height="450"/></a>
                                <div className="p-4">
                                    <h4 className="fw-bold h5"><a href="" className="link-secondary text-decoration-none">Honda Accord 2018</a></h4>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <hr/>
                                    <div className="align-items-center d-flex justify-content-between">
                                        <div className="align-items-center d-inline-flex gap-1 pb-1 pt-1">
                                            <span>4.4</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" className="text-primary">
                                                <g>
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"></path>
                                                </g>
                                            </svg>
                                            <span>(654 reviews)</span>
                                        </div>
                                        <span className="fw-bold pb-1 pt-1 text-dark">$65/day</span>
                                    </div>
                                </div>                                 
                            </div>                             
                        </div>
                        <div> 
                            <div className="bg-white border shadow-sm"> 
                                <a href="#"><img src="https://images.unsplash.com/photo-1554666869-04dafcdc7a48?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQxN3x8Y2FyJTIwc3V2fGVufDB8fHx8MTYzMTY4NTkwNg&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" className="img-fluid w-100" alt="..." width="600" height="450"/></a>
                                <div className="p-4">
                                    <h4 className="fw-bold h5"><a href="" className="link-secondary text-decoration-none">BMW M3 2010</a></h4>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <hr/>
                                    <div className="align-items-center d-flex justify-content-between">
                                        <div className="align-items-center d-inline-flex gap-1 pb-1 pt-1">
                                            <span>4.9</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" className="text-primary">
                                                <g>
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"></path>
                                                </g>
                                            </svg>
                                            <span>(456 reviews)</span>
                                        </div>
                                        <span className="fw-bold pb-1 pt-1 text-dark">$45/day</span>
                                    </div>
                                </div>                                 
                            </div>                             
                        </div>
                        <div> 
                            <div className="bg-white border shadow-sm"> 
                                <a href="#"><img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMwfHxzcG9ydHMlMjBjYXJ8ZW58MHx8fHwxNjMxNjg3MzQ4&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" className="img-fluid w-100" alt="..." width="600" height="450"/></a>
                                <div className="p-4">
                                    <h4 className="fw-bold h5"><a href="" className="link-secondary text-decoration-none">Chevrolet Equinox 2005</a></h4>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <hr/>
                                    <div className="align-items-center d-flex justify-content-between">
                                        <div className="align-items-center d-inline-flex gap-1 pb-1 pt-1">
                                            <span>4.2</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" className="text-primary">
                                                <g>
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"></path>
                                                </g>
                                            </svg>
                                            <span>(234 reviews)</span>
                                        </div>
                                        <span className="fw-bold pb-1 pt-1 text-dark">$55/day</span>
                                    </div>
                                </div>                                 
                            </div>                             
                        </div>
                        <div> 
                            <div className="bg-white border shadow-sm"> 
                                <a href="#"><img src="https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDk5fHxjYXIlMjBjb252ZXJ0aWJsZXxlbnwwfHx8fDE2MzE2ODUxMzA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" className="img-fluid w-100" alt="..." width="600" height="450"/></a>
                                <div className="p-4">
                                    <h4 className="fw-bold h5"><a href="" className="link-secondary text-decoration-none">Ferrari 458 Spider 2015</a></h4>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <hr/>
                                    <div className="align-items-center d-flex justify-content-between">
                                        <div className="align-items-center d-inline-flex gap-1 pb-1 pt-1">
                                            <span>4.7</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" className="text-primary">
                                                <g>
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"></path>
                                                </g>
                                            </svg>
                                            <span>(346 reviews)</span>
                                        </div>
                                        <span className="fw-bold pb-1 pt-1 text-dark">$75/day</span>
                                    </div>
                                </div>                                 
                            </div>                             
                        </div>
                        <div> 
                            <div className="bg-white border shadow-sm"> 
                                <a href="#"><img src="https://images.unsplash.com/photo-1625231334168-35067f8853ed?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDU2fHxzcG9ydHMlMjBjYXJ8ZW58MHx8fHwxNjMxNjg3OTY1&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" className="img-fluid w-100" alt="..." width="600" height="450"/></a>
                                <div className="p-4">
                                    <h4 className="fw-bold h5"><a href="" className="link-secondary text-decoration-none">Ford Mustang Shelby 2017</a></h4>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <hr/>
                                    <div className="align-items-center d-flex justify-content-between">
                                        <div className="align-items-center d-inline-flex gap-1 pb-1 pt-1">
                                            <span>4.5</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" className="text-primary">
                                                <g>
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"></path>
                                                </g>
                                            </svg>
                                            <span>(587 reviews)</span>
                                        </div>
                                        <span className="fw-bold pb-1 pt-1 text-dark">$90/day</span>
                                    </div>
                                </div>                                 
                            </div>                             
                        </div>                         
                    </div>
                    <div className="mt-5 text-center">
                        <a href="#" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">View All Cars</a>
                    </div>                     
                </div>                 
            </section>
            <section className="pb-5 pt-5"> 
                <div className="container pb-5 pt-5">
                    <div className="align-items-center mb-4 row">
                        <div className="col-md">
                            <h2 className="h5 text-primary">Our Fleet</h2>
                            <h3 className="fw-bold h1 mb-3 text-capitalize text-dark">Browse by Category</h3>
                            <div className="bg-primary col-2 d-inline-flex mb-3 pb-1"></div>
                        </div>
                        <div className="col-md-auto">
                            <a href="#" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">View All</a>
                        </div>
                    </div>
                    <div className="g-4 justify-content-center row row-cols-lg-4 row-cols-md-2"> 
                        <div> 
                            <a href="#" className="bg-white border d-block link-dark shadow-sm text-decoration-none"><img src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMyM3x8c3V2fGVufDB8fHx8MTYzMTY4Njc4Nw&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" className="img-fluid w-100" alt="..." width="600" height="450"/><div className="pb-3 pe-4 ps-4 pt-3">
                                    <h4 className="fw-bold h5 mb-0">Sedans</h4>
                                </div></a> 
                        </div>
                        <div> 
                            <a href="#" className="bg-white border d-block link-dark shadow-sm text-decoration-none"><img src="https://images.unsplash.com/photo-1511527844068-006b95d162c2?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQzfHxjYXIlMjBzdXZ8ZW58MHx8fHwxNjMxNjg0ODkw&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" className="img-fluid w-100" alt="..." width="600" height="450"/><div className="pb-3 pe-4 ps-4 pt-3">
                                    <h4 className="fw-bold h5 mb-0">SUVs</h4>
                                </div></a> 
                        </div>
                        <div> 
                            <a href="#" className="bg-white border d-block link-dark shadow-sm text-decoration-none"><img src="https://images.unsplash.com/photo-1597210159614-966c9f632c89?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDh8fGNhciUyMGNvbnZlcnRpYmxlfGVufDB8fHx8MTYzMTY4NTExMA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" className="img-fluid w-100" alt="..." width="600" height="450"/><div className="pb-3 pe-4 ps-4 pt-3">
                                    <h4 className="fw-bold h5 mb-0">Convertibles</h4>
                                </div></a> 
                        </div>
                        <div> 
                            <a href="#" className="bg-white border d-block link-dark shadow-sm text-decoration-none"><img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMwfHxzcG9ydHMlMjBjYXJ8ZW58MHx8fHwxNjMxNjg3MzQ4&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" className="img-fluid w-100" alt="..." width="600" height="450"/><div className="pb-3 pe-4 ps-4 pt-3">
                                    <h4 className="fw-bold h5 mb-0">Sports Cars</h4>
                                </div></a> 
                        </div>                         
                    </div>                     
                </div>                 
            </section>
            <section className="bg-dark pb-5 pt-5 text-white-50"> 
                <div className="container pb-5 pt-5"> 
                    <div className="mb-4 row">
                        <div className="col-md">
                            <h2 className="h5 text-primary">Testimonials</h2>
                            <h3 className="fw-bold h1 mb-3 text-white">What Our Customers Say About Us</h3>
                            <div className="bg-primary col-2 d-inline-flex mb-3 pb-1"></div>
                        </div>
                    </div>
                    <div id="carousel6" className="carousel slide" data-bs-ride="carousel"> 
                        <div className="carousel-inner"> 
                            <div className="carousel-item active"> 
                                <div className="align-items-center row"> 
                                    <div className="col-lg-4 pb-3 pt-3"> 
                                        <img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=360&h=360&fit=crop" className="img-fluid" alt="..." width="360" height="360"/> 
                                    </div>                                     
                                    <div className="col-lg-8 pb-3 pt-3"> 
                                        <svg viewBox="0 0 24 24" fill="currentColor" height="64" width="64" className="mb-3 text-primary"> 
                                            <path d="M23 1V5.06504C21.9136 5.67931 21.0807 6.43812 20.5012 7.34146C19.958 8.24481 19.5416 9.20235 19.2519 10.2141C18.9621 11.2258 18.8173 12.346 18.8173 13.5745H23V22.4634H14.0914V16.935C14.0914 13.6107 14.3992 11.0813 15.0148 9.34688C15.6667 7.61246 16.6444 6.02258 17.9481 4.57723C19.2519 3.09575 20.9358 1.90334 23 1ZM9.90864 1V5.06504C8.82222 5.67931 7.9893 6.43812 7.40988 7.34146C6.83045 8.24481 6.39588 9.20235 6.10617 10.2141C5.81646 11.2258 5.67161 12.346 5.67161 13.5745H9.90864V22.4634H1V16.935C1 13.6107 1.30782 11.0813 1.92346 9.34688C2.57531 7.61246 3.55309 6.02258 4.85679 4.57723C6.16049 3.09575 7.84444 1.90334 9.90864 1Z"/> 
                                        </svg>                                         
                                        <p className="fs-5 mb-4">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p> 
                                        <h4 className="fw-bold mb-1 text-primary">Kathryn Murphy</h4> 
                                        <p className="mb-0 text-white">Chief Technology Officer</p> 
                                    </div>                                     
                                </div>                                 
                            </div>                             
                            <div className="carousel-item"> 
                                <div className="align-items-center row"> 
                                    <div className="col-lg-4 pb-3 pt-3"> 
                                        <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDd8fGNhdHxlbnwwfHx8&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=360&h=360&fit=crop" className="img-fluid" alt="..." width="360" height="360"/> 
                                    </div>                                     
                                    <div className="col-lg-8 pb-3 pt-3"> 
                                        <svg viewBox="0 0 24 24" fill="currentColor" height="64" width="64" className="mb-3 text-primary"> 
                                            <path d="M23 1V5.06504C21.9136 5.67931 21.0807 6.43812 20.5012 7.34146C19.958 8.24481 19.5416 9.20235 19.2519 10.2141C18.9621 11.2258 18.8173 12.346 18.8173 13.5745H23V22.4634H14.0914V16.935C14.0914 13.6107 14.3992 11.0813 15.0148 9.34688C15.6667 7.61246 16.6444 6.02258 17.9481 4.57723C19.2519 3.09575 20.9358 1.90334 23 1ZM9.90864 1V5.06504C8.82222 5.67931 7.9893 6.43812 7.40988 7.34146C6.83045 8.24481 6.39588 9.20235 6.10617 10.2141C5.81646 11.2258 5.67161 12.346 5.67161 13.5745H9.90864V22.4634H1V16.935C1 13.6107 1.30782 11.0813 1.92346 9.34688C2.57531 7.61246 3.55309 6.02258 4.85679 4.57723C6.16049 3.09575 7.84444 1.90334 9.90864 1Z"/> 
                                        </svg>                                         
                                        <p className="fs-5 mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> 
                                        <h4 className="fw-bold mb-1 text-primary">Dianne Russell</h4> 
                                        <p className="mb-0 text-white">Founder</p> 
                                    </div>                                     
                                </div>                                 
                            </div>                             
                            <div className="carousel-item"> 
                                <div className="align-items-center row"> 
                                    <div className="col-lg-4 pb-3 pt-3"> 
                                        <img src="https://images.unsplash.com/photo-1517101724602-c257fe568157?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDZ8fHBhcnJvdHxlbnwwfHx8&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=360&h=360&fit=crop" className="img-fluid" alt="..." width="360" height="360"/> 
                                    </div>                                     
                                    <div className="col-lg-8 pb-3 pt-3"> 
                                        <svg viewBox="0 0 24 24" fill="currentColor" height="64" width="64" className="mb-3 text-primary"> 
                                            <path d="M23 1V5.06504C21.9136 5.67931 21.0807 6.43812 20.5012 7.34146C19.958 8.24481 19.5416 9.20235 19.2519 10.2141C18.9621 11.2258 18.8173 12.346 18.8173 13.5745H23V22.4634H14.0914V16.935C14.0914 13.6107 14.3992 11.0813 15.0148 9.34688C15.6667 7.61246 16.6444 6.02258 17.9481 4.57723C19.2519 3.09575 20.9358 1.90334 23 1ZM9.90864 1V5.06504C8.82222 5.67931 7.9893 6.43812 7.40988 7.34146C6.83045 8.24481 6.39588 9.20235 6.10617 10.2141C5.81646 11.2258 5.67161 12.346 5.67161 13.5745H9.90864V22.4634H1V16.935C1 13.6107 1.30782 11.0813 1.92346 9.34688C2.57531 7.61246 3.55309 6.02258 4.85679 4.57723C6.16049 3.09575 7.84444 1.90334 9.90864 1Z"/> 
                                        </svg>                                         
                                        <p className="fs-5 mb-4">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p> 
                                        <h4 className="fw-bold mb-1 text-primary">Darrell Steward</h4> 
                                        <p className="mb-0 text-white">Administrative Manager</p> 
                                    </div>                                     
                                </div>                                 
                            </div>                             
                        </div>                         
                        <ol className="carousel-indicators position-relative"> 
                            <li data-bs-target="#carousel6" data-bs-slide-to="0" className="active bg-primary"></li>                             
                            <li data-bs-target="#carousel6" data-bs-slide-to="1" className="bg-primary"></li>                             
                            <li data-bs-target="#carousel6" data-bs-slide-to="2" className="bg-primary"></li>                             
                        </ol>                         
                    </div>                     
                </div>                 
            </section>
            <section className="bg-primary pb-5 pt-5 text-center text-white-50">
                <div className="container pb-3 pt-3"> 
                    <h2 className="fw-bold h2 mb-4 text-capitalize text-white">Download Our App &amp; Get Started</h2>
                    <div className="d-inline-flex flex-wrap gap-2 py-1"> 
                        <button type="submit" className="btn btn-outline-light pb-2 pe-3 ps-3 pt-2"> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em" fill="currentColor" className="me-1">
                                <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z"/>
                            </svg>
                            <span className="align-middle">App Store</span>
                        </button>
                        <button type="submit" className="btn btn-outline-light pb-2 pe-3 ps-3 pt-2"> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em" fill="currentColor" className="me-1">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                            </svg>
                            <span className="align-middle">Google Play</span>
                        </button>
                    </div>                     
                </div>                 
            </section>
            <footer></footer>
        </main>
    );
}

export default MainContent;
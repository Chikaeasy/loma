import React from 'react';
import './App.css';

import testimonialImage4 from "./img/testimonial-4.jpg";


function App() {
    return <>
        {/* <!-- Carousel Start --> */}
        <div className="container-fluid p-0 mb-5 pb-5">
            <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item position-relative active"
                         style={{height: "100vh", minHeight: "400px"}}>
                        <img className="position-absolute w-100 h-100" src="/img/images/scale-of-justicewoman.png"
                             style={{objectFit: "cover"}} alt="Scales of justice with woman"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "900px"}}>
                                <h4 className="text-white text-uppercase mb-4" style={{letterSpacing: "3px"}}>We fight
                                    for you while you focus on doing what matters most to you and your family.</h4>
                                <h3 className="display-6 text-capitalize text-white mb-4"> We bring 25+ years of
                                    experience as attorney and presiding over trials and cases as a judge to your
                                    situation.</h3>
                                <a className="btn btn-primary py-3 px-5 mt-2" href="#">Get An Appointment</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item position-relative" style={{height: "100vh", maxHeight: "400px"}}>
                        <img className="position-absolute w-100 h-100" src="/img/images/scale-of-justice-with-gavel.jpg"
                             style={{objectFit: "cover"}} alt= "Scales of Justice with gavel in front"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "900px"}}>
                                <h4 className="text-white text-uppercase mb-4" style={{letterSpacing: "3px"}}> We
                                    assemble pre-eminent trial teams to patiently work hand in hand with you to reach
                                    maximum verdicts or results when mediocre settlements just won't do.</h4>
                                <h3 className="display-6 text-capitalize text-white mb-4">We are well trained, highly
                                    skilled, and well traveled to reach and meet all perspectives, personalities and
                                    needs across the United States. This allows us to customize our commitment to your
                                    case. </h3>
                                <a className="btn btn-primary py-3 px-5 mt-2" href="#">Call Us Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                    <div className="btn btn-lg btn-secondary btn-lg-square">
                        <span className="carousel-control-prev-icon"></span>
                    </div>
                </a>
                <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                    <div className="btn btn-lg btn-secondary btn-lg-square">
                        <span className="carousel-control-next-icon"></span>
                    </div>
                </a>
            </div>
        </div>
        {/* <!-- Carousel End --> */}


        {/* <!-- About Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-5">
                        <img className="img-fluid rounded" src="/img/images/ML-Headshot.jpg" alt="Melodee Armstrong Headshot"/>
                    </div>
                    <div className="col-lg-7 mt-4 mt-lg-0">
                        <h2 className="position-relative text-center bg-white text-primary rounded p-3 mt-4 mb-4 d-none d-lg-block"
                            style={{width: "350px", marginLeft: "-205px"}}>25 Years Experience</h2>
                        <h6 className="text-uppercase">Learn About Ms. Armstrong</h6>
                        <h1 className="mb-4">We Provide Reliable And Effective Legal Services</h1>
                        <p>Judge Armstrong has tirelessly served North Texas as a judge and criminalmagistrate since
                            2003. This service includes presiding over trials and conduc1ng hearings,reviewing and
                            execu1ng or rejec1ng search or arrest warrants, and arraigning defendants for entering pleas
                            or release from confinement.</p>
                        <a href="" className="btn btn-primary mt-2">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}


        {/* <!-- Services Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <h6 className="text-uppercase">Our Practice</h6>
                        <h1 className="mb-4">Our Practice Areas</h1>
                        <p>Have a look at some of our areas of practice so you can have a better understanding what we
                            provde.</p>
                        <a href="" className="btn btn-primary mt-2">More Services</a>
                    </div>
                    <div className="col-lg-9 pt-5 pt-lg-0">
                        <div className="bg-primary rounded" style={{height: "200px"}}></div>
                        <div className="owl-carousel service-carousel position-relative"
                             style={{marginTop: "-100px", padding: '0 30px'}}>
                            <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                                    <i className="fa fa-2x fa-landmark"></i>
                                </div>
                                <h5 className="mb-4 px-4">Personal Injury & Wrongful Death</h5>
                                <p className="m-0">Auto/18 Wheeler Accidents<br/>
                                    Bus or Motorcycle Crashes<br/>
                                    Rideshare Accidents<br/>
                                    Explosions<br/>
                                    Premises Liability – Injury at business or other location<br/>
                                    Construction,<br/>
                                    Other Injury & Accidental Death
                                </p>
                            </div>
                            <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                                    <i className="fa fa-2x fa-hand-holding-usd"></i>
                                </div>
                                <h5 className="mb-4 px-4">Business Litagation</h5>
                                <p className="m-0">Our law firm also counsels and represents small businesses with
                                    contracts, employment matters and injury defense. </p>
                            </div>
                            <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                                    <i className="fa fa-2x fa-gavel"></i>
                                </div>
                                <h5 className="mb-4 px-4">Criminal Defense</h5>
                                <p className="m-0">“Life, Liberty and the Pursuit of Happiness” are essential in
                                    criminal cases. From the moment you encounter police, life changes quickly. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Services End --> */}


        {/* <!-- Appointment Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="bg-appointment rounded">
                    <div className="row h-100 align-items-center justify-content-center">
                        <div className="col-lg-6 py-5">
                            <div className="rounded p-5 my-5" style={{background: "rgba(55, 55, 63, .7)"}}>
                                <h1 className="text-center text-white mb-4">Get An Appointment</h1>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control border-0 p-4" placeholder="Your Name"
                                               required={true}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control border-0 p-4"
                                               placeholder="Your Email" required={true}/>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <div className="date" id="date" data-target-input="nearest">
                                                    <input type="text"
                                                           className="form-control border-0 p-4 datetimepicker-input"
                                                           placeholder="Select Date" data-target="#date"
                                                           data-toggle="datetimepicker"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <div className="time" id="time" data-target-input="nearest">
                                                    <input type="text"
                                                           className="form-control border-0 p-4 datetimepicker-input"
                                                           placeholder="Select Time" data-target="#time"
                                                           data-toggle="datetimepicker"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select border-0 px-4" style={{height: "47px"}}>
                                            <option selected>Select A Service</option>
                                            <option value="1">Business Litigation</option>
                                            <option value="2">Criminal Defense</option>
                                            <option value="3">Personal Injury & Wrongful Death</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block border-0 py-3" type="submit">Get An
                                            Appointment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Appointment End --> */}


        {/* <!-- Features Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6" style={{minHeight: "500px"}}>
                        <div className="position-relative h-100 rounded overflow-hidden">
                            <img className="position-absolute w-100 h-100" src="/img/images/Picture1.png"
                                 style={{objectFit: "cover"}} alt="hands tattoed with encouraging and unifying words shaking hands  "/>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-5 pb-lg-5">
                        <div className="feature-text bg-white rounded p-lg-5">
                            <h6 className="text-uppercase">Our Features</h6>
                            <h1 className="mb-4">Why Choose Us</h1>
                            <div className="d-flex mb-4">
                                <div className="btn-primary btn-lg-square px-3" style={{borderRadius: "50px"}}>
                                    <h5 className="text-secondary m-0">01</h5>
                                </div>
                                <div className="ml-4">
                                    <h5>Best Law Practices</h5>
                                    <p className="m-0">Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna
                                        ipsum ipsum stet ipsum</p>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <div className="btn-primary btn-lg-square px-3" style={{borderRadius: "50px"}}>
                                    <h5 className="text-secondary m-0">02</h5>
                                </div>
                                <div className="ml-4">
                                    <h5>Efficiency & Trust</h5>
                                    <p className="m-0">Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna
                                        ipsum ipsum stet ipsum</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="btn-primary btn-lg-square px-3" style={{borderRadius: "50px"}}>
                                    <h5 className="text-secondary m-0">03</h5>
                                </div>
                                <div className="ml-4">
                                    <h5>Results You Deserve</h5>
                                    <p className="m-0">Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna
                                        ipsum ipsum stet ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Features End --> */}


        {/* <!-- Action Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="bg-action rounded" style={{height: "500px"}}>
                    <div className="row h-100 align-items-center justify-content-center">
                        <div className="col-lg-7 text-center">
                            <h1 className="text-white mb-4">Let's get started. Call us now for a Free Consultation</h1>
                            <a className="btn btn-primary py-3 px-5 mt-2" href="#">Call Us Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Action End --> */}


        {/* <!-- Team Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center pb-2">
                    <h6 className="text-uppercase">Our Office</h6>
                    <h1 className="mb-4">Meet Our Office</h1>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="bg-primary rounded" style={{height: "200px"}}></div>
                        <div className="owl-carousel team-carousel position-relative"
                             style={{marginTop: "-97px", padding: '0 30px'}}>
                            <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                                <h5 className="mb-2 px-4">Melodee Armstrong</h5>
                                <p className="mb-3 px-4">Attorney/Judge</p>
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src="/img/images/ML-Headshot.jpg" alt="Melodee Armstrong Headshot"/>
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                                <h5 className="mb-2 px-4">Staff Name</h5>
                                <p className="mb-3 px-4">Practice Area</p>
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src="/img/team-2.jpg" alt=""/>
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                                <h5 className="mb-2 px-4">Staff Name</h5>
                                <p className="mb-3 px-4">Practice Area</p>
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src="/img/team-3.jpg" alt=""/>
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                                <h5 className="mb-2 px-4">Staff Name</h5>
                                <p className="mb-3 px-4">Practice Area</p>
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src="/img/team-4.jpg" alt=""/>
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                                <h5 className="mb-2 px-4">Staff Name</h5>
                                <p className="mb-3 px-4">Practice Area</p>
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src="/img/team-5.jpg" alt=""/>
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                            className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}


        {/* <!-- Testimonial Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center pb-5">
                    <h6 className="text-uppercase">Testimonial</h6>
                    <h1 className="mb-5">What Our Clients Say</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item">
                        <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
                            “Melodee:
                            Thanks for the Mediator Proposal. It was one of the best written Mediator’s Proposal that I
                            have seen, and was very helpful in assisting the clients in making their decision to accept
                            the proposal.”

                        </div>
                        <div className="d-flex align-items-center pt-3">
                            <img className="img-fluid rounded-circle" src="/img/testimonial-1.jpg"
                                 style={{width: "80px", height: "80px"}} alt=""/>
                            <div className="pl-4">
                                <h5>Greg G.<br/> Dallas ($Seven Figure Settlement)</h5>
                                <p className="m-0">Attorney</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
                            "Dear Melodee:
                            Thank you for your assistance in getting the case settled. You showed a tremendous amount of
                            patience in dealing with us to get the case settled. Enclosed is a check for the additional
                            time you had to take to get the matter worked out. The money was well spent.
                            Again, thanks for your successful efforts to deal with me and the client."

                        </div>
                        <div className="d-flex align-items-center pt-3">
                            <img className="img-fluid rounded-circle" src="/img/testimonial-2.jpg"
                                 style={{width: "80px", height: "80px"}} alt=""/>
                            <div className="pl-4">
                                <h5>Michael E.<br/> Dallas</h5>
                                <p className="m-0">Attorney </p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
                            "Ms. Armstrong
                            Thank you for your assitance in my wreck, my case was settled and the monetary captital as
                            well as the physcial therapy I recieved defenitely helped through the hard time. Ms
                            Armstrong you are persistant in your work and will do what I truly feel others can not Thank
                            you!""
                        </div>
                        <div className="d-flex align-items-center pt-3">
                            <img className="img-fluid rounded-circle" src="/img/testimonial-3.jpg"
                                 style={{width: "80px", height: "80px"}} alt=""/>
                            <div className="pl-4">
                                <h5>Gregory C.</h5>
                                <p className="m-0">Student</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
                            Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr clita lorem
                        </div>
                        <div className="d-flex align-items-center pt-3">
                            <img className="img-fluid rounded-circle" src={testimonialImage4}
                                 style={{width: '80px', height: '80px'}} alt=""/>
                            <div className="pl-4">
                                <h5>Client Name</h5>
                                <p className="m-0">Profession</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Testimonial End --> */}


        {/* <!-- Footer Start --> */}
        <div className="container-fluid bg-secondary text-white pt-5 px-sm-3 px-md-5" style={{marginTop: "90px"}}>
            <div className="row mt-5">
                <div className="col-lg-4">
                    <div className="d-flex justify-content-lg-center p-4"
                         style={{background: "rgba(256, 256, 256, .05)"}}>
                        <i className="fa fa-2x fa-map-marker-alt text-primary"></i>
                        <div className="ml-3">
                            <h5 className="text-white">Our Office</h5>
                            <p className="m-0">Law Offices of Melodee Armstrong,PC<br/>325 N St. Paul<br/>Suite
                                2250<br/> Dallas TX</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex justify-content-lg-center p-4"
                         style={{background: "rgba(256, 256, 256, .05)"}}>
                        <i className="fa fa-2x fa-envelope-open text-primary"></i>
                        <div className="ml-3">
                            <h5 className="text-white">Email Us</h5>
                            <p className="m-0">melodee@melodeearmstrong.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex justify-content-lg-center p-4"
                         style={{background: "rgba(256, 256, 256, .05)"}}>
                        <i className="fa fa-2x fa-phone-alt text-primary"></i>
                        <div className="ml-3">
                            <h5 className="text-white">Call Us</h5>
                            <p className="m-0">214-573-2590</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-lg-3 col-md-6 mb-5">
                    <a href="/index.html" className="navbar-brand">
                        <h1 className="m-0 mt-n2 display-8 text-primary text-uppercase">
                            <img src="/img/images/LOMA-emblem.png" alt="Logo" className="navbar-brand"
                                 style={{height: "80px"}}/>
                        </h1>
                    </a>
                    <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd
                        et</p>
                    <div className="d-flex justify-content-start mt-4">
                        <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i
                            className="fab fa-twitter"></i></a>
                        <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i
                            className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i
                            className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i
                            className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="font-weight-semi-bold text-primary mb-4">Popular Links</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                        <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About</a>
                        <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Services</a>
                        <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Attorney</a>
                        <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Contact</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="font-weight-semi-bold text-primary mb-4">Quick Links</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>FAQs</a>
                        <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Help</a>
                        <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Terms</a>
                        <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Privacy</a>
                        <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Site Map</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="font-weight-semi-bold text-primary mb-4">Newsletter</h4>
                    <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor.
                        Accu kasd sed ea duo ipsum.</p>
                    <div className="w-100">
                        <div className="input-group">
                            <input type="text" className="form-control border-0" style={{padding: "25px"}}
                                   placeholder="Your Email"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary px-4">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-4 mt-5 mx-0" style={{background: "rgba(256, 256, 256, .05)"}}>
                <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                    <p className="m-0 text-white">&copy; <a className="font-weight-bold"
                                                            href="#">melodeearmstrong.com</a>. All Rights Reserved.</p>
                </div>
                <div className="col-md-6 text-center text-md-right">
                    <p className="m-0 text-white">Designed by Gregory Chikaeze, <a className="font-weight-bold"
                                                                                   href="https://htmlcodex.com">HTML
                        Codex</a></p>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}


        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-primary px-3 back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </>
}

export default App;

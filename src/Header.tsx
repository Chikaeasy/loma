import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

export default function Header() {
  return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-lg-1 bg-white d-none d-lg-block">
                  <a href="/"
                     className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                      <h1 className="m-0 display-10 text-primary text-uppercase"><img
                          src="/img/images/LOMA-emblem-white-bg.jpg" alt="Logo" className="mr-2" style={{height: "80px"}}/>
                      </h1>
                  </a>
              </div>
              <div className="col-lg-11">
                  <div className="row bg-white border-bottom d-none d-lg-flex">
                      <div className="col-lg-7 text-left">
                          <div className="h-100 d-inline-flex align-items-center py-2 px-3">
                              <i className="fa fa-envelope text-primary mr-2"></i>
                              <small>melodee@melodeearmstrong.com</small>
                          </div>
                          <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                              <i className="fa fa-phone-alt text-primary mr-2"></i>
                              <small>214-573-2590</small>
                          </div>
                      </div>
                      <div className="col-lg-5 text-right">
                          <div className="d-inline-flex align-items-center p-2">
                              <a className="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                  <i className="fab fa-facebook-f"></i>
                              </a>
                              <a className="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                  <i className="fab fa-twitter"></i>
                              </a>
                              <a className="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                  <i className="fab fa-linkedin-in"></i>
                              </a>
                              <a className="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                  <i className="fab fa-instagram"></i>
                              </a>
                              <a className="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                  <i className="fab fa-youtube"></i>
                              </a>
                          </div>
                      </div>
                  </div>
                  <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
                      <a href="/index" className="navbar-brand d-block d-lg-none">
                          <h1 className="m-0 display-4 text-primary text-uppercase">Law Offices Of Meloddee
                              Armstrong</h1>
                      </a>
                      <button type="button" className="navbar-toggler" data-toggle="collapse"
                              data-target="#navbarCollapse">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                          <div className="navbar-nav mr-auto py-0">
                              <Link to="/" className="nav-item nav-link active">Home</Link>
                              <Link to="/about" className="nav-item nav-link">About</Link>
                              <Link to="/service" className="nav-item nav-link">Practice</Link>
                              <Link to="/team" className="nav-item nav-link">Office</Link>
                              <div className="nav-item dropdown">
                                  <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                                  <div className="dropdown-menu rounded-0 m-0">
                                      <a href="/" className="dropdown-item">Menu Item 1</a>
                                      <a href="/" className="dropdown-item">Menu Item 2</a>
                                      <a href="/" className="dropdown-item">Menu Item 3</a>
                                  </div>
                              </div>
                              <a href="/contact" className="nav-item nav-link">Contact</a>
                          </div>
                          <a href="" className="btn btn-primary mr-3 d-none d-lg-block">Get A Quote</a>
                      </div>
                  </nav>
              </div>
          </div>
      </div>
  );
}


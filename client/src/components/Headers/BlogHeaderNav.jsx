import React from "react";
import HomeBG from "../../assets/images/HomeBig.png";
import SubscribeModal from "../Modal/SubscribeModal";
import { Link as ScrollLink } from 'react-scroll';

const BlogHeaderNav = () => {

  return (
    <div
      className="shadow"
      style={{
        backgroundImage: `url(${HomeBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "100vh",
        zIndex: "-1",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </symbol>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check" viewBox="0 0 16 16">
          <title>Check</title>
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </symbol>
      </svg>

        <header>
            {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary shadow-2">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button className="navbar-toggler" type="button" data-mdb-collapse-init
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>

      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* Logo */}
          <a className="navbar-brand me-2 d-none d-lg-inline-block" href="/"><i
              className="fas fa-globe-europe text-primary"></i></a>

          <li className="nav-item fw-bold">
            <a className="nav-link" href="#!">Start here</a>
          </li>
          {/** */}
          <li className="nav-item">
            <a className="nav-link" href="#!">Articles</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">eBooks</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">Newsletter</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">Contact</a>
          </li>
        </ul>


      </div>
      <SubscribeModal/>
    </div>
    {/* Container wrapper */}
  </nav>
  <div className="container">
            <div className="mb-4 pb-md-4 mx-auto text-center w3-padding-64">
            <div className="w3-container w3-content ">           
                 <div className="row justify-content-center align-items-center">
                  <div className="col-sm-12 col-md-2 col-lg-2"></div>
                  <div className="col-sm-12 col-md-8 col-lg-8">
    <h1 className="display-4 fw-normal text-white text-body-emphasis">
    <span style={{
                  fontSize: "4.5rem",
                }}>TWO</span>  
                <span style={{ fontSize: "4.5rem",  fontFamily:'Dancing Script'}}>Faced</span>
              </h1>
                <h2 className="text-white ">
             <i className="fw-light" style={{ color: "#FDC5E8", fontSize: "3.5rem" }}> Design & Development </i> 
                </h2>
    <p className="fs-5 text-body-secondary text-white ">
     The dual nature of technology! Join us as we navigate the exciting and ever-evolving landscape of design and development, showcasing the two faces of technology that shape our digital world.
    </p>
    <div className="p-2">
                 
                 <ScrollLink to="email-graphics" smooth={true} duration={500}>
                     <button type="button" className="btn btn-light mx-2 w3-round-xlarge">
                         <b style={{ textShadow: "2px 2px 4px #F63DB0",}}>Get Started</b>
                     </button>
                 </ScrollLink>
                                
                                </div>
    </div>
                  <div className="col-sm-12 col-md-2 col-lg-2"></div>
                 </div>
  </div>
            </div>
          </div>
      
        </header>
    

          </div>
 
  );
};

export default BlogHeaderNav;

import React from 'react';
import header from './images/header.svg';
import {NavLink} from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                    <h1>{props.name} <br></br> <strong className="brand-name">UF Developers</strong></h1>
                                    <h2 className="my-3">We are the team of talented developers making websites</h2>
                                    <div className="mt-3">
                                        <NavLink className="btn-get-started" to={props.visit}>{props.btntext}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                  <img src={header} alt="" className="img-fluid animated"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Common;
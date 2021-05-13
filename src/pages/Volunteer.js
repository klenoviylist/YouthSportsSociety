import React from 'react';
import { Link } from 'react-router-dom';

function Volunteer() {
    return (
        <div className="container-md">
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="../images/volunteer.jpeg" className="d-block mx-lg-auto img-fluid mb-2" alt="volunteer-img"
                        width="700" height="400" loading="lazy"></img>
                </div>
                <div className="col-lg-6">
                    <h2 className="featurette-heading page-title">Volunteer.</h2>
                    <p className="lead p-text">
                        One of our goals is to make sports affordable and available to all.
                        The volunteerism that we rely on is an essential ingredient to making our programms work.
                        In addition to facilitating the benefits of youth sports, the community participation
                        of our volunteers benefits both the community and the volunteers.
                </p>
                    <p className="lead p-text">
                        If you have soccer skills or knowledge, please contact us to volunteer and share
                        that knowledge. If you are new to soccer but are interested in the coaching
                        experience, do not be afraid to volunteer to help. We will train you and help you
                        gain the necessary skills and knowledge to be able to contribute.
                </p>
                    <p className="lead p-text">
                        We help to support non-profit youth
                        sports clubs, by educating society about the importance of youth sports,
                        and also by looking for coach volunteers.
                </p>
                </div>
            </div>
            <Link to="/contact" className="btn btn-outline-primary btn-lg">Contact us to volunteer</Link>
        </div>
    </div>
    )
}

export default Volunteer;
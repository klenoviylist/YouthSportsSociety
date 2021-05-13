import React, { Fragment } from 'react';
import './Home.scss'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Fragment>

            <div className="container-fluid">
                <div className="container-0">
                    <h1 className="main-title">Youth Sports Society</h1>
                    <img className="main-image" src="../images/kids-sport.jpeg" alt="kids-sport"></img>
                </div>

                <div className="container-1 px-4 pt-5 text-center border-bottom">
                    <h2 className="display-4 fw-bold text-muted">Committed to </h2>
                    <h2 className="display-4 fw-bold text-muted">building a better tomorrow</h2>

                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">We are striving to build better tomorrow for our kids through sports,
                    health, friendship, equal opportunities, setting goals, and developing potential.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <Link to="/about" className="btn btn-primary btn-lg px-4 me-sm-3 bt1">About us</Link>
                            <Link to="/volunteer" className="btn btn-outline-secondary btn-lg px-4 bt1">Volunteer</Link>
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="container px-5">
                            <img src="../images/cones.jpeg" className="img-fluid border rounded-3 mb-4"
                                alt="cones-img" width="700" height="500" loading="lazy"></img>
                        </div>
                    </div>
                </div>


                <div className="b-example-divider"></div>

                <div className="container-2 col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="../images/sport.jpeg" className="d-block mx-lg-auto img-fluid mb-2" alt="sport-img"
                                width="700" height="500" loading="lazy"></img>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3 section-title">Sports</h1>
                            <p className="lead">Sports bring people together from all over the world, regardless of their nationality,
                            religion, culture, or skin color...</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <Link to="/sports" className="btn btn-primary btn-lg px-4 me-md-2">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="b-example-divider"></div>

                <div className="container-3 col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="../images/health.jpeg" className="d-block mx-lg-auto img-fluid mb-2" alt="health-img"
                                width="700" height="500" loading="lazy"></img>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3 section-title">Health</h1>
                            <p className="lead">To help aid physical development in early childhood, children need a balanced diet,
                           plenty of sleep and one hour of exercise each day...</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <Link to="/health" className="btn btn-primary btn-lg px-4 me-md-2">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="b-example-divider"></div>

                <div className="container-4 col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="../images/friendship.jpeg" className="d-block mx-lg-auto img-fluid mb-2" alt="friendship-img"
                                width="700" height="500" loading="lazy"></img>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3 section-title">Character</h1>
                            <p className="lead">No other thing in life affords children such opportunity to develop
                            positive character traits and to soak up many quality values as sport does...</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <Link to="/character" className="btn btn-primary btn-lg px-4 me-md-2">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-5">


                    <div className="card text-center mx-auto">
                        <div class="card-body">
                            <h3>Contribute.</h3>
                            <p>Support youth sports. Volunteers welcome.</p>
                            <Link to="/volunteer" className="btn btn-primary">Volunteer</Link>
                        </div>
                    </div>


                    <div className="card text-center mx-auto">
                        <div class="card-body">
                            <h3 className="card-title">Contact us.</h3>
                            <p className="card-text">Feel free to contact us for more information.</p>
                            <Link to="/contact" className="btn btn-primary">Contact</Link>
                        </div>

                    </div>

                </div>


            </div>

        </Fragment>
    )
}

export default Home;
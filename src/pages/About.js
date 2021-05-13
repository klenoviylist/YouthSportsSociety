import React from 'react';

function About() {
    return (
        <div className="container-md">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="../images/about.jpeg" className="d-block mx-lg-auto img-fluid mb-2" alt="health-img"
                            width="400" height="400" loading="lazy"></img>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="featurette-heading page-title">About us.</h2>
                        <p className="lead p-text">
                            Youth Sports Society is a non-profit society which aspires
                            to make our community better by making sports available to the youth of our community.
                    </p>
                        <p className="lead p-text">
                            We believe that participation in youth sports greatly benefits our kids.
                            Beyond the benefits of physical exercise, a child participating in youth sports learns about
                            teamwork, responsibility, respect for others, the benefits of goal settings and much more.
                    </p>
                        <p className="lead p-text">
                            Youth Sports Society helps to support non-profit youth
                            sports clubs, by educating society about the importance of youth sports,
                            and also by looking for coach volunteers.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
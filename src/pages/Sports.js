import React from 'react';

function Sports() {
    return (
        <div className="container-md">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="../images/sport.jpeg" className="d-block mx-lg-auto img-fluid mb-2" alt="health-img"
                            width="700" height="500" loading="lazy"></img>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="featurette-heading page-title">Sports.</h2>
                        <p className="lead p-text">
                            Sports bring people together from all over the world, regardless of their nationality,
                            religion, culture, or skin color.
                    </p>
                        <p className="lead p-text">
                            By playing sports children develop physical skills, exercise,
                            have fun, learn to be a team member, learn about play fair, improve self-esteem.
                    </p>
                        <p className="lead p-text">
                            Playing sports enables children to create friendships they otherwise
                            might not have formed. For example, the friendships professional athletes
                            create on the field remain intact even when they are not playing sports,
                            and often last a lifetime.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sports;
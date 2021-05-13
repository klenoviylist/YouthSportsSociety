import React from 'react';

function Character() {
    return (
        <div className="container-md">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="../images/friendship.jpeg" className="d-block mx-lg-auto img-fluid mb-2" alt="health-img"
                            width="700" height="500" loading="lazy"></img>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="featurette-heading page-title">Character.</h2>
                        <p className="lead p-text">
                            No other thing in life affords children such opportunity to develop
                            positive character traits and to soak up many quality values as sport does.
                    </p>
                        <p className="lead p-text">
                            Kids’ character and moral principles are formed through fair play.
                            Moreover, children who are actively engaged in sports can be good role models
                            for their peers from school, neighborhood, and inspire
                            them to start playing some sports as well.
                    </p>
                        <p className="lead p-text">
                            Through sports kids learn about success and failure.
                            Losing often motivates them to work even harder for next time.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Character;
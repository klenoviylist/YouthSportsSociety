import React from 'react';

function Health() {
    return (
        <div className="container-md">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="../images/health.jpeg" className="d-block mx-lg-auto img-fluid mb-2" alt="health-img"
                            width="700" height="500" loading="lazy"></img>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="featurette-heading page-title">Health.</h2>
                        <p className="lead p-text">
                            To help aid physical development in early childhood, children need a balanced diet,
                            plenty of sleep and one hour of exercise each day. Sport helps children to develop
                            stronger muscles, bones and joints, stronger heart, decreased risk of type 2 diabetes.
                            The physical benefits of sports have the significant impact on children.
                    </p>
                        <p className="lead p-text">
                            Better vision. Children who spend time outdoors playing,
                            especially in organized sports, are less likely to develop vision problems.
                    </p>
                        <p className="lead p-text">
                            Healthy weight. Obesity is increasing in children, but data show that kids
                            who are more active, especially after school, are more likely to be of normal weight.
                    </p>
                        <p className="lead p-text">
                            Motor skills development. Sports participation helps with coordination and
                            learning new skills.
                    </p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Health;
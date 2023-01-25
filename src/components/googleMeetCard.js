import React from 'react';

const googleMeetCard = () => {
    return (
        <div className="form-row my-3">
            <div className="col">
                <div className="card my-2">
                    <div className="card-header">
                        <div className="row no-gutters align-items-center">
                            <div className="ml-2 col">
                                <img className="dropdown-meeting-type-logo" src="google-meet.png"></img>
                                <span className="mb-0 tw-text-base">Google meet
                                </span>
                            </div>
                            <div className="mx-4 col-auto">
                            </div>
                        </div>
                    </div>
                    <p className="card-text tw-p-4 tw-text-sm google-meet-card-text">
                        <div className="form-row">
                            <div className="col">
                                <span>Meeting link would generate automatically and send to all participants</span>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default googleMeetCard;








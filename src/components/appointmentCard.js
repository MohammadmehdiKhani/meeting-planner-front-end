import React from 'react';

const AppointmentCard = (props) => {
    return (
        <div className="form-row my-3">
            <div className="col">
                <div className="card my-2">
                    <div className="card-header">
                        <div className="row no-gutters align-items-center">
                            <div className="ml-2 col">
                                <div className="header-of-card">
                                    <div>
                                        <img className="dropdown-meeting-type-logo" src="location.png"></img>
                                        <span className="mb-0 tw-text-base">Apoinment</span>
                                    </div>

                                    <img className="delete-card-icon" src="delete.png" onClick={() => props.deleteThisCard()}></img>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className="card-text tw-p-4 tw-text-sm google-meet-card-text">
                        <div className="form-row">
                            <div className="col">
                                <label className="p-2">Address</label>
                                <input className="form-control apoinment-card-address-input" type="text" placeholder="Enter the address" id="address-input" onChange={(e) => props.appoinmentAddressFiller(e.target.value)}></input>
                                <div className="invalid-feedback">{props.addressError}</div>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
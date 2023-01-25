import React from 'react';
import TimePicker from './timePicker';

const Popup = (props) => {

    return (
        <div className='popup'>
            <div className="popup_open">

                <div className='myDiv'>
                    <h5 className='col mt-2 new-exeptional-time-label'>+ New exeptional time</h5>
                    <img className="delete-card-icon close-icon" src='close.png' onClick={() => props.deactivePopup()}></img>
                </div>


                <div className='haaaa'>
                    <hr></hr>
                </div>
                <div className='secondDiv'>
                    <div className='thirdDiv'>
                        <fieldset className="form-group required">
                            <img className="plus-icon m-1" src="time.png"></img>
                            <label>
                                <span className="label-of-event-setup-form-input">Date</span>
                            </label>
                            <div className="input-group myInputGroup" role="group">
                                <input className="form-control" placeholder="YYYY" maxlength="2" type="number" min="0" max="2030" step="1" inputMode="numeric"></input>
                                <input className="form-control" placeholder="MM" maxlength="2" type="number" min="0" max="12" step="1" inputMode="numeric"></input>
                                <input className="form-control" placeholder="DD" maxlength="2" type="number" min="0" max="31" step="1" inputMode="numeric"></input>
                            </div>
                            <img className="green-plus mt-2" src="green-plus.png" ></img>
                        </fieldset>
                    </div>
                    <div className='number4Div'>
                        <TimePicker></TimePicker>
                        <TimePicker></TimePicker>
                    </div>
                </div>

                <div className='haaaa'>
                    <hr></hr>
                </div>

                <div className='hooou'>
                    <button className="btn btn-success save-btn-of-event-setup full-width" type="submit">
                        <div className="text-inside-save-btn-and-reset-btn">Save</div>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Popup;

/*

        <div className='popup'>
            <div className="popup_open">
                <span className='m-5'>New exeptional time</span>

                <div className="form-row ml-4 mt-4 btns-row-of-save-and-quit-of-event-setup">
                    <button className="btn btn-success save-btn-of-event-setup" type="submit">
                        <div className="text-inside-save-btn-and-reset-btn">Save</div>
                    </button>

                    <button className="btn btn-light quit-btn-of-event-setup" type="reset" onClick={() => props.deactivePopup()}>
                        <div className="text-inside-save-btn-and-reset-btn">Cancel</div>
                    </button>
                </div>
            </div>
        </div>

/*


/*

<div className='popup'>
    <div className='popup_open'>
        <h1>hello</h1>
        <button>X</button>
    </div>
</div>

*/
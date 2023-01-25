import React from 'react';

const TimePicker = (props) => {
    return (
        <div class="form-row myRow mt-3">
            <div className="col hour-col">
                <fieldset className="form-group required">
                    <div className="input-group myInputGroup" role="group">
                        <input id={`start-hour-input${props.myId}`} value={props.startHour} onChange={(e) => props.fillStartHour(e.target.value, props.myId)} className="form-control" placeholder="HH" maxlength="2" type="number" min="0" max="23" step="1" inputMode="numeric"></input>
                        <input id={`start-minute-input${props.myId}`} value={props.startMinute} onChange={(e) => props.fillStartMinute(e.target.value, props.myId)} className="form-control" placeholder="MM" maxlength="2" type="number" min="0" max="59" step="1" inputMode="numeric"></input>
                    </div>
                </fieldset>
            </div >

            <div className='dash-between-time-pickers'>-</div>

            <div className="col hour-col">
                <fieldset className="form-group required">
                    <div className="input-group myInputGroup" role="group">
                        <input id={`end-hour-input${props.myId}`} value={props.endingHour} onChange={(e) => props.fillEndingHour(e.target.value, props.myId)} className="form-control" placeholder="HH" maxlength="2" type="number" min="0" max="23" step="1" inputMode="numeric"></input>
                        <input id={`end-minute-input${props.myId}`}value={props.endingMinute} onChange={(e) => props.fillEndingMinute(e.target.value, props.myId)} className="form-control" placeholder="MM" maxlength="2" type="number" min="0" max="59" step="1" inputMode="numeric"></input>
                    </div>
                </fieldset>
            </div>
            <img src='delete.png' className='delete-card-icon' onClick={() => props.deleteThisItem(props.myId)}></img>
        </div>
    );
};

export default TimePicker;
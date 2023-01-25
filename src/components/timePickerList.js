import React from 'react';
import TimePicker from './timePicker';
import { useState } from "react";

const TimePickerList = (props) => {
    const [data, setData] = useState({ timePickers: [] });

    const addTimePicker = () => {
        let myTimePickers = data.timePickers;
        let lastId;
        if (data.timePickers.length != 0) {
            lastId = myTimePickers[myTimePickers.length - 1].id;
        }
        else {
            lastId = 0
        }

        myTimePickers.push({ id: lastId + 1 });
        setData({ timePickers: myTimePickers });
        console.log(myTimePickers)
    }

    const deleteThisTimePicker = (itemId) => {
        let myTimePickers = data.timePickers;
        for (let index = 0; index < data.timePickers.length; index++) {
            if (data.timePickers[index].id == itemId)
                myTimePickers.splice(index, 1)
        }
        setData({ timePickers: myTimePickers });
        console.log(myTimePickers)
    }

    const fillStartHour = (val, itemId) => {
        let myTimePickers = data.timePickers;
        for (let index = 0; index < data.timePickers.length; index++) {
            if (data.timePickers[index].id == itemId) {
                myTimePickers[index].startHour = val;
            }
        }
        setData({ timePickers: myTimePickers });
    }

    const fillStartMinute = (val, itemId) => {
        let myTimePickers = data.timePickers;
        for (let index = 0; index < data.timePickers.length; index++) {
            if (data.timePickers[index].id == itemId) {
                myTimePickers[index].startMinute = val;
            }
        }
        setData({ timePickers: myTimePickers });
    }

    const fillEndingHour = (val, itemId) => {
        let myTimePickers = data.timePickers;
        for (let index = 0; index < data.timePickers.length; index++) {
            if (data.timePickers[index].id == itemId) {
                myTimePickers[index].endingHour = val;
            }
        }
        setData({ timePickers: myTimePickers });
    }

    const fillEndingMinute = (val, itemId) => {
        let myTimePickers = data.timePickers;
        for (let index = 0; index < data.timePickers.length; index++) {
            if (data.timePickers[index].id == itemId) {
                myTimePickers[index].endingMinute = val;
            }
        }
        setData({ timePickers: myTimePickers });
    }

    const listItems = data.timePickers.map((t) =>
        <TimePicker key={t.id.toString()} startHour={t.startHour} startMinute={t.startMinute} endingHour={t.endingHour} endingMinute={t.endingMinute} fillEndingMinute={(e, id) => fillEndingMinute(e, id)} fillEndingHour={(e, id) => fillEndingHour(e, id)} fillStartMinute={(e, id) => fillStartMinute(e, id)} fillStartHour={(e, id) => fillStartHour(e, id)} myId={t.id} deleteThisItem={(itemId) => deleteThisTimePicker(itemId)}></TimePicker>
    );

    return (
        <div>

            <div class="event-type-availability-weekly-hours col">
                <hr></hr>
                <div class="">
                    <div class="row toolbar no-gutters">
                        <div class="col align-self-center">
                            <span class="bold-text">
                                {props.day}
                            </span>
                        </div>

                        <div className="col stick-to-right">
                            <button type="button" class="btn btn-light" onClick={() => addTimePicker()}>
                                <img className="plus-icon" src="plus.png" ></img>
                            </button>
                        </div>
                    </div>

                    {!data.timePickers.length && <div class="unavailable-day">Not avalable</div>}

                </div>
            </div>

            {listItems}


        </div>
    );
};

export default TimePickerList;
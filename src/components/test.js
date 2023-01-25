import React from 'react';

const Test = (props) => {

    return (
        <div>
            <div className='row'>
                <div className='col'>New exeptional time</div>
            </div>

            <div className='row'>
                <div className='col'>
                    <button className=" btn btn-light quit-btn-of-event-setup" type="reset">
                        <div className="text-inside-save-btn-and-reset-btn">Cancel</div>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Test;

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
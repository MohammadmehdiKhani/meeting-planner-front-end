import React, { useState } from 'react';
import EventInitialSetting from './eventInitialSetting';
import SidebarMenu from './sidebarMenu';
import Invite from './invite';
import FreeTimes from './freeTimes';
import Test from './test'

const EventSetup = () => {
    const [page, SetPage] = useState("1");
    return (
        <div className="page-body body-container tw-max-w-6xl tw-px-4 container-xl">
            <div className="row no-gutters">

                <div className="col side-bar-col">
                    <SidebarMenu pageFiller={(e) => SetPage(e)}></SidebarMenu>
                </div>

                <div className="col-9">
                    <div className="page-content hey">
                        <div className="event-type-base-form">
                            {(page == "1") && <EventInitialSetting></EventInitialSetting>}
                            {(page == "2") && <FreeTimes></FreeTimes>}
                            {(page == "3") && <Test></Test>}
                            {(page == "4") && <h2 className='mt-4'>4th page</h2>}
                            {(page == "5") && <Invite></Invite>}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EventSetup;
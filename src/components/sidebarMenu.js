import React from 'react';
import { useState, useEffect } from "react";

const SidebarMenu = (props) => {
    const [page, setPage] = useState("1");

    useEffect(() => {
        const idArray = ["initial-setup", "avalable-times", "advance-setup", "payment", "inviting"];

        for (let i = 0; i < idArray.length; i++) {
            let id = idArray[i];
            if (document.getElementById(id).classList.contains('choosed'))
                document.getElementById(id).classList.remove('choosed');
        }


        if (page == 1)
            document.getElementById("initial-setup").classList.add('choosed');

        if (page == 2)
            document.getElementById("avalable-times").classList.add('choosed');

        if (page == 3)
            document.getElementById("advance-setup").classList.add('choosed');

        if (page == 4)
            document.getElementById("payment").classList.add('choosed');

        if (page == 5)
            document.getElementById("inviting").classList.add('choosed');

            props.pageFiller(page);

    }, [page])

    return (
        <div className="page-nav position-sticky col-3">
            <ul className="nav setting-navbar tw-overflow-x-auto tw-whitespace-nowrap tw-flex-nowrap flex-column position-fixed min-width-mobile">
                <li className="nav-item" id="initial-setup">
                    <a aria-current="page" className="nav-link active d-flex" target="_self" onClick={() => setPage("1")}>
                        <img className="sidebar-icon" src="form.png"></img>
                        <div className="mytext">Initial setup</div>
                    </a>
                </li>
                <li className="nav-item" id="avalable-times">
                    <a className="nav-link d-flex" target="_self" onClick={() => { setPage("2"); }}>
                        <img className="sidebar-icon" src="time.png"></img>
                        <div className="mytext">Avalable times</div>
                    </a>
                </li>
                <li className="nav-item" id="advance-setup">
                    <a className="nav-link d-flex" target="_self" onClick={() => setPage("3")}>
                        <img className="sidebar-icon" src="setting.png"></img>
                        <div className="mytext">Advance setup</div>
                    </a>
                </li>
                <li className="nav-item" id="payment">
                    <a className="nav-link d-flex" target="_self" onClick={() => setPage("4")}>
                        <img className="sidebar-icon" src="payment.png"></img>
                        <div className="mytext">Payment</div>
                    </a>
                </li>
                <li className="nav-item" id="inviting">
                    <a className="nav-link d-flex" target="_self" onClick={() => setPage("5")}>
                        <img className="sidebar-icon" src="invite.png"></img>
                        <div className="mytext">Inviting</div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SidebarMenu;

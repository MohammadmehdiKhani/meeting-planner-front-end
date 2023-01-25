import React from 'react';
import { useState, useEffect } from "react";
import GoogleMeetCard from './googleMeetCard';
import AppointmentCard from './appointmentCard';
import PhoneCallCard from './phoneCallCard';
import axiox from "axios";

const EventInitialSetting = () => {
  const [title, setTitle] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [phoneCall, setPhoneCall] = useState(false);
  const [appoinment, setAppoinment] = useState(false);
  const [language, setLanguage] = useState("English");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [meetingMessage, setMeetingMassage] = useState("Hey there, let's have a meeting!");
  const [link, setLink] = useState("");


  const [titleError, setTitleError] = useState("");
  const [hourError, setHourError] = useState("");
  const [minuteError, setMinuteError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [linkError, setLinkError] = useState("");

  useEffect(() => {
    if (title.length < 3)
      setTitleError("Title must be at least 3 chars");
    if (title.length >= 3)
      setTitleError("")

    if (!hour)
      setHourError("Enter hour");
    else
      setHourError("")

    if (!minute)
      setMinuteError("Enter minute");
    else
      setMinuteError("");

    if ((phoneNumber.length != 11 || isNaN(phoneNumber) && phoneCall))
      setPhoneNumberError("Enter a valid phone number that contains 11 digits");
    else
      setPhoneNumberError("");

    if (!address && appoinment)
      setAddressError("Address could not be empty");
    else
      setAddressError("");

    if (link.length < 5)
      setLinkError("Link length must be 5 at least");
    else
      setLinkError("");

  }, [title, hour, minute, phoneNumber, address, language, meetingMessage, link, appoinment, phoneCall])


  useEffect(() => {
    if (appoinment == false) {
      setAddress("");
      setAddressError("");
    }
    if (phoneCall == false) {
      setPhoneNumber("");
      setPhoneNumberError("");
    }
  }, [appoinment, phoneCall])

  const makeElementFeedbackInvalid = (id) => {
    if (document.getElementById(id).classList.contains('is-valid')) {
      document.getElementById(id).classList.remove('is-valid');
    }
    document.getElementById(id).classList.add('is-invalid');
  }

  const makeElementFeedbackValid = (id) => {
    if (document.getElementById(id).classList.contains('is-invalid')) {
      document.getElementById(id).classList.remove('is-invalid');
    }
    document.getElementById(id).classList.add('is-valid');
  }

  const manageInputsFeedbacks = () => {

    const idArray = ["title-input", "hour-input", "minute-input", "phoneNumber-input", "address-input", "link-input"];
    const errorStateArray = [titleError, hourError, minuteError, phoneNumberError, addressError, linkError];

    for (let i = 0; i < idArray.length; i++) {

      if ((!phoneCall && i == 3) || (!appoinment && i == 4)) {
        console.log();
        continue;
      }

      if (!errorStateArray[i])
        makeElementFeedbackValid(idArray[i]);
      else
        makeElementFeedbackInvalid(idArray[i]);
    }

  }

  const handleEventInitialSettingSubmit = async (e) => {
    e.preventDefault();

    try {
      makeElementFeedbackValid("meetingMassage-input");
      manageInputsFeedbacks();
      if (!titleError && !hourError && !minuteError && !phoneNumberError && !addressError) {
        alert("ok")
        //const response = await axiox.post("api-url", "this is body");
      }
    }
    catch (error) {
      alert("oops");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <form className="login-form" noValidate onSubmit={handleEventInitialSettingSubmit}>
            <div className="form-row">
              <div className="col">
                <fieldset className="form-group required">
                  <label>
                    <span className="label-of-event-setup-form-input">Title</span>
                  </label>
                  <input className="form-control mt-1" type="text" placeholder="Enter a title" id="title-input" onChange={(e) => setTitle(e.target.value)}></input>
                  <div className="invalid-feedback">{titleError}</div>
                </fieldset>
              </div>
            </div>

            <div className="form-row event-type-duration label-of-event-setup-form-input mt-4">
              Duration
            </div>

            <div className="form-row event-type-duration mt-1">

              <div className="col hour-col">
                <fieldset className="form-group required">
                  <div className="input-group" role="group">
                    <input className="form-control" type="number" min="0" max="24" step="1" inputMode="numeric" id="hour-input" onChange={(e) => setHour(e.target.value)}></input>
                    <div className="input-group-append">
                      <div className="input-group-text appending-hour-minute-label">Hour</div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="col minute-col">
                <fieldset className="form-group required">
                  <div className="input-group" role="group">
                    <input className="form-control" type="number" min="0" max="60" step="1" inputMode="numeric" id="minute-input" onChange={(e) => setMinute(e.target.value)}></input>
                    <div className="input-group-append">
                      <div className="input-group-text appending-hour-minute-label">Minute</div>
                    </div>
                  </div>
                </fieldset>
              </div>

            </div>

            <div className="form-row mt-4">
              <div className="col">
                <fieldset className="form-group">
                  <label className="label-of-event-setup-form-input">Meeting type</label>

                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle full-width mt-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      + Choose one or more
                    </button>
                    <ul className="dropdown-menu full-width" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <a className="dropdown-item" onClick={() => setPhoneCall(true)}>
                          <img className="dropdown-meeting-type-logo" src="phone-call.png"></img>
                          <span >Phone call</span>
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" onClick={() => setAppoinment(true)}>
                          <img className="dropdown-meeting-type-logo" src="location.png"></img>
                          <span>appoinment</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                </fieldset>
              </div>
            </div>

            <GoogleMeetCard></GoogleMeetCard>
            {phoneCall && <PhoneCallCard deleteThisCard={() => setPhoneCall(false)} phoneNumberFiller={(e) => setPhoneNumber(e)} phoneNumberError={phoneNumberError}></PhoneCallCard>}
            {appoinment && <AppointmentCard deleteThisCard={() => setAppoinment(false)} appoinmentAddressFiller={(e) => setAddress(e)} addressError={addressError}></AppointmentCard>}

            <div className="form-row mt-4">
              <div className="col">
                <fieldset className="form-group">
                  <label className="label-of-event-setup-form-input">Language</label>

                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle full-width mt-1" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      Choose the meeting language
                    </button>
                    <ul className="dropdown-menu full-width" aria-labelledby="dropdownMenuButton2">
                      <li><a className="dropdown-item" onClick={() => setLanguage("Persian")}>Persian</a></li>
                      <li><a className="dropdown-item" onClick={() => setLanguage("English")}>English</a></li>
                    </ul>
                  </div>

                </fieldset>
              </div>
            </div>

            <div className="form-row mt-4">
              <div className="col">
                <fieldset class="form-group">
                  <label className="mb-1">
                    <span className="label-of-event-setup-form-input">Message is showing to participants</span>
                  </label>
                  <textarea className="form-control" rows="4" id="meetingMassage-input" value={meetingMessage} onChange={(e) => setMeetingMassage(e.target.value)}></textarea>
                </fieldset>
              </div>
            </div>

            <div className="form-row mt-4">
              <div className="col">
                <fieldset className="form-group required">
                  <div className="input-group" role="group">
                    <div className="input-group-append">
                      <div className="input-group-text appending-base-url-label">zeeg.me/mm.Khani/</div>
                    </div>
                    <input className="form-control link-input" type="text" id="link-input" onChange={(e) => setLink(e.target.value)}></input>
                    <div className="invalid-feedback">{linkError}</div>
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="form-row mt-4 btns-row-of-save-and-quit-of-event-setup">
              <button className="btn btn-success save-btn-of-event-setup" type="submit">
                <div className="text-inside-save-btn-and-reset-btn">Save</div>
              </button>

              <button className="btn btn-light quit-btn-of-event-setup" type="reset">
                <div className="text-inside-save-btn-and-reset-btn">Reset</div>
              </button>
            </div>
          </form>
        </div>
      </div>


    </div>

  )
};
export default EventInitialSetting;
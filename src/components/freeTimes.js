import React from 'react';
import TimePicker from './timePicker';
import TimePickerList from './timePickerList';
import Popup from './popup'
import { useState } from "react";

const FreeTimes = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div class="card event-type-availability-form availability-form-content mt-4 mb-4 col-10">
            <div class="card-body">
                <div class="card-group">
                    <div class="card weekly-hours-card">
                        <div class="card-body">
                            <div class="row align-items-end">
                                <div class="col">
                                    <span class="avalable-times-text">Avalable times</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <p class="pg-description my-2">
                                        Which times you are free? Set your free times here.
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                <TimePickerList day="Saturday"></TimePickerList>
                            </div>

                            <div class="row">
                                <TimePickerList day="Sunday"></TimePickerList>
                            </div>

                            <div class="row">
                                <TimePickerList day="Monday"></TimePickerList>
                            </div>

                            <div class="row">
                                <TimePickerList day="Tuesday"></TimePickerList>
                            </div>

                            <div class="row">
                                <TimePickerList day="Wednesday"></TimePickerList>
                            </div>

                            <div class="row">
                                <TimePickerList day="Thursday"></TimePickerList>
                            </div>

                            <div class="row">
                                <TimePickerList day="Friday"></TimePickerList>
                            </div>

                        </div>
                    </div>

                    <div class="card date-overrides-card">
                        <div class="card-body">
                            <div class="row align-items-end">
                                <div class="col">
                                    <span class="exeptional-times-text">
                                        Exeptional times
                                    </span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <p class="pg-description my-2">You can set exeptional times for your avalable times on a certain date.</p>
                                </div>
                            </div>
                            <div class="col">
                                <button onClick={() => setIsActive(true)} type="button" class="btn btn-outline-success" id='exeptonal-times-btn'>
                                    <span id="text-inside-exeptional-times-btn">
                                        + New exeptional time
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col">
                        <hr></hr>

                        <button className="btn btn-success save-btn-of-event-setup full-width" type="submit">
                            <div className="text-inside-save-btn-and-reset-btn">Save</div>
                        </button>
                    </div>
                </div>
            </div >
            {isActive && <Popup deactivePopup={() => setIsActive(false)}></Popup>}
        </div >
    );
};

export default FreeTimes;

/*


                                            <div class="form-row">
                                                <div class="col">
                                                    <fieldset class="form-group time-set-form-group">
                                                        <div>
                                                            <div class="timepicker">
                                                                <div class="timepicker-input-group is-valid">
                                                                    <input inputmode="numeric" placeholder="HH" maxlength="2" class="timepicker-input timepicker-input-hours" data-mask="##" data-mask-raw-value="00" data-mask-inited="true"></input>
                                                                    <div class="timepicker-input-two-dots">:</div>
                                                                    <input inputmode="numeric" placeholder="mm" maxlength="2" class="timepicker-input timepicker-input-minutes" data-mask="##" data-mask-raw-value="00" data-mask-inited="true"></input>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>

                                                <div class="tw-px-1 tw-pt-2 tw-text-center col-auto">
                                                    <div >-</div>
                                                </div>

                                                <div class="tw-p-0 col-auto col">
                                                    <button type="button" className="btn btn-remove btn-transparent-hover hover:tw-text-danger btn-light">
                                                        <img src='delete.png' className='delete-card-icon'></img>
                                                    </button>
                                                </div>
                                            </div>

*/

/*

<div class="card event-type-availability-form availability-form-content"
     <div class="card-body">
     <div class="card-group">
     <div class="card weekly-hours-card">
     <div class="card-body">
     <div class="row align-items-end">
     <div class="col">
     <span class="tw-text-lg tw-font-semibold">
     زمان‌های آزاد</span>
     </div>
     </div>
     <div class="row">
     <div class="tw-px-2 lg:tw-px-4 col">
     <p class="pg-description my-2">
     چه وقت‌هایی آزاد هستید؟ می‌توانید روزها و ساعت‌های آزادتان را تعیین کنید.
     </p>
     </div>
     </div>
     <div class="row">
     <div class="event-type-availability-weekly-hours col">
    <div  class="">
     <div  class="row toolbar no-gutters">
     <div  class="md:tw-pb-2 xl:tw-pb-0 col align-self-center">
     <span  class="tw-text-base tw-font-semibold">
     شنبه
     </span>
     </div>
     <div  class="toolbar-buttons col">
     <!----><div  role="toolbar" tabindex="0" class="btn-toolbar md:tw-pb-2 xl:tw-pb-0">
     <div  role="group" class="btn-group">
     <button  title="افزودن" type="button" class="btn btn-light">
     <svg  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
     <g >
     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
     </path>
     </g>
     </svg>
     </button>
     <button  id="btn-copy-0" title="اعمال بازه‌های زمانی به روزهای دیگر" type="button" class="btn btn-light">
     <svg  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="files" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-files b-icon bi">
     <g >
     <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z">
     </path>
     </g>
     </svg>
     </button>
     </div>
     </div>
     </div>
     </div>
     <form  autocomplete="off" class="">
     <div  class="unavailable-day">
     خارج از دسترس
     </div>
     </form>
     </div>
     </div>
     </div>
     <div class="row">
     <div class="event-type-availability-weekly-hours col">
     <hr class="tw-mt-2 tw-mb-0"><div  class="">
     <div  class="row toolbar no-gutters">
     <div  class="md:tw-pb-2 xl:tw-pb-0 col align-self-center">
     <span  class="tw-text-base tw-font-semibold">
     یک‌شنبه
     </span>
     </div>
     <div  class="toolbar-buttons col">
     <div  role="toolbar" tabindex="0" class="btn-toolbar md:tw-pb-2 xl:tw-pb-0">
     <div  role="group" class="btn-group">
     <button  title="افزودن" type="button" class="btn btn-light">
     <svg  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
     <g >
     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
     </path>
     </g>
     </svg>
     </button>
     <button  id="btn-copy-1" title="اعمال بازه‌های زمانی به روزهای دیگر" type="button" class="btn btn-light"><svg  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="files" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-files b-icon bi">
     <g ><path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z">
     </path>
     </g>
     </svg>
     </button>
     </div>
     </div>
     </div>
     </div>
     <form  autocomplete="off" class="">
     <div  class="unavailable-day">
     خارج از دسترس
     </div>
     </form>
     </div>
     </div>
     </div>
     <div class="row">
     <div class="event-type-availability-weekly-hours col"><hr class="tw-mt-2 tw-mb-0">
     <div  class="">
     <div  class="row toolbar no-gutters">
     <div  class="md:tw-pb-2 xl:tw-pb-0 col align-self-center">
     <span  class="tw-text-base tw-font-semibold">
     دوشنبه</span>
     </div>
     <div  class="toolbar-buttons col">
     <div  role="toolbar" tabindex="0" class="btn-toolbar md:tw-pb-2 xl:tw-pb-0">
     <div  role="group" class="btn-group"><button  title="افزودن" type="button" class="btn btn-light">
     <svg  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
     <g >
     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
     </path>
     </g>
     </svg>
     </button>
     <button  id="btn-copy-2" title="اعمال بازه‌های زمانی به روزهای دیگر" type="button" class="btn btn-light">
     <svg  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="files" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-files b-icon bi">
     <g >
     <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z">
     </path>
     </g>
     </svg>
     </button>
     </div>
     </div>
     </div>
     </div>
     <form  autocomplete="off" class="">
     <div  class="unavailable-day">
     خارج از دسترس</div>
     </form>
     </div>
     </div>
     </div><div class="row">
     <div class="event-type-availability-weekly-hours col">
     <hr class="tw-mt-2 tw-mb-0">
     <div  class="">
     <div  class="row toolbar no-gutters">
     <div  class="md:tw-pb-2 xl:tw-pb-0 col align-self-center">
     <span  class="tw-text-base tw-font-semibold">سه‌شنبه
     </span>
     </div>
     <div  class="toolbar-buttons col">
     <div  role="toolbar" tabindex="0" class="btn-toolbar md:tw-pb-2 xl:tw-pb-0">
     <div  role="group" class="btn-group">
     <button  title="افزودن" type="button" class="btn btn-light">
     <svg  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
     <g >
     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
     </path>
     </g>
     </svg>
     </button>
     <button  id="btn-copy-3" title="اعمال بازه‌های زمانی به روزهای دیگر" type="button" class="btn btn-light">
     <svg  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="files" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-files b-icon bi">
     <g >
     <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z">
     </path>
     </g>
     </svg>
     </button>
     </div>
     </div>
     </div>
     </div>
     <form  autocomplete="off" class="">
     <div  class="unavailable-day">
     خارج از دسترس</div>
     </form>
     </div>
     </div>
     </div>
     <div class="row">
     <div class="event-type-availability-weekly-hours col">
     <hr class="tw-mt-2 tw-mb-0">
     <div  class="">
     <div  class="row toolbar no-gutters">
     <div  class="md:tw-pb-2 xl:tw-pb-0 col align-self-center">
     <span  class="tw-text-base tw-font-semibold">
     چهارشنبه</span>
     </div>
     <div  class="toolbar-buttons col">
     <div  role="toolbar" tabindex="0" class="btn-toolbar md:tw-pb-2 xl:tw-pb-0">
     <div  role="group" class="btn-group">
     <button  title="افزودن" type="button" class="btn btn-light">
     <svg  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
     <g >
     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
     </path>
     </g>
     </svg>
     </button>
     <button  id="btn-copy-4" title="اعمال بازه‌های زمانی به روزهای دیگر" type="button" class="btn btn-light">
     <svg  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="files" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-files b-icon bi">
     <g >
     <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z">
     </path>
     </g>
     </svg>
     </button>
     </div>
     </div>
     </div>
     </div>
     <form  autocomplete="off" class="">
     <div  class="unavailable-day">
     خارج از دسترس</div>
     </form>
     </div>
     </div>
     </div>
     <div class="row">
     <div class="event-type-availability-weekly-hours col">
     <hr class="tw-mt-2 tw-mb-0"><div  class="">
     <div  class="row toolbar no-gutters">
     <div  class="md:tw-pb-2 xl:tw-pb-0 col align-self-center">
     <span  class="tw-text-base tw-font-semibold">
     پنج‌شنبه</span>
     </div>
     <div  class="toolbar-buttons col">
     <div  role="toolbar" tabindex="0" class="btn-toolbar md:tw-pb-2 xl:tw-pb-0">
     <div  role="group" class="btn-group">
     <button  title="افزودن" type="button" class="btn btn-light">
     <svg  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
     <g >
     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
     </path>
     </g>
     </svg>
     </button>
     <button  id="btn-copy-5" title="اعمال بازه‌های زمانی به روزهای دیگر" type="button" class="btn btn-light">
     <svg  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="files" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-files b-icon bi">
     <g >
     <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z">
     </path>
     </g>
     </svg>
     </button>
     </div>
     </div>
     </div>
     </div>
     <form  autocomplete="off" class="">
     <div  class="unavailable-day">
     خارج از دسترس</div>
     </form>
     </div>
     </div>
     </div>
     <div class="row">
     <div class="event-type-availability-weekly-hours col">
     <hr class="tw-mt-2 tw-mb-0">
     <div  class="">
     <div  class="row toolbar no-gutters">
     <div  class="md:tw-pb-2 xl:tw-pb-0 col align-self-center">
     <span  class="tw-text-base tw-font-semibold">جمعه
     </span>
     </div>
     <div  class="toolbar-buttons col">
     <div  role="toolbar" tabindex="0" class="btn-toolbar md:tw-pb-2 xl:tw-pb-0">
     <div  role="group" class="btn-group"><button  title="افزودن" type="button" class="btn btn-light">
     <svg  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
     <g ><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
        </path>
        </g>
        </svg>
        </button>
        <button  id="btn-copy-6" title="اعمال بازه‌های زمانی به روزهای دیگر" type="button" class="btn btn-light">
            <svg  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="files" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-files b-icon bi">
                <g >
                    <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z">
                        </path>
                        </g>
                        </svg>
                        </button>
                        </div>
                        </div>
                        </div>
                        </div>
                        <form  autocomplete="off" class="">
                            <div  class="unavailable-day">خارج از دسترس</div>
                            </form>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            <div class="card date-overrides-card">
                            <div class="card-body">
                                <div class="row align-items-end">
                                    <div class="col">
                                        <span class="tw-text-lg tw-font-semibold">
                                            زمان‌های استثنا
                                            </span>
                                            </div>
                                            </div>
                                            <div class="row">
                                                <div class="tw-px-2 lg:tw-px-4 col">
                                                    <p class="pg-description my-2">می‌توانید برای زمان‌های آزادتان، در تاریخ‌های خاص استثنا تعریف کنید.</p>
                                                    </div>
                                                    </div>
                                                    <div class="tw-px-0 col-auto">
                                                        <button type="button" class="btn tw-rounded-full btn-outline-success btn-block">
                                                            <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
                                                                <g>
                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                                                        </path>
                                                                        </g>
                                                                        </svg>
                                                                        <span>
                                                                            استثنای جدید
                                                                            </span>
                                                                            </button>
                                                                            </div>
                                                                            </div>
                                                                            </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="tw-px-8 col">
                                                                                    <hr class="tw-mt-0">
                                                                                        <button type="submit" class="btn tw-my-4 tw-px-4 btn-success btn-block">
                                                                                            <span>ذخیره‌ی زمان‌های آزاد</span>
                                                                                            </button>
                                                                                            </div>
                                                                                            </div>
                                                                                            </div>
                                                                                        </div >

*/
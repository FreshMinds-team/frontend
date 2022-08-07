import React from 'react'
import { Link } from 'react-router-dom'
import AppointmentLists from './AppointmentLists'
import AppointmentSidebar from './AppointmentSidebar'

const Appointment = () => {
    return (
        <div class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

                        <div class="profile-sidebar">
                            <div class="widget-profile pro-widget-content">
                                <div class="profile-info-widget">
                                    <a href="#" class="booking-doc-img">
                                        <img src="/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                                    </a>
                                    <div class="profile-det-info">
                                        <h3>Dr. Darren Elder</h3>

                                        <div class="patient-details">
                                            <h5 class="mb-0">Psychiatrist</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard-widget">
                                <AppointmentSidebar />
                            </div>
                        </div>

                    </div>

                    <div class="col-md-7 col-lg-8 col-xl-9">
                        <div class="appointments">

                            <AppointmentLists />

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Appointment
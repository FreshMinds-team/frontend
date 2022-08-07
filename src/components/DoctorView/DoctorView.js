import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Experience from './Experience';
import Expertise from './Expertise';
import Qualification from './Qualification';

function DoctorView() {
    let { doctorId } = useParams();
    const [doctor, setDoctor] = useState();

    useEffect(() => {
        doctorInfo()
    }, [])

    let doctorInfo = async () => {
        let response = await fetch('https://subidshrestha.pythonanywhere.com/api/doctor/details/' + doctorId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        if (response.status === 200) {
            setDoctor(data)
            console.log(data)
        }

    }
    if (!doctor) return null;
    return (
        <div class="content">
            <div class="container">

                <div class="card">
                    <div class="card-body">
                        <div class="doctor-widget">
                            <div class="doc-info-left">
                                <div class="doctor-img">
                                    <img src="/assets/img/doctors/doctor-thumb-02.jpg" class="img-fluid" alt="User Image" />
                                </div>
                                <div class="doc-info-cont">
                                    <h4 class="doc-name">{doctor.first_name} {doctor.last_name}</h4>
                                    <p class="doc-department"><img src="/assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality" />Psychiatrist</p>

                                </div>
                            </div>
                            <div class="doc-info-right">
                                <div class="clini-infos">
                                </div>
                                <div class="clinic-booking">
                                    <a class="apt-btn" href="booking.html">Book Appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body pt-0">

                        <nav class="user-tabs mb-4">
                            <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab">Overview</a>
                                </li>
                            </ul>
                        </nav>

                        <div class="tab-content pt-0">

                            <div role="tabpanel" id="doc_overview" class="tab-pane fade show active">
                                <div class="row">
                                    <div class="col-md-12 col-lg-9">

                                        <div class="widget about-widget">
                                            <h4 class="widget-title">About Me</h4>
                                            <p>{doctor.description}</p>
                                        </div>

                                        <Qualification id={doctor.id} />

                                        <Experience id={doctor.id} />

                                        <Expertise id={doctor.id} />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DoctorView
import React from 'react'
import AppointmentSidebar from '../Appointment/AppointmentSidebar'

const Patient = () => {
  return (
    <div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
						
							<AppointmentSidebar />
							
						</div>
						<div class="col-md-7 col-lg-8 col-xl-9">
						
							<div class="row row-grid">								
								
								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<a href="#" class="booking-doc-img">
														<img src="assets/img/patients/patient11.jpg" alt="User Image" />
													</a>
													<div class="profile-det-info">
														<h3>Harry Williams</h3>
														<div class="patient-details">
                                                            
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Email <span>+1 303 607 7075</span></li>
													<li>Age <span>9 Years, Male</span></li>
													<li>Gender <span>Male</span></li>
													<li>Enrolled <span>Date</span></li>
												</ul>
											</div>
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

export default Patient
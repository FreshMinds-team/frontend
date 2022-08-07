import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const Header = () => {
    let { user, logoutUser } = useContext(AuthContext)
  return (
    <header class="header">
				<nav class="navbar navbar-expand-lg header-nav">
					<div class="navbar-header">
						<a id="mobile_btn">
							<span class="bar-icon">
								<span></span>
								<span></span>
								<span></span>
							</span>
						</a>
						<Link to="/" class="navbar-brand logo">
							<img src="/assets/img/logo.png" class="img-fluid" alt="Logo" />
						</Link>
					</div>
					<div class="main-menu-wrapper">
						<div class="menu-header">
							<Link to="/" class="menu-logo">
								<img src="/assets/img/logo.png" class="img-fluid" alt="Logo" />
							</Link>
							<a id="menu_close" class="menu-close">
								<i class="fas fa-times"></i>
							</a>
						</div>
						<ul class="main-nav">
							<li class="active">
								<Link to="/">Home</Link>
							</li>
							<li class="has-submenu">
								<a href="#">Doctors <i class="fas fa-chevron-down"></i></a>
								<ul class="submenu">
									<li><Link to="doctor-dashboard.html">Doctor Dashboard</Link></li>
									<li><Link to="appointments.html">Appointments</Link></li>
									<li><Link to="schedule-timings.html">Schedule Timing</Link></li>
									<li><Link to="my-patients.html">Patients List</Link></li>
									<li><Link to="patient-profile.html">Patients Profile</Link></li>
									<li><Link to="chat-doctor.html">Chat</Link></li>
									<li><Link to="invoices.html">Invoices</Link></li>
									<li><Link to="doctor-profile-settings.html">Profile Settings</Link></li>
									<li><Link to="reviews.html">Reviews</Link></li>
									<li><Link to="doctor-register.html">Doctor Register</Link></li>
								</ul>
							</li>	
							<li class="has-submenu">
								<a href="#">Patients <i class="fas fa-chevron-down"></i></a>
								<ul class="submenu">
									<li><Link to="search.html">Search Doctor</Link></li>
									<li><Link to="doctor-profile.html">Doctor Profile</Link></li>
									<li><Link to="booking.html">Booking</Link></li>
									<li><Link to="checkout.html">Checkout</Link></li>
									<li><Link to="booking-success.html">Booking Success</Link></li>
									<li><Link to="patient-dashboard.html">Patient Dashboard</Link></li>
									<li><Link to="favourites.html">Favourites</Link></li>
									<li><Link to="chat.html">Chat</Link></li>
									<li><Link to="profile-settings.html">Profile Settings</Link></li>
									<li><Link to="change-password.html">Change Password</Link></li>
								</ul>
							</li>	
							<li class="has-submenu">
								<a href="#">Pages <i class="fas fa-chevron-down"></i></a>
								<ul class="submenu">
									<li><Link to="voice-call.html">Voice Call</Link></li>
									<li><Link to="video-call.html">Video Call</Link></li>
									<li><Link to="search.html">Search Doctors</Link></li>
									<li><Link to="calendar.html">Calendar</Link></li>
									<li><Link to="components.html">Components</Link></li>
									<li class="has-submenu">
										<Link to="invoices.html">Invoices</Link>
										<ul class="submenu">
											<li><Link to="invoices.html">Invoices</Link></li>
											<li><Link to="invoice-view.html">Invoice View</Link></li>
										</ul>
									</li>
									<li><Link to="blank-page.html">Starter Page</Link></li>
									<li><Link to="login.html">Login</Link></li>
									<li><Link to="register.html">Register</Link></li>
									<li><Link to="forgot-password.html">Forgot Password</Link></li>
								</ul>
							</li>
							<li>
								<Link to="/meditation">Meditate</Link>
							</li>
							<li class="login-link">
								<a onClick={logoutUser}>Login / Signup</a>
							</li>
						</ul>		 
					</div>		 
					<ul class="nav header-navbar-rht">
						<li class="nav-item contact-item">
							<div class="header-contact-img">
								<i class="far fa-hospital"></i>							
							</div>
							<div class="header-contact-detail">
								<p class="contact-header">Contact</p>
								<p class="contact-info-header"> +1 315 369 5943</p>
							</div>
						</li>
						<li class="nav-item">
							<Link class="nav-link header-login" to="/login">login / Signup </Link>
						</li>
					</ul>
				</nav>
			</header>
  )
}

export default Header
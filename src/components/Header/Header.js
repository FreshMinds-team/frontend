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
									<li><Link to="/appointment">Appointments</Link></li>
									<li><Link to="/patients">Patients List</Link></li>
									<li><Link to="/appointment/book">Request an appointment.</Link></li>
								</ul>
							</li>	
								
	  <li>
								<Link to="/chat">Chat</Link>
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
								<p class="contact-info-header"> +977-01-49652770</p>
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

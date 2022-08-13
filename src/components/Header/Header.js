import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const Header = () => {
	let { logoutUser, user } = useContext(AuthContext)
	return (
		<header className="header">
			<nav className="navbar navbar-expand-lg header-nav">
				<div className="navbar-header">
					<a id="mobile_btn">
						<span className="bar-icon">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</a>
					<Link to="/" className="navbar-brand logo">
						<img src="/assets/img/logo.png" className="img-fluid" alt="Logo" />
					</Link>
				</div>
				<div className="main-menu-wrapper">
					<div className="menu-header">
						<Link to="/" className="menu-logo">
							<img src="/assets/img/logo.png" className="img-fluid" alt="Logo" />
						</Link>
						<a id="menu_close" className="menu-close">
							<i className="fas fa-times"></i>
						</a>
					</div>
					<ul className="main-nav">
						<li className="active">
							<Link to="/">Home</Link>
						</li>
						<li className="has-submenu">
							<a>Appointments <i className="fas fa-chevron-down"></i></a>
							<ul className="submenu">
								<li><Link to="/appointment">Appointment List</Link></li>
								<li><Link to="/appointment/book">Request an appointment.</Link></li>
							</ul>
						</li>

						<li>
							<Link to="/chat">Chat</Link>
						</li>
						<li className="has-submenu">
							<a>Features <i className="fas fa-chevron-down"></i></a>
							<ul className="submenu">
								<li><Link to="/meditation">Meditation</Link></li>
							</ul>
						</li>
					</ul>
				</div>
				<ul className="nav header-navbar-rht">
					<li className="nav-item contact-item">
						<div className="header-contact-img">
							<i className="far fa-hospital"></i>
						</div>
						<div className="header-contact-detail">
							<p className="contact-header">Contact</p>
							<p className="contact-info-header"> +977-01-49652770</p>
						</div>
					</li>
					<li className="nav-item">
						{!user?(
							<Link className="nav-link header-login" to="/login">login / Signup </Link>
						):(
							<a className="nav-link header-login" onClick={logoutUser}>Logout</a>
						)}
						
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header

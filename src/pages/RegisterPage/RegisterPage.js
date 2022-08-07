import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import AuthContext from '../../context/AuthContext'

const LoginPage = () => {
    let { loginUser, registerUser } = useContext(AuthContext)

    const [toggle, settoggle] = useState(true)

    const toggleSignUp = () => {
        settoggle(false)
    };

    const toggleSignIn = () => {
        settoggle(true)
    };

    return (
        <div>
            <Header />
            <div className="content">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-8 offset-md-2">

                            <div className="account-content">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-7 col-lg-6 login-left">
                                        <img src="/assets/img/login-banner.png" className="img-fluid" alt="Doccure Register" />
                                    </div>
                                    <div className="col-md-12 col-lg-6 login-right">
                                        <div className="login-header">
                                            <h3>Patient Register <a href="doctor-register.html">Are you a Doctor?</a></h3>
                                        </div>


                                        <form action="https://dreamguys.co.in/demo/doccure/doctor-dashboard.html">
                                            <div className="form-group form-focus">
                                                <input type="text" className="form-control floating" />
                                                <label className="focus-label">Name</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="text" className="form-control floating" />
                                                <label className="focus-label">Mobile Number</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="password" className="form-control floating" />
                                                <label className="focus-label">Create Password</label>
                                            </div>
                                            <div className="text-right">
                                                <Link to='/login' className="forgot-link" >Already have an account?</Link>
                                            </div>
                                            <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>


                                        </form>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )

}

export default LoginPage
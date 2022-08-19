import React from 'react'
import { useLocation } from 'react-router-dom'
import AppointmentDetail from '../../components/AppointmentDetail/AppointmentDetail'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const AppointmentDetailPage = () => {
    const location = useLocation()
    const {appointment} = location.state
        return (
            <div>
                <Header />
                <AppointmentDetail appointment={appointment} />
                <Footer />
            </div>
        )
}

export default AppointmentDetailPage
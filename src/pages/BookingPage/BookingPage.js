import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import BookAppointment from '../../components/Appointment/BookAppointment'

const AppointmentPage = () => {
  return (
    <div>
      <Header />
      <Title title='Booking' subtitle='Booking' />
      <BookAppointment />
      <Footer />
    </div>
  )
}

export default AppointmentPage
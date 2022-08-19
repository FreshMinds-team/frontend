import React, { useContext, useState,useEffect } from 'react'
import AuthContext from '../../context/AuthContext'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import BookAppointment from '../../components/Appointment/BookAppointment'
import { useNavigate } from 'react-router-dom'

const url = "http://127.0.0.1:8000/media/"
const AppointmentPage = () => {
  const baseURL = 'http://127.0.0.1:8000/api/'
	let { authTokens, logoutUser, user } = useContext(AuthContext)
	const [appointment, setappointment] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
		if (user) {
			const fetchappointments = async () => {
				let response = await fetch(baseURL + 'appointment/pending/'+user.id, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + String(authTokens.access)
					}
				})
				let data = await response.json()
				if (response.status === 200) {
					setappointment(data[0])
					console.log(data[0])
				}
			};
			fetchappointments();
		}
	}, []);
  if(appointment){
    if(appointment.length!==0) navigate('/')
  }
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
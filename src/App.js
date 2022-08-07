import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ChatPage from './pages/ChatPage/ChatPage';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import VideoChat from './pages/VideoChat/VideoChat';
import DoctorViewPage from './pages/DoctorViewPage/DoctorViewPage';
import AppointmentPage from './pages/AppointmentPage/AppointmentPage';
import BookingPage from './pages/BookingPage/BookingPage';
import PatientPage from './pages/PatientPage/PatientPage';
import Meditation from './pages/Meditation/Meditation';
import Payment from './pages/Payment/Payment';

function App() {
  return (
    <div className="main-wrapper">
      <AuthProvider>
        <Routes>
          <Route path="/" element={
              <HomePage />
          } exact />
          <Route path="/chat" element={
            <PrivateRoute><ChatPage />
            </PrivateRoute>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/videochat" element={<VideoChat />} />
          <Route path="/appointment" element={<AppointmentPage />} /> 
          <Route path="/patients" element={<PatientPage />} /> 
          <Route path="/payment" element={<Payment />} /> 
          <Route path="/meditation" element={<Meditation />} /> 
          <Route path="/appointment/book" element={<BookingPage />} />
          <Route path="doctor/:doctorId" element={<DoctorViewPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

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
import BlogPage from './pages/BlogPage/BlogPage';
import BookingSuccessPage from './pages/BookingSuccessPage/BookingSuccessPage';
import InvoicePage from './pages/InvoicePage/InvoicePage';
import Blog from './components/Blog/Blog/Blog';

function App() {
  return (
    <div className="main-wrapper">
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <HomePage />
          } exact />

          <Route path="/chat" element={
            <PrivateRoute>
              <ChatPage />
            </PrivateRoute>} />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/success" element={<BookingSuccessPage />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/news" element={<BlogPage />} />
          <Route path="/news/:blogId" element={<Blog />} />

          <Route path="/videochat" element={<PrivateRoute>
              <VideoChat />
            </PrivateRoute>} />

          <Route path="/appointment" element={<PrivateRoute>
              <AppointmentPage />
            </PrivateRoute>} />

          <Route path="/patients" element={<PrivateRoute>
              <PatientPage />
            </PrivateRoute>} />

          <Route path="/payment" element={<PrivateRoute>
              <Payment />
            </PrivateRoute>} />

          <Route path="/meditation" element={<Meditation />} />

          <Route path="/appointment/book" element={<PrivateRoute>
              <BookingPage />
            </PrivateRoute>} />
            
          <Route path="doctor/:doctorId" element={<DoctorViewPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

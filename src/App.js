import './App.css';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <AuthProvider>             
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } exact />
          <Route path="/login" element={<Login />} />
        </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;

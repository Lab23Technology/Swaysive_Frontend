import { Routes, Route } from 'react-router-dom';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';
import OnboardBackground from '../components/OnboardBackground/OnboardBackground';

const AuthRoutes = () => {
  return (
    <OnboardBackground>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </OnboardBackground>
  );
};

export default AuthRoutes;

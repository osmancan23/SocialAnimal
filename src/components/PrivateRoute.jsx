import { Navigate } from 'react-router-dom';
import { useAuth } from './Context/UseContext';

export const PrivateRoute = ({ children }) => {
  const{ user } = useAuth();
if(!user) {
  <Navigate to="/login" />
}

return children;
}
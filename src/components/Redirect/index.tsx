import { Navigate } from 'react-router-dom';

const Redirect = () => {
  const token = localStorage.getItem('token');

  if (token !== null) {
    return <Navigate to="/dashboard" />;
  }

  return <Navigate to="/" />;
};

export default Redirect;

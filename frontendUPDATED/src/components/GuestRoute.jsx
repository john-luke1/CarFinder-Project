import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

const GuestRoute = ({ element, ...rest }) => {
  const { token } = useStateContext();

  return token ? <Navigate to="/home" /> : element;
};

export default GuestRoute;

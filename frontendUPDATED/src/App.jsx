// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './components/UI/Login';
import Signup from './components/UI/SignUp.jsx';
import Home from './pages/Home';
import { ContextProvider, useStateContext } from './context/ContextProvider';
import NotFound from './components/NotFound';
import Dealer from './pages/Dealer.jsx'; 
import DealerDetails from './pages/DealerDetails';
import CarDetails from './pages/CarDetails';
import Brand from './pages/Brand.jsx'
import ModelDetails from './pages/ModelDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import GuestRoute from './components/GuestRoute'


const ProtectedRoute = ({ children }) => {
  const { token } = useStateContext();
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <ContextProvider>
      <Routes>
      <Route path="/login" element={<GuestRoute element={<Login />} />} />
      <Route path="/signup" element={<GuestRoute element={<Signup />} />} />
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
               <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dealer" element={<Dealer />} />
          <Route path="/dealer/:slug" element={<DealerDetails />} />
          <Route path="/cars/:slug" element={<CarDetails />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/model/:id" element={<ModelDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </ContextProvider>
  );
};

export default App;

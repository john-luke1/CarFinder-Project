import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { useStateContext } from '../../context/ContextProvider.jsx';
import axiosClient from '../../AxiosClient.jsx';
import { Link, NavLink, Navigate } from 'react-router-dom';
import '../../style/Header.css';
import modelData from '../../data/modelData';
import { FaUser } from 'react-icons/fa';
import logo from "../../assests/logo.png";
import LoadingEffect from '../LoadingEffect.jsx';
import LogoutConfirm from '../LogoutConfirm.jsx'; 

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/brand', display: 'Brands' },
  { path: '/dealer', display: 'Dealer' },
  { path: '/about', display: 'About' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [query, setQuery] = useState('');
  const [filteredModels, setFilteredModels] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const { user, token, setUser, setToken } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = async () => {
    setLoading(true); 
    try {
      await axiosClient.post('/logout');
      setUser({});
      setToken(null);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Logout failed', error);
    } finally {
      setLoading(false);
    }
  };

  // =======FUNCTIONS=======
    
  const toggleMenu = () => 
    setMenuActive((prevState) => !prevState);

  // Function to close the menu
  const closeMenu = () => setMenuActive(false);
  
  //======SEARCH PROCESS=====  
  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    const value = inputValue.toLowerCase();
    setQuery(inputValue);

    if (value) {
      const results = modelData.filter(({ brand, modelName }) => 
        brand.toLowerCase().includes(value) ||
        modelName.toLowerCase().includes(value)
      );
      setFilteredModels(results);
    } else {
      setFilteredModels([]);
    }
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleLogoutClick = (ev) => {
    ev.preventDefault();
    toggleModal();
  };

  const handleConfirmLogout = () => {
    toggleModal(); 
    onLogout();
  };

  //=============================HEADER SET UP==================
  return (
    <header className='header'>
      <div className="main__navbar">
        <Container>
          <div className='logo'>
            <h1>
              <Link to='/home' className='d-flex align-items-center gap-1'>
                <img src={logo} alt="Logo" className="Logo"/>
                <span>CarFinder</span>
              </Link>
            </h1>
          </div>
          <div lg="12" md="6" sm="6">
            <span className="login_header d-flex align-items-center justify-content-end mb-1">
              <FaUser style={{ marginRight: '5px' }} />
              {user.name ? (
                <>
                  {user.name}&nbsp; | &nbsp;
                  <a onClick={handleLogoutClick} className="btn-logout" href="#">Logout</a>
                </>
              ) : (
                <Navigate to="/login" />
              )}
            </span>
          </div>
          
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu} aria-label="Toggle Menu"></i>
            </span>
            <div className={`navigation ${menuActive ? 'menu__active' : ''}`}>
              <div className="menu">
                <span className="close-menu" onClick={closeMenu} aria-label="Close Menu">&times;</span>
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'nav__active nav__item' : 'nav__item')}
                    key={index}
                    onClick={closeMenu} 
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* =====SEARCH BOX==== */}
            <div className="nav__right">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search by brand or model"
                  value={query}
                  onChange={handleSearchChange}
                />

                <span>
                  <i className="ri-search-line" style={{color:'white'}}></i>
                </span>
                {query && (
                  <div className="search__results">
                    {filteredModels.length > 0 ? (
                      <ul>
                        {filteredModels.map((item, index) => (
                          <li key={index}>
                            <Link to={`/model/${item.id}`}>
                              <img src={item.imgUrl}/>
                              {item.brand} - {item.modelName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="no-results">No results found</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <LoadingEffect isOpen={loading} /> 
      <LogoutConfirm 
        isOpen={isModalOpen} 
        toggle={toggleModal} 
        onConfirm={handleConfirmLogout} 
      /> {/* Include the modal */}
    </header>
  );
};

export default Header;

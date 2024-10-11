import { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext({
  currentUser: null,
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {}
});

export const ContextProvider = ({ children }) => {
  const [user, setUserState] = useState(() => {
    const savedUser = localStorage.getItem('USER');
    return savedUser ? JSON.parse(savedUser) : {};
  });
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
  const [notification, _setNotification] = useState('');

  const setUser = (user) => {
    setUserState(user);
    if (user && Object.keys(user).length > 0) {
      localStorage.setItem('USER', JSON.stringify(user));
    } else {
      localStorage.removeItem('USER');
    }
  };

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  };

  const setNotification = (message) => {
    _setNotification(message);
    setTimeout(() => {
      _setNotification('');
    }, 5000);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('USER');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <StateContext.Provider value={{
      user,
      setUser,
      token,
      setToken,
      notification,
      setNotification
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

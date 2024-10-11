import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../AxiosClient.jsx";
import { createRef, useState, useEffect } from "react";
import { useStateContext } from "../../context/ContextProvider.jsx";
import '../../style/login.css';
import { Col, Container, Row } from "reactstrap";
import Helmet from "../Helmet/Helmet.jsx";
import LoadingEffect from "../LoadingEffect.jsx";


const Login = () => {
  const emailRef = createRef();
  const passwordRef = createRef();
  const { user, setUser, setToken } = useStateContext();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const onSubmit = ev => {
    ev.preventDefault();
    setLoading(true); 

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axiosClient.post('/login', payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
        navigate('/home');
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  return (
    <Helmet title="Login">
      <div className="bg-login" style={{ border: '1px solid black' }}>
        <Container className="form-container-login">
          <div className="login-form animated fadeInDown" style={{ width: '70%', height: '30rem' }}>
            <Row style={{ height: '25rem' }}>
              <Col sm={12} lg={6} style={{ padding: '0' }}>
                <div className="form-login">
                  <form onSubmit={onSubmit}>
                    <div className="form-bg">
                      <h1 className="title-login">Login into your account</h1>
                      {message && <div className="alert-msg">{message}</div>}
                      <Col>
                        <input className="mt-3 mb-3" ref={emailRef} type="email" placeholder="Email" />
                      </Col>
                      <Col>
                        <input ref={passwordRef} type="password" placeholder="Password" />
                      </Col>
                      <Col>
                        <button className="btn-login">Login</button>
                      </Col>
                      <p className="message mt-3">Not registered? <Link className="link" to="/signup">Create an account</Link></p>
                    </div>
                  </form>
                </div>
              </Col>
              <Col sm={0} lg={6} style={{ padding: '0' }}>
                <div className="side-image">
                  <h1 className="title-image"> WELCOME <br />TO<br /> CARFINDER</h1>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <LoadingEffect isOpen={loading} /> 
    </Helmet>
  );
};
export default Login;
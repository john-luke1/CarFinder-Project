import {Link,useNavigate} from "react-router-dom";
import {createRef, useState} from "react";
import axiosClient from "../../AxiosClient.jsx";
import {useStateContext} from "../../context/ContextProvider.jsx";
import'../../style/signup.css';
import { Col, Container, Row } from "reactstrap";
import Helmet from "../Helmet/Helmet.jsx";
import LoadingEffect from "../LoadingEffect.jsx";

const Signup = () => {
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();
  const {setUser, setToken} = useStateContext();
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const onSubmit = ev => {
    ev.preventDefault()
    setLoading(true); 

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    axiosClient.post('/signup', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
        navigate('/home');
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
      .finally(() => {
        setLoading(false); 
      });
  }

  return (
    <Helmet title="Sign Up">
      <div className="bg" style={{border:'1px solid black'}}>
          <Container className="form-container">
              <Row style={{height:'30rem', padding:'0 10% 0 10%'}}>
                  <div className="signup-form animated fadeInDown" style={{width:'50%', marginLeft:'25%'}}>
                      <div className="form">
                          <form onSubmit={onSubmit}>
                              <div className="form-bg">
                                  <h1 className="title">Signup for Free</h1>
                                  {errors &&
                                    <div className="alert-msg-signup">
                                      {Object.keys(errors).map(key => (
                                        <div key={key}>{errors[key][0]}</div>
                                      ))}
                                    </div>
                                  }   
                                  <Col>
                                      <input className="mt-3 mb-3" ref={nameRef} type="text" placeholder="Full Name"/>
                                  </Col>

                                  <Col>
                                      <input  ref={emailRef} type="email" placeholder="Email Address"/>
                                  </Col>
                                  <Col>
                                      <input className="mt-3 mb-3" ref={passwordRef} type="password" placeholder="Password"/>
                                  </Col>
                                  <Col>
                                      <input ref={passwordConfirmationRef} type="password" placeholder="Repeat Password"/>
                                  </Col>
                                  <Col>
                                      <button className="btn-signup">Signup</button>
                                  </Col>
                                  <p className="message mt-3">Already registered? <Link className="link" to="/login">Sign In</Link></p>
                              </div>
                          </form>
                      </div>
                  </div>           
              </Row>
          </Container>
      </div>
      <LoadingEffect isOpen={loading} />
    </Helmet>
  );
};

export default Signup;

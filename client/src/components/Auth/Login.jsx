import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { useAuth } from '../../Hooks/useAuth';
import CommonButton from '../CommonStyles/CommonButton.jsx';
import LoadingSpinner from '../CommonStyles/LoadingSpinner.jsx';
import { ColumnFlex, Form, Label, Input, ForgotButton } from '../CommonStyles/Styles.jsx';

const Login = ({ navigate }) => {
  const { login } = useAuth();
  const emailRef = useRef();
  const pwRef = useRef();
  const [loginError, setLoginError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      setIsLoading(true);
      setLoginError(null)
      let user = await login(emailRef.current.value, pwRef.current.value);
      if(user) {
        navigate(`/user/${user.uid}/profile`);

      }
    } catch(err) {
      setLoginError(err)
    }
    setIsLoading(false);
  }
  console.log(loginError)
  return (
    <ColumnFlex>
      <Form as="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Label>
          <div>Email:</div>
          <Input
            type="email"
            ref={emailRef}
            required
          />
        </Label>
        <Label>
          <div>Password:</div>
          <Input
            type="password"
            ref={pwRef}
            required
          />
        </Label>
        <CommonButton
        type="submit"
        text="Login"
        error={loginError ? 'true' : null}
        >
          {isLoading ? <LoadingSpinner /> : loginError ? 'Invalid' : 'Login'}
        </CommonButton>
        <ForgotButton type='button' onClick={()=>navigate('/signup')}>Signup</ForgotButton>
      </Form>
    </ColumnFlex>
  )
}



export default Login

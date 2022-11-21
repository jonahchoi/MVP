import React, { useState, useRef } from 'react';
import { useAuth } from '../../Hooks/useAuth.js';
import CommonButton from '../CommonStyles/CommonButton.jsx';
import { ColumnFlex, Form, Label, Input, ForgotButton } from '../CommonStyles/Styles.jsx';
import LoadingSpinner from '../CommonStyles/LoadingSpinner.jsx';

const Signup = ({ navigate }) => {
  const { signup } = useAuth();
  const emailRef = useRef();
  const pwRef = useRef();
  const pwConfirmRef = useRef();
  const [signError, setSignError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(pwRef.current.value !== pwConfirmRef.current.value) {
      setSignError('Passwords');
      return;
    }
    try{
      setIsLoading(true);
      setSignError(null);
      let user = await signup(emailRef.current.value, pwRef.current.value);
      navigate(`/user/${user.uid}/profile`);

    } catch(err) {
      setSignError(err)
    }
    setIsLoading(false);
  }
  console.log(signError)
  return (
    <ColumnFlex>
      <Form as="form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
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
            minLength={6}
            required
          />
        </Label>
        <Label>
          <div>Confirm Password:</div>
          <Input
            type="password"
            ref={pwConfirmRef}
            minLength={6}
            required
          />
        </Label>
        <CommonButton
        type="submit"
        error={signError ? 'true' : null}
        >
          {isLoading ? <LoadingSpinner /> : signError === 'Passwords' ? 'Passwords don\'t match' : signError ? 'Invalid' : 'Signup'}
        </CommonButton>
        <ForgotButton type='button' onClick={()=>navigate('/login')}>Login</ForgotButton>
      </Form>
    </ColumnFlex>
  )
}

export default Signup

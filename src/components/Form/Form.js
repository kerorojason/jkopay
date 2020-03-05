import React from 'react';
import styled from 'styled-components';

import emailImage from './img/email.svg';
import passwordImage from './img/password.svg';
import InputField from './InputField';

const Form = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const arr1 = password.split('');
    const arr2 = email.split('');
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        let idx1 = i;
        let idx2 = j;
        while (arr1[idx1] === arr2[idx2] && idx1 < arr1.length && idx2 < arr2.length) {
          idx1++;
          idx2++;
          if (idx1 - i >= 6) {
            console.warn('不通過');
            return;
          }
        }
      }
    }
    console.warn('通過');
  };

  return (
    <FormContainer>
      <InputField name='Email' url={emailImage} value={email} setValue={setEmail} />
      <InputField
        name='Password'
        url={passwordImage}
        withForgotButton
        value={password}
        setValue={setPassword}
      />
      <Footer>
        <Info>
          No account?<SignupButton> Signup</SignupButton>
        </Info>
        <LoginButton onClick={handleSubmit}>Login</LoginButton>
      </Footer>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2.5rem 0 0 0;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  display: inline-block;
  color: rgb(147, 147, 147);
  line-height: 1.5rem;
`;

const SignupButton = styled.a`
  color: rgb(59, 180, 235);
  cursor: pointer;
`;

const LoginButton = styled.button`
  display: inline-block;
  color: white;
  background-color: rgb(59, 180, 235);
  padding: 0.75rem 2.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export default Form;

import React from 'react';
import styled from 'styled-components';

const InputField = ({ name, url, withForgotButton, value, setValue }) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <InputGroup focused={focused ? true : false} name={name}>
      <Prepend url={url} />
      <Input
        placeholder={name}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      {withForgotButton ? <ForgotButton>Forgot?</ForgotButton> : null}
    </InputGroup>
  );
};

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  margin-bottom: 1.25rem;
  padding: 0.8rem;
  border-radius: 0.25rem;
  border: solid 0.1rem ${props => (props.focused ? 'rgb(59, 180, 235)' : 'rgb(222, 222, 222)')};
  position: relative;
  transition: border 0.25s ease-out;

  ::before {
    content: '${props => props.name}';
    position: absolute;
    top: 0;
    left: 1.5rem;
    font-size: 0.8rem;
    color: white;
    border-radius: 0.25rem;
    padding: 0.15rem 0.45rem;
    background-color: rgb(59, 180, 235);
    transform: translate(0, -50%);
    opacity: ${props => (props.focused ? 1 : 0)};
    transition: opacity 0.25s ease-out;
  }
`;

const Prepend = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  background: url(${props => props.url}) no-repeat;
  cursor: pointer;
  opacity: 0.4;
  margin: 0 1rem 0 0.2rem;
`;

const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  border-radius: 2.5rem;
  outline: none;
  border: none;
`;

const ForgotButton = styled.a`
  color: rgb(59, 180, 235);
  padding-left: 1.5rem;
  position: relative;
  cursor: pointer;
  :before {
    content: '';
    position: absolute;
    left: 0;
    top: -0.45rem;
    width: 0.15rem;
    height: 2rem;
    background: rgb(222, 222, 222);
  }
`;

export default InputField;

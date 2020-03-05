import React from 'react';
import styled from 'styled-components';

import AvatarList from './components/AvatarList/AvatarList';
import Form from './components/Form/Form';
import townImage from './img_town_370x170@3x.svg';
function App() {
  const [accountType, setAccountType] = React.useState('doctor');

  return (
    <Container>
      <Header>Choose Account Type</Header>
      <AvatarList accountType={accountType} handleClick={setAccountType} />
      <Info>
        Hello {accountType}! <br /> Please fill out the form below toget started
      </Info>
      <Form />
      <Footer url={townImage} />
    </Container>
  );
}

const Container = styled.section`
  margin: 0 auto;
  width: 60%;
  @media (max-width: 768px) {
    width: 75%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Header = styled.header`
  text-align: center;
  color: rgb(59, 180, 235);
  font-size: 1.5rem;
  padding: 3rem 0;
`;

const Info = styled.p`
  text-align: center;
  color: rgb(177, 177, 177);
  margin: 3.5rem 0;
  line-height: 1.5rem;
`;

const Footer = styled.div`
  background: url('${props => props.url}') no-repeat;
  background-size: cover;
  width: 100%;
  height: 0;
  padding-top: 40%;
`;

export default App;

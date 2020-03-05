import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

import doctorImage from './img/img_doctor_90@3x.svg';
import patientImage from './img/img_patient_90@3x.svg';
const avatars = [
  { name: 'doctor', url: doctorImage },
  { name: 'patient', url: patientImage }
];

const AvatarList = ({ accountType, handleClick }) => (
  <AvatarListWrapper>
    {avatars.map(({ name, url }, idx) => (
      <Avatar
        key={idx}
        name={name}
        url={url}
        selected={name === accountType ? true : false}
        handleClick={handleClick}
      />
    ))}
  </AvatarListWrapper>
);

const AvatarListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default AvatarList;

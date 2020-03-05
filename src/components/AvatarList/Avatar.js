import React from 'react';
import styled, { keyframes } from 'styled-components';

const Avatar = ({ url, name, selected, handleClick }) => {
  return (
    <AvatarContainer onClick={() => handleClick(name)} selected={selected ? true : false}>
      <AvatarImage url={url} />
      {name.replace(/^\w/, c => c.toUpperCase())}
      {selected ? (
        <Checkmark fill='none' strokeWidth='10' viewBox='0 0 154 154'>
          <Tick stroke='white' points='43.5,77.8 63.7,97.9 112.2,49.4' />
        </Checkmark>
      ) : null}
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  width: 25vw;
  height: 25vw;
  @media (max-width: 768px) {
    width: 35vw;
    height: 35vw;
  }
  @media (max-width: 480px) {
    width: 40vw;
    height: 40vw;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  cursor: pointer;
  border: solid 1px ${props => (props.selected ? 'rgb(167, 220, 242)' : 'rgb(234, 237, 241)')};
  border-radius: 0.25rem;
  position: relative;
  &:hover {
    border: solid 1px rgb(167, 220, 242);
  }

  ::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: rgb(64, 182, 234);
    transform: translate(50%, 50%);
    filter: drop-shadow(0 0.15rem 0.2rem rgb(64, 182, 234));
    opacity: ${props => (props.selected ? 1 : 0)};
    transition: 0.25s ease-out;
  }
`;

const AvatarImage = styled.img`
  background: url(${props => props.url}) no-repeat;
  background-size: contain;
  position: relative;
  width: 80%;
  padding-top: 80%;
  position: relative;
`;

const Checkmark = styled.svg`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(50%, 50%);
  width: 3rem;
  height: 3rem;
`;

const checkmarkAnimation = keyframes`
0% {
    stroke-dashoffset: 100px
}
100% {
    stroke-dashoffset: 0px
}
`;

const Tick = styled.polyline`
  -webkit-animation: ${checkmarkAnimation} 0.15s ease-in-out 0.3s backwards;
  animation: ${checkmarkAnimation} 0.15s ease-in-out 0.3s backwards;
  stroke-dasharray: 100px 100px;
  stroke-dashoffset: 200px;
`;

export default Avatar;

import styled from 'styled-components';
import {
  PageBackground,
  PrimaryColor,
  PrimaryWhite,
} from '../../styles/_colors';
import { Aqua, HeadingMD, HeadingXXL, HeadingXXS } from '../../styles/_texts';
import bg from '../../../assets/landscape.jpg';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: ${PageBackground};
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: 100%;
  opacity: 1;
`;

export const DetailsWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  z-index: 1000;
`;

export const Logo = styled.img`
  height: 30vh;
  pointer-event: none;
`;

export const Name = styled.h1`
  font-family: 'Aqua Grotesque';
  font-size: ${HeadingXXL};
  color: ${PrimaryColor};
  margin-bottom: 0;
`;

export const Details = styled.h2`
  font-family: ${Aqua};
  font-size: ${HeadingXXS};
  color: ${PrimaryWhite};
  margin: 0;
`;

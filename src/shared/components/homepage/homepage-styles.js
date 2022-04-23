import styled from 'styled-components';
import {
  PageBackground,
  PrimaryColor,
  PrimaryWhite,
} from '../../styles/_colors';
import { Aqua, HeadingMD, HeadingXXL, HeadingXXS } from '../../styles/_texts';
import bg from '../../../assets/landscape.jpg';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 1000vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: #333333;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%232c2c2c' fill-opacity='0.6'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
  opacity: 1;
  overflow: hidden;
`;

export const DetailsWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  z-index: 1000;
  overflow: hidden;
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
  text-shadow: 0 0 3px #000000, 0 0 5px #000000;
`;

export const Details = styled.h2`
  font-family: ${Aqua};
  font-size: ${HeadingXXS};
  color: ${PrimaryWhite};
  margin: 0;
  text-shadow: 0 0 3px #000000, 0 0 5px #000000;
`;

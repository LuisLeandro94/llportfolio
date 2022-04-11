import styled from 'styled-components';
import { PageBackground, PrimaryColor } from '../../styles/_colors';
import { Aqua, HeadingXXL } from '../../styles/_texts';

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${PageBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 30vh;
  pointer-event: none;
`;

export const Name = styled.h1`
  font-family: 'Aqua Grotesque';
  font-size: ${HeadingXXL};
  color: ${PrimaryColor};
`;

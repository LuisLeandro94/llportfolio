import { Button } from '@mantine/core';
import styled from 'styled-components';
import {
  PrimaryBlack,
  PrimaryColor,
  PrimaryWhite,
  SecondaryColor,
} from '../../styles/_colors';
import { Aqua, HeadingXXXS } from '../../styles/_texts';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 99999;
  height: 50px;
  width: 100%;
`;

export const Spacers = styled.div`
  &:first-of-type {
    width: 20%;
    margin: auto;
    height: 100%;
    display: flex;
  }
  &:last-of-type {
    width: 80%;
    margin: auto;
    height: 100%;
    color: ${PrimaryWhite};
    display: flex;
    justify-content: flex-end;
    text-align: center;
    padding-right: 5%;
    align-items: flex-end;
  }
`;

export const Logo = styled.img`
  margin: auto;
  margin-bottom: 0;
  width: 50%;
  pointer-events: none;
`;

export const NavButton = styled.a`
  color: ${({ $active }) => ($active ? PrimaryColor : PrimaryWhite)};
  font-family: ${Aqua};
  font-size: ${HeadingXXXS};
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    color: ${({ $active }) => ($active ? PrimaryColor : SecondaryColor)};
    transition: all 0.5s ease;
  }
`;

export const ContactButton = styled(Button)`
  color: ${PrimaryColor};
  border-color: ${PrimaryColor};
  margin-bottom: -5px;

  &:hover {
    background-color: ${PrimaryColor};
    color: ${SecondaryColor};
    transition: all 1s ease;
  }

  &:selected {
    border-color: ${SecondaryColor};
  }
`;

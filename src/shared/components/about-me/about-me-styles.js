import { Button, Divider } from '@mantine/core';
import styled from 'styled-components';
import {
  PrimaryColor,
  PrimaryWhite,
  SecondaryColor,
} from '../../styles/_colors';
import { HeadingXXS, HeadingXXXS, Roboto } from '../../styles/_texts';
import {
  ImTwitch,
  ImLinkedin2,
  ImInstagram,
  ImSpotify,
  ImTwitter,
  ImGithub,
} from 'react-icons/im';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 8%;
  padding-right: 13%;
  padding-left: 13%;
`;

export const ImageContainer = styled.div`
  width: 35%;
  display: flex;
`;

export const TextContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  padding-right: 200px;
  padding-left: 50px;
`;

export const Div = styled(Divider)`
  width: 15%;
  border-color: ${PrimaryColor};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const AboutText = styled.p`
  color: ${PrimaryWhite};
  font-family: ${Roboto};
  font-size: ${HeadingXXXS};
  margin-top: 50px;
  line-height: 1.7;
`;

export const NameSpan = styled.span`
  color: ${PrimaryWhite};
  font-family: ${Roboto};
  font-size: ${HeadingXXXS};
  line-height: 1.7;
  font-style: italic;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const CVButton = styled(Button)`
  color: ${PrimaryColor};
  border-color: ${PrimaryColor};
  margin-bottom: -5px;
  width: 150px;
  display: inline-block;

  &:hover {
    background-color: ${PrimaryColor};
    color: ${SecondaryColor};
    transition: all 1s ease;
  }

  &:selected {
    border-color: ${SecondaryColor};
  }
`;

export const HireMeButton = styled(Button)`
  color: ${SecondaryColor};
  border-color: ${PrimaryColor};
  background-color: ${PrimaryColor};
  width: 150px;
  display: inline-block;
  margin-right: 20px;

  &:hover {
    color: ${PrimaryColor};
    transition: all 1s ease;
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 30px 0;
`;

export const Twitch = styled(ImTwitch)`
  color: ${PrimaryColor};
  font-size: 20px;

  &:hover {
    color: ${SecondaryColor};
    transition: all 1s ease;
  }
`;

export const LinkedIn = styled(ImLinkedin2)`
  color: ${PrimaryColor};
  font-size: 20px;

  &:hover {
    color: ${SecondaryColor};
    transition: all 1s ease;
  }
`;

export const Twitter = styled(ImTwitter)`
  color: ${PrimaryColor};
  font-size: 20px;

  &:hover {
    color: ${SecondaryColor};
    transition: all 1s ease;
  }
`;

export const Instagram = styled(ImInstagram)`
  color: ${PrimaryColor};
  font-size: 20px;

  &:hover {
    color: ${SecondaryColor};
    transition: all 1s ease;
  }
`;

export const Spotify = styled(ImSpotify)`
  color: ${PrimaryColor};
  font-size: 20px;

  &:hover {
    color: ${SecondaryColor};
    transition: all 1s ease;
  }
`;

export const Github = styled(ImGithub)`
  color: ${PrimaryColor};
  font-size: 20px;

  &:hover {
    color: ${SecondaryColor};
    transition: all 1s ease;
  }
`;

export const Social = styled.a`
  margin: 0 10px;
  cursor: pointer;

  &:first-of-type {
    margin-left: 0;
  }
`;

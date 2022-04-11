import React, { useState } from 'react';
import { Subtitle, Title } from '../../styles/globalStyles';
import {
  AboutText,
  Buttons,
  CVButton,
  Div,
  HireMeButton,
  Image,
  ImageContainer,
  Instagram,
  LinkedIn,
  Social,
  Socials,
  Spotify,
  TextContainer,
  Twitch,
  Twitter,
  Wrapper,
  Github,
  NameSpan,
} from './about-me-styles';
import image from '../../../assets/img1.jpg';
import { PrimaryColor } from '../../styles/_colors';

const AboutMe = () => {
  const [first, setfirst] = useState(0);

  return (
    <Wrapper>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <TextContainer>
        <Subtitle>Discover</Subtitle>
        <Title>About Me</Title>
        <Div size='xl' />
        <AboutText>
          Hi! My name is <NameSpan>Luís Leandro</NameSpan> and I'm a Portuguese
          software developer. After attending Web Development school in
          Famalicão, I began working as a full-stack software developer. <br />{' '}
          <br /> I'm a well-organised person, I like to solve complex problems
          and I love being challenged. I love playing games, watching TV series
          and movies, and having a glass of beer while watching the sunset.{' '}
          <br /> Interested in both Frontend and Backend.
        </AboutText>
        <Socials>
          <Social href='https://www.twitch.tv/khr0nyx' target='_blank'>
            <Twitch />
          </Social>
          <Social
            href='https://www.linkedin.com/in/luisleandro94/'
            target='_blank'>
            <LinkedIn />
          </Social>
          <Social href='https://twitter.com/khronyxgmg' target='_blank'>
            <Twitter />
          </Social>
          <Social
            href='https://www.instagram.com/sirluisdealvalade/'
            target='_blank'>
            <Instagram />
          </Social>
          <Social
            href='https://open.spotify.com/user/lribeiro94'
            target='_blank'>
            <Spotify />
          </Social>
          <Social href='https://github.com/LuisLeandro94' target='_blank'>
            <Github />
          </Social>
        </Socials>
        <Buttons>
          <HireMeButton variant='outline' radius='xs' size='sm'>
            Hire Me
          </HireMeButton>
          <CVButton variant='outline' radius='xs' size='sm'>
            Download CV
          </CVButton>
        </Buttons>
      </TextContainer>
    </Wrapper>
  );
};

export default AboutMe;

'use client';

import styled from 'styled-components';
import { Button, Container, Flex, Image, Text } from '@/components/common';
import { theme } from '@/styles';

const { color } = theme;

const Background = styled.div`
  background: linear-gradient(
    154.73deg,
    #cc3332 24.06%,
    #ea8d33 73.55%,
    #ffcc33 127.66%,
    #bdbafa 127.66%
  );
  padding-top: calc(98px + 64px + 34px);
  padding-bottom: 230px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75%);

  @media (max-width: 960px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);
    padding-bottom: 180px;
  }
`;

const Content = styled.div`
  max-width: 740px;
  width: ${(750 / 1440) * 100}vw;

  p {
    color: ${color.white};
  }

  @media (max-width: 960px) {
    padding: 20px;
    width: 100%;
    text-align: center;
  }
`;

const ContentContainer = styled(Container)`
  @media (max-width: 960px) {
    > div {
      flex-direction: column;
    }
  }
`;

const Media = styled.div`
  max-width: 410px;
  width: 100%;
`;

const LargeButton = styled(Button)`
  margin-top: 110px;
  transform: scale(1.25);
  transform-origin: left bottom;

  @media (max-width: 960px) {
    margin-top: 60px;
    transform-origin: center bottom;
  }
`;

interface Props {
  description: string;
}

const Hero = ({ description }: Props) => (
  <Background>
    <ContentContainer>
      <Flex
        alignItems="center"
        container
        direction="row-reverse"
        gap={`${(124 / 1440) * 100}vw`}
        justifyContent="space-between"
      >
        <Media>
          <Image
            alt="Iron Man Flying with Hand in Rocket Launcher Form Pointing Left"
            image={{
              height: 558,
              priority: true,
              src: '/iron-man-cartoon.png',
              width: 409,
            }}
          />
        </Media>
        <Content>
          <Text textStyle="large">{description}</Text>
          <LargeButton
            buttonStyle="primary"
            href="https://www.marvel.com/signin"
          >
            Get Started
          </LargeButton>
        </Content>
      </Flex>
    </ContentContainer>
  </Background>
);

export default Hero;

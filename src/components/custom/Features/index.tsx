'use client';

import styled from 'styled-components';
import { theme } from '@/styles';
import { Container, Flex, Image, Title } from '@/components/common';
import Feature, { Props as FeatureProps } from './Feature';

const { color } = theme;

const Wrapper = styled.div`
  padding: 110px 0;
  background-color: ${color.white};
`;

const Media = styled.div`
  width: 100%;
  max-width: 471px;
`;

const Content = styled.div`
  max-width: 741px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${(80 / 1440) * 100}vw;
  row-gap: ${(30 / 1440) * 100}vw;

  @media (max-width: 1024px) {
    max-width: none;
  }

  @media (max-width: 667px) {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
`;

const ContentFlex = styled(Flex)`
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Heading = styled(Title)`
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }
`;

interface Props {
  features: FeatureProps[];
  heading: string;
  image: string;
}

const Features = ({ features, heading, image }: Props) => (
  <Wrapper>
    <Container>
      <Heading align="center" tag="h2" textStyle="h4">
        {heading}
      </Heading>
      <ContentFlex container gap={`${(60 / 1440) * 100}vw`}>
        <Media>
          <Image
            alt="Photo of Iron Man Flying"
            image={{
              height: 471,
              src: image,
              width: 471,
            }}
          />
        </Media>
        <Content>
          {features.map((feature, i) => (
            <Feature {...feature} key={`${feature.icon}` + i} />
          ))}
        </Content>
      </ContentFlex>
    </Container>
  </Wrapper>
);

export default Features;

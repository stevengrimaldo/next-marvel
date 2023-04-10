'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { Icons, IconNames } from '../Icons';

const Container = styled.div`
  img,
  svg {
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 100%;
  }
`;

export interface Props {
  name: IconNames;
}

const Icon = ({ name, ...props }: Props) => (
  <Container {...props}>
    <Image
      alt={name}
      height={Icons[name].height}
      src={Icons[name].src}
      width={Icons[name].width}
    />
  </Container>
);

export default Icon;

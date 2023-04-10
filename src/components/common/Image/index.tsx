'use client';

import Img, { ImageProps } from 'next/image';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

const Container = styled.div<{
  align?: 'left' | 'center' | 'right';
  height?: string;
  width?: string;
}>`
  text-align: ${(p) => (p.align ? p.align : 'center')};

  a {
    display: block;
    vertical-align: middle;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
    max-height: ${(p) => (p.height ? p.height : 'none')};
    max-width: ${(p) => (p.width ? p.width : '100%')};
    display: inline-block;
    vertical-align: middle;
  }
`;

export interface Props {
  alt: string;
  align?: 'left' | 'center' | 'right';
  image: Omit<ImageProps, 'alt'>;
  link?: LinkProps;
}

const Image = ({ alt, image, link, ...props }: Props) => {
  const imageEl = <Img {...image} alt={alt} />;
  const content = link ? <Link {...link}>{imageEl}</Link> : imageEl;

  return <Container {...props}>{content}</Container>;
};

export default Image;

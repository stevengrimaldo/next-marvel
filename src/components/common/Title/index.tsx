'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';
import { ropa, theme } from '@/styles';

const { color } = theme;

const Tag = styled.div<{
  align?: 'left' | 'center' | 'right';
  textStyle?: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
}>`
  color: ${color.black};
  line-height: auto;
  text-align: ${(p) => p.align};

  ${(p) =>
    p.textStyle === 'h1' &&
    `
    font-size: 82px;

    @media (max-width: 768px) {
      font-size: 60px;
    }
  `}

  ${(p) =>
    p.textStyle === 'h2' &&
    `
    font-size: 64px;

    @media (max-width: 768px) {
      font-size: 50px;
    }
  `}

  ${(p) =>
    p.textStyle === 'h2' &&
    `
    font-size: 50px;

    @media (max-width: 768px) {
      font-size: 40px;
    }
  `}

  ${(p) =>
    p.textStyle === 'h3' &&
    `
    font-size: 42px;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  `}

  ${(p) =>
    p.textStyle === 'h4' &&
    `
    font-size: 32px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  `}

  ${(p) =>
    p.textStyle === 'h5' &&
    `
    font-size: 26px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  `}

  ${(p) =>
    p.textStyle === 'h6' &&
    `
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  `}
`;

export interface Props {
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
  className?: string;
  tag: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
  textStyle?: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
}

const Title = ({
  align = 'left',
  children,
  className,
  tag,
  textStyle,
  ...props
}: Props) => (
  <Tag
    {...props}
    align={align}
    as={tag}
    className={`${className} ${ropa.className}`}
    textStyle={textStyle || tag}
  >
    {children}
  </Tag>
);

export default Title;

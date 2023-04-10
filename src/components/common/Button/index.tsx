'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';
import { nunito, theme } from '@/styles';

const { color } = theme;

const Ancor = styled.a<{ buttonStyle?: 'primary' | 'secondary' }>`
  font-weight: bold;
  padding: 12px ${(50 / 1440) * 100}vw;
  background-color: ${(p) =>
    p.buttonStyle === 'primary' ? color.yellow : 'transparent'};
  border-radius: 3px;
  display: inline-block;
  color: ${color.white};
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export interface Props {
  children?: ReactNode;
  className?: string;
  external?: boolean;
  href: string;
  buttonStyle?: 'primary' | 'secondary';
}

const Button = ({ children, className, external, href, ...props }: Props) => (
  <Ancor
    {...props}
    className={`${className} ${nunito.className}`}
    href={href}
    rel={external ? 'noopener noreferrer' : ''}
  >
    {children}
  </Ancor>
);

export default Button;

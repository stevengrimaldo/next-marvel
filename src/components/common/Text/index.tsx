'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';
import { nunito, theme } from '@/styles';

const { color } = theme;

const Paragraph = styled.p<{ textStyle?: 'regular' | 'large' }>`
  color: ${color.gray};
  font-size: ${(p) => (p.textStyle === 'regular' ? '16px' : '24px')};
  line-height: ${(p) => (p.textStyle === 'regular' ? '24px' : '33px')};

  @media (max-width: 768px) {
    font-size: ${(p) => (p.textStyle === 'regular' ? '14px' : '21px')};
    line-height: ${(p) => (p.textStyle === 'regular' ? '16px' : '23px')};
  }
`;

export interface Props {
  children: ReactNode;
  textStyle?: 'regular' | 'large';
}

const Text = ({ children, textStyle = 'regular', ...props }: Props) => (
  <Paragraph {...props} className={nunito.className} textStyle={textStyle}>
    {children}
  </Paragraph>
);

export default Text;

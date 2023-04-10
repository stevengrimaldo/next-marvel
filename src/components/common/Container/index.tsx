'use client';

import styled from 'styled-components';
import { ReactNode } from 'react';

const Wrapper = styled.div`
  max-width: calc(1280px + 40px);
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export interface Props {
  children: ReactNode;
}

const Container = ({ children, ...props }: Props) => (
  <Wrapper {...props}>{children}</Wrapper>
);

export default Container;

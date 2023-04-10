'use client';

import styled from 'styled-components';
import { Icon, IconNames, Text, Title } from '@/components/common';

const Header = styled(Title)`
  margin: 10px 0;
`;

export interface Props {
  icon: IconNames;
  text: string;
  title: string;
}

const Feature = ({ icon, text, title }: Props) => (
  <div>
    <Icon name={icon} />
    <Header tag="h6">{title}</Header>
    <Text>{text}</Text>
  </div>
);

export default Feature;

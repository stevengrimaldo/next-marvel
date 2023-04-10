import styled from 'styled-components';
import { Image } from '@/components/common';

const Item = styled.li`
  flex-basis: content;
  width: 230px;

  &:not(:last-of-type) {
    margin-right: 30px;
  }

  img {
    object-fit: cover;
  }
`;

interface Props {
  poster: {
    thumbnail: string;
    title: string;
  };
}

const Slide = ({ poster }: Props) => (
  <Item>
    <Image
      alt={poster.title}
      image={{
        height: 341,
        src: poster.thumbnail,
        width: 227,
      }}
    />
  </Item>
);

export default Slide;

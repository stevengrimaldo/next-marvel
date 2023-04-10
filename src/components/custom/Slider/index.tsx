'use client';

import { useCallback, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/dist/Draggable';
import Slide from './Slide';

gsap.registerPlugin(Draggable);

const Wrapper = styled.div`
  overflow: hidden;
  padding-bottom: 60px;
`;

const Parent = styled.div`
  align-items: flex-end;
  display: flex;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  white-space: nowrap;
`;

interface Props {
  slides: {
    thumbnail: {
      extension: string;
      path: string;
    };
    title: string;
  }[];
}

const Slider = ({ slides }: Props) => {
  const carouselParent = useRef<HTMLDivElement>(null);
  const carouselDraggable = useRef<HTMLUListElement>(null);
  const isDragging = useRef(false);

  const onDragStart = useCallback(() => {
    if (carouselDraggable?.current) {
      isDragging.current = true;

      gsap.set(carouselDraggable.current, {
        cursor: 'grabbing',
      });
    }
  }, []);

  const onDragEnd = useCallback(() => {
    if (carouselDraggable?.current) {
      isDragging.current = false;

      gsap.set(carouselDraggable.current, {
        cursor: 'grab',
      });
    }
  }, []);

  useLayoutEffect(() => {
    if (carouselParent.current && carouselDraggable.current) {
      Draggable.create(carouselDraggable.current, {
        bounds: carouselParent.current,
        cursor: 'grab',
        dragResistance: 0.2,
        edgeResistance: 0.5,
        // Advanced feature with inertia
        // costs $150 a year through GreenSock Premium
        inertia: true,
        lockAxis: true,
        onDragEnd: onDragEnd,
        onDragStart: onDragStart,
        // Advanced feature with smooth throwing/sliding motion
        // costs $150 a year through GreenSock Premium
        throwProps: true,
        type: 'x',
        zIndexBoost: false,
      });
    }
  }, [onDragEnd, onDragStart]);

  const slidesWithThumbs = slides.filter(
    (slide) => !slide.thumbnail.path.includes('not')
  );

  return (
    <Wrapper>
      <Parent ref={carouselParent}>
        <List ref={carouselDraggable}>
          {slidesWithThumbs.map((slide) => (
            <Slide
              key={slide.thumbnail.path}
              poster={{
                thumbnail:
                  slide.thumbnail.path + '.' + slide.thumbnail.extension,
                title: slide.title,
              }}
            />
          ))}
        </List>
      </Parent>
    </Wrapper>
  );
};

export default Slider;

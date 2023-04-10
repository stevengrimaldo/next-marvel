'use client';

import { forwardRef, ReactElement, ReactNode, Ref } from 'react';
import styled from 'styled-components';

const Container = styled.div<any>`
  // conrtainer props
  ${(p) => p.container && `display: ${p.inline ? 'inline-grid' : 'grid'};`}
  ${(p) => p.template && `grid-template: ${p.template};`}
  ${(p) => p.templateRows && `grid-template-rows: ${p.templateRows};`}
  ${(p) => p.templateColumns && `grid-template-columns: ${p.templateColumns};`}
  ${(p) => p.templateAreas && `grid-template-areas: ${p.templateAreas};`}
  ${(p) => p.autoFlow && `grid-auto-flow: ${p.autoFlow};`}
  ${(p) => p.autoRows && `grid-auto-rows: ${p.autoRows};`}
  ${(p) => p.autoColumns && `grid-auto-columns: ${p.autoColumns};`}
  ${(p) => p.grid && `grid: ${p.grid}`};
  ${(p) => p.gap && `grid-gap: ${p.gap};`}
  ${(p) => p.gap && `gap: ${p.gap};`}
  ${(p) => p.rowGap && `row-gap: ${p.rowGap};`}
  ${(p) => p.columnGap && `column-gap: ${p.columnGap};`}

  // children props
  ${(p) => p.column && `grid-column: ${p.column};`}
  ${(p) => p.columnStart && `grid-column-start: ${p.columnStart};`}
  ${(p) => p.columnEnd && `grid-column-end: ${p.columnEnd};`}
  ${(p) => p.row && `grid-row: ${p.row};`}
  ${(p) => p.rowStart && `grid-row-start: ${p.rowStart};`}
  ${(p) => p.rowEnd && `grid-row-end: ${p.rowEnd};`}
  ${(p) => p.area && `grid-area: ${p.area};`}

  // both props
  ${(p) => p.justifyContent && `justify-content: ${p.justifyContent};`}
  ${(p) => p.justifyItems && `justify-items: ${p.justifyItems};`}
  ${(p) => p.justifySelf && `justify-self: ${p.justifySelf};`}
  ${(p) => p.alignContent && `align-content: ${p.alignContent};`}
  ${(p) => p.alignItems && `align-items: ${p.alignItems};`}
  ${(p) => p.alignSelf && `align-self: ${p.alignSelf};`}
  ${(p) => p.placeContent && `place-content: ${p.placeContent};`}
  ${(p) => p.placeItems && `place-items: ${p.placeItems};`}
  ${(p) => p.placeSelf && `place-self: ${p.placeSelf};`}
`;

interface RepeatProps {
  component: (...props: unknown[]) => ReactElement;
  data: Record<string, unknown>[];
  props?: Record<string, unknown>;
  ref: Ref<HTMLElement>;
}

interface ContainerProps {
  alignContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  alignItems?: 'start' | 'end' | 'center' | 'stretch';
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
  autoColumns?: string;
  autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
  autoRows?: string;
  className?: string;
  columnGap?: string;
  gap?: string;
  grid?: string;
  inline?: boolean;
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  justifyItems?: 'start' | 'end' | 'center' | 'stretch';
  justifySelf?: 'start' | 'end' | 'center' | 'stretch';
  placeContent?: string;
  placeItems?: string;
  rowGap?: string;
  template?: string;
  templateAreas?: string;
  templateColumns?: string;
  templateRows?: string;
}

interface ChildrenProps {
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
  area?: string;
  column?: string;
  columnEnd?: string;
  columnStart?: string;
  justifySelf?: 'start' | 'end' | 'center' | 'stretch';
  placeSelf?: string;
  row?: string;
  rowEnd?: string;
  rowStart?: string;
}

export interface Props extends ContainerProps, ChildrenProps {
  children: ReactNode;
  className?: string;
  compRef?: Function;
  container?: boolean;
  repeat?: RepeatProps;
}

const Grid = forwardRef(
  ({ children, compRef, repeat, ...props }: Props, ref) => {
    let content = children;

    if (repeat) {
      const { component: Component, data, props, ...extra } = repeat;

      content = data.map((d, i) => (
        <Container {...extra} key={i}>
          <Component {...{ ...d, ...props }} />
        </Container>
      ));
    }

    return (
      <Container {...props} ref={ref}>
        {content}
      </Container>
    );
  }
);

export default Grid;

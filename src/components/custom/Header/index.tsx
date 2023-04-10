'use client';

import styled from 'styled-components';
import { Button, Container, Image } from '@/components/common';

const Head = styled.header`
  height: 98px;
  left: 0;
  position: absolute;
  top: 54px;
  width: 100%;
  z-index: 1;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  max-width: 418px;
  width: ${(418 / 1440) * 100}vw;
  min-width: 135px;
`;

const Nav = styled.nav`
  display: flex;

  > a {
    margin-left: 5px;
  }
`;

const Header = () => (
  <Head>
    <Container>
      <Logo>
        <Image
          alt="IRON MAN"
          image={{
            height: '98',
            src: '/logo.svg',
            width: '418',
          }}
          link={{
            href: '/',
          }}
        />
      </Logo>
      <Nav>
        <Button buttonStyle="secondary" href="https://www.marvel.com/signin">
          Sign In
        </Button>
        <Button buttonStyle="primary" href="https://www.marvel.com/signin">
          Sign Up
        </Button>
      </Nav>
    </Container>
  </Head>
);

export default Header;

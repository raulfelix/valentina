import React, { MouseEvent, useEffect, useRef, useState } from "react";

import { Nav, NavContent } from "./nav/nav.styles";
import { NavCategories } from "./nav/nav";
import * as Styled from "./header.styles";

import logo from "../images/v.svg";
import navImage from "./nav/nav.svg";

export const Header = ({
  isSmall,
  bannerText,
}: {
  isSmall?: boolean;
  bannerText?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>();
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  useEffect(() => {
    function close(e: MouseEvent) {
      if (!ref.current?.contains(e.target)) {
        setIsNavVisible(false);
      }
    }

    document.body.addEventListener("click", close, false);
    return () => {
      document.body.removeEventListener("click", close, false);
    };
  }, []);
  return (
    <>
      <Styled.HeaderMobileNav ref={ref}>
        <Nav
          type="button"
          title="Menu"
          aria-label="Show navigation options"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          <img src={navImage} />
        </Nav>
        {isNavVisible && (
          <NavContent>
            <ul>
              <li>
                <Styled.HeaderNavLink to="/">Home</Styled.HeaderNavLink>
              </li>
              <li>
                <Styled.HeaderNavLink to="/about">About</Styled.HeaderNavLink>
              </li>
              <li>
                <Styled.HeaderNavLink to="/blog">Blog</Styled.HeaderNavLink>
              </li>
              <li>
                <Styled.HeaderNavLink to="/publications">
                  Publications
                </Styled.HeaderNavLink>
              </li>
            </ul>
            <NavCategories />
          </NavContent>
        )}
      </Styled.HeaderMobileNav>

      <Styled.HeaderNav>
        <ul>
          <li>
            <Styled.HeaderNavLink to="/">Home</Styled.HeaderNavLink>
          </li>
          <li>
            <Styled.HeaderNavLink to="/about">About</Styled.HeaderNavLink>
          </li>
          <li>
            <Styled.HeaderNavLink to="/blog">Blog</Styled.HeaderNavLink>
          </li>
          <li>
            <Styled.HeaderNavLink to="/publications">
              Publications
            </Styled.HeaderNavLink>
          </li>
        </ul>
      </Styled.HeaderNav>
      <Styled.HeaderSubscribe>
        <a href="https://goodtimesawfulposture.substack.com/" target="_blank">
          Subscribe
        </a>
      </Styled.HeaderSubscribe>
      <Styled.Header id="header">
        <Styled.HeaderLogo to="/" aria-label="home" $isSmall={isSmall}>
          <img src={logo} alt="valentina" />
          {!isSmall && (
            <Styled.HeaderBanner>
              {bannerText || "JOURNALIST . WRITER . RANTER"}
            </Styled.HeaderBanner>
          )}
        </Styled.HeaderLogo>
      </Styled.Header>
    </>
  );
};

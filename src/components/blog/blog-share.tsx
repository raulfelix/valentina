import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Text } from "../../styles/typography.styles";
import * as Styled from "./blog-shared.styles";

type Props = {
  title: string;
  url: string;
};

export const BlogShare = ({ title, url }: Props) => {
  const isBrowser = typeof window !== "undefined";

  function openWindow() {
    if (isBrowser) {
      window.open(window.location.href, "width=550,height=435");
      return false;
    }
  }

  return (
    <Styled.BlogShare>
      <Text>shAre</Text>
      <div>
        <Styled.BlogShareIcon
          target="_blank"
          href={`https://twitter.com/intent/tweet?text="${title}"&url="${url}"`}
          onclick={openWindow}
        >
          <StaticImage src="../social/twitter.png" alt="Twitter" />
        </Styled.BlogShareIcon>
        <Styled.BlogShareIcon
          target="_blank"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
          onclick={openWindow}
        >
          <StaticImage src="../social/li.png" alt="LinkedIn" />
        </Styled.BlogShareIcon>
        <Styled.BlogShareIcon
          target="_blank"
          href={`https://facebook.com/sharer.php?u=${url}`}
          onclick={openWindow}
        >
          <StaticImage src="../social/facebook.png" alt="Facebook" />
        </Styled.BlogShareIcon>
      </div>
    </Styled.BlogShare>
  );
};

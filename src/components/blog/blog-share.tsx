import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Text } from "../../styles/typography.styles";
import * as Styled from "./blog-shared.styles";

type Props = {
  title: string;
};

export const BlogShare = ({ title }: Props) => {
  const isBrowser = typeof window !== "undefined";

  let url = '';
  if (isBrowser) {
    url = window.location.href;
  }

  function openWindow(shareUrl: string) {
    if (isBrowser) {
      window.open(`${shareUrl}${window.location.href}`, "width=550,height=435");
      return false;
    }
  }

  return (
    <Styled.BlogShare>
      <Text>SHARE</Text>
      <div>
        <Styled.BlogShareIcon
          target="_blank"
          href={`https://twitter.com/intent/tweet?text=${title}&url=${url}`}
          onClick={() => openWindow('https://twitter.com/intent/tweet?url=')}
        >
          <StaticImage src="../social/twitter.png" alt="Twitter" width={28} />
        </Styled.BlogShareIcon>
        <Styled.BlogShareIcon
          target="_blank"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
          onClick={() => openWindow('https://www.linkedin.com/shareArticle?mini=true&url=')}
        >
          <StaticImage src="../social/linkedin.png" alt="LinkedIn" width={28} />
        </Styled.BlogShareIcon>
        <Styled.BlogShareIcon
          target="_blank"
          href={`https://facebook.com/sharer.php`}
          onClick={() => openWindow('https://facebook.com/sharer.php?u=')}
        >
          <StaticImage src="../social/facebook.png" alt="Facebook"  width={14} height={28}/>
        </Styled.BlogShareIcon>
      </div>
    </Styled.BlogShare>
  );
};

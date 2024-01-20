import React from "react";

import * as Styled from "./blog-shared.styles";

import twitter from "../social/twitter.svg";
import facebook from "../social/facebook.svg";
import linked from "../social/linkedin.svg";

type Props = {
  title: string;
};

export const BlogShare = ({ title }: Props) => {
  const isBrowser = typeof window !== "undefined";

  let url = "";
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
      <div>
        <Styled.BlogShareGroup
          target="_blank"
          href={`https://twitter.com/intent/tweet?text=${title}&url=${url}`}
          onClick={() => openWindow("https://twitter.com/intent/tweet?url=")}
        >
          <Styled.BlogShareIcon>
            <img className="tweet" src={twitter} alt="Twitter" />
          </Styled.BlogShareIcon>
          <p>Tweet</p>
        </Styled.BlogShareGroup>
        <Styled.BlogShareGroup
          target="_blank"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
          onClick={() =>
            openWindow("https://www.linkedin.com/shareArticle?mini=true&url=")
          }
        >
          <Styled.BlogShareIcon>
            <img src={linked} alt="LinkedIn" />
          </Styled.BlogShareIcon>
          <p>Post</p>
        </Styled.BlogShareGroup>
        <Styled.BlogShareGroup
          target="_blank"
          href={`https://facebook.com/sharer.php`}
          onClick={() => openWindow("https://facebook.com/sharer.php?u=")}
        >
          <Styled.BlogShareIcon>
            <img className="facebook" src={facebook} alt="Facebook" />
          </Styled.BlogShareIcon>
          <p>Share</p>
        </Styled.BlogShareGroup>
      </div>
    </Styled.BlogShare>
  );
};

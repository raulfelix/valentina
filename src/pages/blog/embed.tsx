import React from "react";

import { EmbedWrapper } from "../../components/blog/blog.styles";

type Props = {
  url: string;
};

export const Embed = ({ url }: Props) => {
  return (
    <EmbedWrapper>
      <iframe
        width="560"
        height="315"
        src={url}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </EmbedWrapper>
  );
};

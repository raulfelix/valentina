import React from "react";

type Props = {
  url: string;
  width: number;
  height: number;
  centre?: boolean;
};

export const Image = ({ url, width, height, centre }: Props) => {
  console.log(url, width, height, centre);
  if (centre) {
    return (
      <div style={{ textAlign: "center" }}>
        <img src={url} width={width} height={height} />
      </div>
    );
  }
  return <img src={url} width={width} height={height} />;
};

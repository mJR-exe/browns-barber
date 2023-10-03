import { ImageProps } from "../types";

export const Image = ({ src, width, height, alt }: ImageProps) => (
  <img src={`/img/webp/${src}.webp`} alt={alt} width={width} height={height} />
);

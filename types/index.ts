import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IMeme {
  id: number;
  title: string;
  imgUrl: string;
  likes: number;
  link: string;
}

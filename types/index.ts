import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IMeme {
  id: number;
  title: string;
  imgUrl: string;
  likes: string;
  link: string;
}

export type InputField = "title" | "imgUrl" | "likes" | "link";

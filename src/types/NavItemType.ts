import { RefObject } from "react";

export interface INavItemType {
    label: string,
    link: string,
    className: string,
    ref?: RefObject<HTMLAnchorElement| null> ,
  }
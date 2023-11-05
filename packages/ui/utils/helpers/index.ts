"use client";

import { type FunctionComponent, type SVGProps, createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Allow the use of 'any' here because of the nature of the object.
export const isEmptyObj = (obj: Record<any, any>) => {
  return Object.keys(obj).length === 0;
};

/**
 * Convert react component (SVG Element)
 * to base64 encoded url
 */
export const reactSvgComponentToMarkupString = <
  T extends SVGProps<SVGSVGElement>,
>(
  Component: FunctionComponent<T>,
  props: T,
) =>
  `data:image/svg+xml,${encodeURIComponent(
    renderToStaticMarkup(createElement(Component, props)),
  )}`;

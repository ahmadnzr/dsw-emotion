import styled from "@emotion/styled";
import { type FC, type Ref, type SVGProps, type CSSProperties } from "react";

import { type IconStyleProps, type IconSize } from ".";

export const getIconStyles = (params: IconStyleProps): CSSProperties => {
  const iconSize: Record<IconSize, { height: string; width: string }> = {
    sm: {
      width: "12px",
      height: "12px",
    },
    md: {
      width: "18px",
      height: "18px",
    },
    lg: {
      width: "24px",
      height: "24px",
    },
  };

  return {
    ...iconSize[params.size],
  };
};

type IconProps = SVGProps<SVGSVGElement> & {
  title?: string;
  titleId?: string;
  ref?: Ref<SVGSVGElement>;
};

export const createStyledIcon = (IconComponent: FC<IconProps>) =>
  styled(IconComponent)((props: IconStyleProps) => ({
    ...getIconStyles(props),
  }));

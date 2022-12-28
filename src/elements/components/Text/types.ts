import React, { CSSProperties } from 'react';
import { Variant } from '@mui/material/styles/createTypography';

export interface TextInputProps {
  children: React.ReactNode;
  display?: CSSProperties['display'];
  alignItems?: CSSProperties['alignItems'];
  width?: string;
  margin?: string;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  padding?: string;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  fontSize?: CSSProperties['fontSize'];
  textAlign?: CSSProperties['textAlign'];
  textDecoration?: CSSProperties['textDecoration'];
  color?: string;
  opacity?: CSSProperties['opacity'];
  textTransform?: CSSProperties['textTransform'];
  variant?: Variant;
  bold?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface StyledTypographyProps {
  textDecoration?: CSSProperties['textDecoration'];
  opacity?: CSSProperties['opacity'];
  bold?: boolean;
}

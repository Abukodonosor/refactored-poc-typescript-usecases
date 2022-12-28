import { StyledTypography } from './styles';
import { TextInputProps } from './types';

export const Text: React.FC<TextInputProps> = ({
  children,
  display,
  alignItems,
  width,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  fontSize,
  textAlign,
  color,
  opacity,
  textTransform = 'none',
  textDecoration,
  variant,
  bold,
  onClick,
}) => (
  <StyledTypography
    display={display}
    alignItems={alignItems}
    width={width}
    margin={margin}
    marginTop={marginTop}
    marginRight={marginRight}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    padding={padding}
    paddingTop={paddingTop}
    paddingRight={paddingRight}
    paddingBottom={paddingBottom}
    paddingLeft={paddingLeft}
    fontSize={fontSize}
    textAlign={textAlign}
    color={color}
    opacity={opacity}
    textTransform={textTransform}
    textDecoration={textDecoration}
    variant={variant}
    bold={bold}
    onClick={onClick}
  >
    {children}
  </StyledTypography>
);

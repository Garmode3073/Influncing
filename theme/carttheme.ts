import { createTheme } from '@shopify/restyle'
import palette from './colors';




const carttheme = createTheme({
  colors: {
    mainBackground: palette.white,
    shadow: palette.blackFont,
    txtColor: palette.blue,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof carttheme;
export default carttheme;
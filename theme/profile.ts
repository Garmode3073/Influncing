import { createBox, createText, createTheme } from '@shopify/restyle';

const profiletheme = createTheme({
    colors: {
        white: '#FFFFFF',
        purpleGrad: '#8C43FE',
        blueGrad: '#130CB7',
        grayShade: '#4885ED33',
        blackText: '#222222',
        underline: '#622DB4',
        photoBorder:'#D8D8D8',
        whiteShade1: '#0000001A',
        whiteShade2: '#00000000',
        whiteShade3: '#FFFFFF00',
        descText: '#474747',
        subText: '#999999',
        iconText: '#515F65',
    },
    spacing: {
        negs: -8,
        xxs:2,
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
        xxl: 66,
    },

    breakpoints: {
      phone: 0,
      tablet: 768,
    },
    textVariants: {
        title:{
            fontFamily: 'Poppins-Medium',
            fontSize: 21,
            color: 'white',
            characterSpacing: 0,
            lineSpacing: 31,
        },
        tabTitle:{
            fontFamily: 'Poppins-Medium',
            fontSize: 13,
            color: 'blackText',
            characterSpacing: 0,
            lineSpacing: 20,
        },
        profileName:{
            fontFamily: 'Poppins-Medium',
            fontSize: 20,
            color: 'blackText',
            characterSpacing: 0,
            lineSpacing: 30,
        },
        description:{
            fontFamily: 'Poppins-Medium',
            fontSize: 10,
            color: 'descText',
            characterSpacing: 0,
            lineSpacing: 16,
        },
        statTitle:{
            fontFamily: 'Poppins-Medium',
            fontSize: 18,
            color: 'blackText',
            characterSpacing: 0,
            lineSpacing: 27,
        },
        statSub:{
            fontFamily: 'Poppins-Medium',
            fontSize: 12,
            color: 'subText',
            characterSpacing: 0,
            lineSpacing: 18,
        },
        details:{
            fontFamily: 'Poppins-Medium',
            fontSize: 12,
            color: 'blackText',
            characterSpacing: 0,
            lineSpacing: 18,
        },
        interests:{
            fontFamily: 'Poppins-Medium',
            fontSize: 11,
            color: 'iconText',
            characterSpacing: 0,
            lineSpacing: 7,
        },
    },
  });

  export type Theme = typeof profiletheme;
  export const Text = createText<Theme>();
  export const Box = createBox<Theme>();
  export default profiletheme;
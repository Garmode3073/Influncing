import React from 'react';
import { SvgXml } from 'react-native-svg';
import { palette} from '../theme';
import { View } from 'react-native';
import { Dimensions } from 'react-native';


const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="437.084" height="489.07" viewBox="0 0 437.084 489.07">
  <defs>
    <linearGradient id="linear-gradient" x1="1" y1="-0.419549815" x2="1.7" y2="1.258649445" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="${palette.purpleLight}"/>
      <stop offset="1" stop-color="${palette.purpleDark}"/>
    </linearGradient>
    <filter id="Path_1" x="0" y="0" width="437.084" height="489.07" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.078"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1)">
    <path id="Path_1-2" data-name="Path 1" d="M419.215,572.077s-.405,44.2-40.722,56.576S50.93,636.519,50.93,636.519,1.345,638.539,5.516,714.839C6.224,727.8,1.31,752.82,1.327,774.688c.03,37.843-.7,85.75-.982,129.421-.484,75.4,0,139.038,0,139.038H419.215Z" transform="translate(8.87 -566.08)" fill="url(#linear-gradient)"/>
  </g>
</svg>
`;

var {height, width} = Dimensions.get('window');

const CartContainer = () =>{
    return(
        <SvgXml xml={xml} width="106.5%" height={height*1.54146} scaleX={1} scaleY={1} style={{flex:1, position:'absolute', marginLeft:-15, marginTop:-height/2.1}}/>
            
    );
}

export default CartContainer;
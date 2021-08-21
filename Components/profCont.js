import React from 'react';
import { SvgXml } from 'react-native-svg';
import { palette} from '../theme';
import { View } from 'react-native';
import { Dimensions } from 'react-native';


const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="412.683" height="551.498" viewBox="0 0 412.683 551.498">
  <defs>
    <linearGradient id="linear-gradient" x1="1" y1="-0.419549815" x2="1.7" y2="1.258649445" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#8c43fe"/>
      <stop offset="1" stop-color="#130cb7"/>
    </linearGradient>
  </defs>
  <path id="Path_1" data-name="Path 1" d="M0,521.932s33.608,22.347,65.573,27.129,62.289-8,62.289-8,39.355-19.128,75.21-19.128-55.613,4.124,0,0,94.1,31.911,129.279,27.129c19.454-2.645,25.034-3.736,43.716-22.418s36.616-18.682,36.616-18.682L412-1.366H0Z" transform="translate(0 1.366)" fill="url(#linear-gradient)"/>
</svg>

`;

var {height, width} = Dimensions.get('window');

const ProfContainer = () =>{
    return(
        <SvgXml xml={xml} width={width} height={height} scaleX={width/360} scaleY={height/600} style={{position:'absolute',marginTop:-height/6.3}}/>
            
    );
}

export default ProfContainer;
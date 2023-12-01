
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function xmo({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 9.98927 3.66075 8.13302 4.7715 6.63527L6.2415 8.10527C5.461 9.25405 5.04443 10.6112 5.046 12C5.046 15.8325 8.16075 18.9465 11.9932 18.9465C15.825 18.9465 18.9398 15.8318 18.9398 12C18.9392 10.6113 18.5228 9.25452 17.7443 8.10452L19.2142 6.63452C20.3773 8.18116 21.0042 10.0649 21 12Z" fill={color} /><Path d="M16.9777 12C16.9763 13.3198 16.4515 14.5851 15.5182 15.5183C14.585 16.4515 13.3197 16.9764 12 16.9778C10.6801 16.9766 9.4146 16.4518 8.48123 15.5186C7.54786 14.5853 7.02287 13.3199 7.02148 12C7.02148 11.1353 7.24648 10.2848 7.67548 9.53254L12 13.8555L16.3245 9.53104C16.7533 10.2832 16.9787 11.1342 16.9785 12" fill={color} /><Path d="M17.8852 5.19378L12 11.0715L7.51425 6.59328L6.11475 5.19378C7.74614 3.77403 9.83733 2.99453 12 3.00003C14.25 3.00003 16.3035 3.82278 17.8852 5.19378Z" fill={color} /></Svg>;
}
export default xmo;
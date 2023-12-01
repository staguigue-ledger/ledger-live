
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function adx({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M8.69025 6.4515L12 9.906L15.2288 6.4515L17.25 8.52L13.953 12L17.25 15.4523L15.2288 17.547L12 14.094L8.69025 17.547L6.75 15.51L10.02 11.9805L6.75 8.52L8.69025 6.45225V6.4515ZM8.9565 6.1695L11.9865 3L15.0165 6.1695L13.422 7.86825L11.9865 6.28275L10.551 7.86825L8.9565 6.1695ZM8.9565 17.8305L10.551 16.1318L11.9865 17.7172L13.422 16.1318L15.0165 17.8305L11.9865 21L8.9565 17.8305Z" fill={color} /></Svg>;
}
export default adx;
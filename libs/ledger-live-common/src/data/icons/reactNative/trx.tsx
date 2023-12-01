
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function trx({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M16.449 7.43475L5.625 5.44275L11.3213 19.7767L19.2585 10.1062L16.449 7.43475ZM16.275 8.31225L17.931 9.8865L13.4025 10.7062L16.275 8.31225ZM12.4185 10.542L7.6455 6.5835L15.447 8.019L12.4185 10.542ZM12.0788 11.2425L11.3003 17.6775L7.104 7.11525L12.0788 11.2417V11.2425ZM12.7988 11.5837L17.814 10.6762L12.0615 17.6835L12.7988 11.5837Z" fill={color} /><Path d="M16.0072 6.82501L5.18323 4.83301L10.8795 19.167L18.8167 9.49651L16.0072 6.82501ZM15.8332 7.70251L17.4892 9.27676L12.9607 10.0965L15.8332 7.70251ZM11.9767 9.93226L7.20373 5.97376L15.0052 7.40926L11.9767 9.93226ZM11.637 10.6328L10.8585 17.0678L6.66223 6.50551L11.637 10.632V10.6328ZM12.357 10.974L17.3722 10.0665L11.6197 17.0738L12.357 10.974Z" fill={color} /></Svg>;
}
export default trx;
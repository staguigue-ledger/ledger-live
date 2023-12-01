
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function band({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M13.6796 9.37805L15.3296 10.3208V5.6063L12.0296 3.9563L6.90262 6.8438V17.097L12.0296 20.0438L17.0974 17.0386V11.9708L12.2059 9.02405L10.5559 9.84905L15.4474 12.7366L15.5059 16.2136L12.0296 18.1583L8.49337 16.1543V7.6688L12.0296 5.72405L13.6796 6.6083V9.37805Z" fill={color} /><Path d="M11.8526 12.2063L12.9724 11.6168L14.2099 12.3833L10.5559 14.4458V10.2031L11.8526 10.9688" fill={color} /></Svg>;
}
export default band;
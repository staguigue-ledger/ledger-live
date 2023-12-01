
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function krb({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M11.07 11.0296C11.2485 10.9988 11.406 10.9321 11.544 10.8308C11.682 10.7296 11.8125 10.5586 11.9348 10.3246L14.6535 5.08434C14.76 4.90884 14.8905 4.76934 15.0405 4.65984C15.1946 4.55324 15.3781 4.49739 15.5655 4.50009H17.2897L13.9042 10.6636C13.7542 10.9171 13.584 11.1233 13.3942 11.2831C13.2047 11.4407 12.9885 11.5634 12.756 11.6453C13.119 11.7391 13.4228 11.8913 13.671 12.1051C13.9155 12.3151 14.1487 12.6121 14.3655 12.9938L17.625 19.5001H15.7275C15.3442 19.5001 15.036 19.2938 14.8035 18.8851L12.132 13.3718C11.994 13.1258 11.844 12.9511 11.682 12.8453C11.5208 12.7403 11.3152 12.6781 11.0707 12.6623V15.4598H9.579V12.6503H8.4825V19.5001H6.375V4.50009H8.4825V11.0536H9.579V7.81209H11.0707V11.0296H11.07Z" fill={color} /></Svg>;
}
export default krb;
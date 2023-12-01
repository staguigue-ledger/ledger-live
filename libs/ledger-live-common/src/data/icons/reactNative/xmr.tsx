
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function xmr({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M11.9992 3.89325C16.488 3.89325 20.118 7.52325 20.118 12.0112C20.1149 12.8859 19.9737 13.7547 19.6995 14.5852H17.28V7.76475L12 13.0447L6.71996 7.76475V14.5852H4.29971C4.02574 13.7546 3.88476 12.8859 3.88196 12.0112C3.88196 7.52325 7.51196 3.89325 12 3.89325H11.9992ZM10.7902 14.232L12.0217 15.4432L13.2315 14.2327L15.5197 11.9227V16.2127H18.93C18.2066 17.4024 17.189 18.3857 15.9752 19.0677C14.7613 19.7498 13.3923 20.1076 12 20.1068C9.07346 20.1068 6.49946 18.5452 5.06996 16.2127H8.47946V11.9227L10.7895 14.2327L10.7902 14.232Z" fill={color} /></Svg>;
}
export default xmr;
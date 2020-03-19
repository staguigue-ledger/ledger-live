// @flow

import React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";

const Unfreeze = ({ size = 16, color }: { size?: number, color: string }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <Mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width={size}
      height={size}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3.36454V16.0002H12.6357L0 3.36454ZM15.7273 16.0002H16V0.000244141H0V0.272971L15.7273 16.0002Z"
        fill="#C4C4C4"
      />
    </Mask>
    <G mask="url(#mask0)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.95051 7.25024H4.31066L2.34851 5.28809L1.28785 6.34875L2.18934 7.25024H0V8.75024H2.18934L1.28785 9.65173L2.34851 10.7124L4.31066 8.75024H5.95051C5.97153 8.80767 5.9949 8.86398 6.02049 8.91903L2.37867 12.5608L3.43933 13.6215L7.08113 9.97971C7.13621 10.0053 7.19254 10.0287 7.25 10.0497V11.6896L5.28785 13.6517L6.34851 14.7124L7.25 13.8109V16.0002H8.75V13.8109L9.65149 14.7124L10.7121 13.6517L8.75 11.6896V10.0497C9.35165 9.8295 9.82926 9.35189 10.0495 8.75024H11.6893L13.6515 10.7124L14.7121 9.65173L13.8107 8.75024H16V7.25024H13.8107L14.7121 6.34875L13.6515 5.28809L11.6893 7.25024H10.0495C10.0285 7.19279 10.0051 7.13647 9.97948 7.08139L13.6212 3.43967L12.5606 2.379L8.9188 6.02075C8.86374 5.99515 8.80744 5.97178 8.75 5.95075V4.3109L10.7121 2.34876L9.65149 1.2881L8.75 2.18958V0.000244141H7.25V2.18958L6.34851 1.2881L5.28785 2.34876L7.25 4.3109V5.95075C6.64835 6.17098 6.17074 6.64859 5.95051 7.25024Z"
        fill={color}
        fillOpacity="0.5"
      />
    </G>
    <Path
      d="M0.727539 0.727539L15.273 15.273"
      stroke={color}
      strokeOpacity="0.5"
      strokeWidth="1.5"
    />
  </Svg>
);

export default Unfreeze;

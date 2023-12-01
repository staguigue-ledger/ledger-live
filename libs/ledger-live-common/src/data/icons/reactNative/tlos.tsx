
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function tlos({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M7.26397 19.7913L5.60444 14.0659L5.77039 10.8298L6.35122 10.083L5.43848 7.51076L7.76183 5.43634L13.2383 5.43634L14.151 4.10872L17.802 4.35765L16.6403 7.42778L19.4615 12.1574L18.8807 15.3105L16.2254 15.8084L15.8935 16.6382L13.0723 18.4637L7.26397 19.7913ZM7.34694 13.817L8.50861 17.7169L12.4085 16.8041L14.3999 15.4765L14.8978 14.2319L17.3041 13.817L17.5531 12.5723L14.6489 7.67671L15.2297 6.10015L14.8978 6.10015L13.9851 7.3448L8.25969 7.3448L7.34694 8.17457L8.17671 10.4979L7.34694 11.5766L7.34694 13.817Z" fill={color} fillRule="nonzero" opacity={1} stroke="none" /></Svg>;
}
export default tlos;
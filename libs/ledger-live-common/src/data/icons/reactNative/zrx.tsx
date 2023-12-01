
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function zrx({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M11.6225 20.25C11.42 20.229 11.2175 20.2103 11.015 20.1863C9.92625 20.0564 8.87482 19.7085 7.92352 19.1632C7.90927 19.1558 7.89652 19.1445 7.86877 19.1257C9.52327 17.8882 11.1703 16.6583 12.8263 15.4208L13.325 15.906C13.6025 16.1775 13.8815 16.446 14.1538 16.7213C14.2213 16.7887 14.27 16.788 14.3488 16.7475C15.1735 16.3358 15.8782 15.7184 16.3948 14.955L16.475 14.8365C16.4983 14.8635 16.52 14.8853 16.538 14.9093C17.1133 15.6757 17.6878 16.4422 18.2653 17.2065C18.3155 17.2725 18.3095 17.3115 18.2563 17.3715C16.919 18.891 15.257 19.827 13.2538 20.1473C13.0018 20.1877 12.746 20.2028 12.4918 20.2305C12.458 20.2343 12.4243 20.2432 12.3913 20.25H11.6225ZM12.35 3.75C12.4895 3.76425 12.6298 3.77925 12.77 3.792C13.952 3.9045 15.0575 4.25475 16.0873 4.842C16.1023 4.851 16.115 4.8615 16.1398 4.8795L11.1013 8.49375C11.0345 8.43075 10.97 8.37075 10.9063 8.3085C10.5523 7.9635 10.1968 7.61925 9.84502 7.27125C9.78877 7.21575 9.74602 7.20975 9.67552 7.245C8.83617 7.65922 8.11991 8.28601 7.59802 9.063L7.52302 9.1755L5.67202 6.7095C5.85877 6.5115 6.03127 6.31425 6.21802 6.132C7.43527 4.94475 8.88052 4.1895 10.5553 3.88575C10.8778 3.82725 11.207 3.80775 11.5333 3.7695C11.57 3.76575 11.6068 3.75675 11.6428 3.75H12.3493H12.35ZM4.84402 7.9005L8.59027 12.8115L7.83427 13.587C7.64602 13.7797 7.45927 13.9747 7.26727 14.1645C7.21327 14.2185 7.21102 14.2597 7.24402 14.3258C7.65765 15.1653 8.28425 15.8816 9.06127 16.4032C9.08752 16.4198 9.11377 16.437 9.13852 16.4557C9.14302 16.4587 9.14527 16.4663 9.15877 16.4918L6.71302 18.3263C5.25052 17.067 4.30177 15.5152 3.92077 13.6335C3.51277 11.619 3.84352 9.7155 4.84477 7.9005H4.84402ZM15.4753 11.178L16.1638 10.4633C16.3558 10.2638 16.5448 10.062 16.7413 9.86775C16.8028 9.807 16.802 9.76125 16.766 9.68925C16.3497 8.83965 15.7157 8.11557 14.9285 7.59075C14.9008 7.572 14.8738 7.55175 14.8265 7.518L17.2858 5.673C18.6785 6.8655 19.6033 8.3355 20.0278 10.1093C20.558 12.3232 20.0855 14.5132 19.1675 16.0553L15.4753 11.178Z" fill={color} /></Svg>;
}
export default zrx;
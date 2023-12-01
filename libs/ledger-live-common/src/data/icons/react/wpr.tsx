
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function wpr({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M2.63177 4.38407C3.22517 3.71082 3.89179 3.10583 4.61927 2.58032L7.95827 14.5188L9.43802 8.19032H12.243L13.722 14.5188L15.4748 8.19032H18.2865L18.3128 8.30282L21.3683 19.3383C20.8145 20.1046 20.1726 20.8031 19.4558 21.4196L16.878 12.1121L15.408 17.4206L15.3818 17.5331H12.2423L10.8405 12.3341L9.43802 17.5331H6.29852L6.27227 17.4206L2.63177 4.38407Z" fill={color} /></svg>;
}
export default wpr;
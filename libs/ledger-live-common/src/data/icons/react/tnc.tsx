
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function tnc({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13.6695 11.103L17.8942 18.375H6.18375L7.587 16.0477L13.896 16.0492L12.297 13.4393L13.6695 11.103ZM9.357 12.795L13.6522 5.655L19.5 15.5002H16.692L13.602 10.1302L12.1013 12.7958L9.357 12.795ZM13.0208 15.5093L4.5 15.4688L10.3553 5.625L11.7502 7.9845L8.523 13.173H11.6483L13.0208 15.5093Z" fill={color} /></svg>;
}
export default tnc;
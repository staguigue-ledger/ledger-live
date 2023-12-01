
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function via({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M8.34975 9.972H6.00375V8.68275H7.85625L6.435 4.97025L7.608 4.5L10.2705 11.4503L13.7213 11.4728L16.392 4.5L17.5658 4.97025L16.1437 8.68275H17.9963V9.97275H15.6503L15.072 11.4802L18 11.499L17.9925 12.7882L14.58 12.7665L12 19.5L9.408 12.7343L6 12.7118L6.0075 11.4233L8.913 11.442L8.34975 9.972ZM10.7647 12.7425L12 15.966L13.2285 12.7582L10.7647 12.7425Z" fill={color} /></svg>;
}
export default via;
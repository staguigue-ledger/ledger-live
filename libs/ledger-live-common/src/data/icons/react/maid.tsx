
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function maid({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M15.9745 9.52736V19.2571L7.75751 14.5269C5.32751 13.1041 5.48201 12.2191 5.48201 10.2969L13.9293 15.1809V10.7191L15.9738 9.52661L15.9745 9.52736Z" fill={color} /><path opacity={0.6} d="M13.9299 15.1809L5.4826 10.2961L13.6981 5.56589C16.1281 4.18064 16.8226 4.75814 18.5199 5.71964L10.0726 10.6044L13.9299 12.8349V15.1809Z" fill={color} /><path opacity={0.2} d="M10.0728 10.6044L18.52 5.7196V15.1809C18.52 17.9889 17.6718 18.2964 15.9745 19.2579V9.52735L12.0775 11.7571L10.072 10.6036L10.0728 10.6044Z" fill={color} /></svg>;
}
export default maid;
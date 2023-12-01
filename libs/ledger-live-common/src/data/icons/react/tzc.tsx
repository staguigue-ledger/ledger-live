
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function tzc({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13.275 11.5494V17.2479C13.428 17.2104 13.578 17.1676 13.725 17.1181V19.3006C12.7413 19.5321 11.7209 19.563 10.725 19.3914V11.5494H8.1V9.44939H15.9V11.5494H13.275ZM14.325 19.1319V16.8744C15.4307 16.3469 16.3242 15.4592 16.8587 14.357C17.3933 13.2547 17.5372 12.0035 17.2668 10.8086C16.9964 9.61382 16.3278 8.54644 15.3707 7.78176C14.4137 7.01708 13.225 6.60054 12 6.60054C10.775 6.60054 9.58633 7.01708 8.62926 7.78176C7.67219 8.54644 7.00357 9.61382 6.73318 10.8086C6.46279 12.0035 6.60669 13.2547 7.14127 14.357C7.67585 15.4592 8.56932 16.3469 9.675 16.8744V19.1319C6.67125 18.1531 4.5 15.3294 4.5 11.9994C4.5 7.85714 7.85775 4.49939 12 4.49939C16.1423 4.49939 19.5 7.85714 19.5 11.9994C19.5 15.3294 17.3288 18.1531 14.325 19.1319Z" fill={color} /></svg>;
}
export default tzc;
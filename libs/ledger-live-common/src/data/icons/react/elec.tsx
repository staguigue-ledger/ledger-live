
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function elec({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M8.28522 20.8451L17.7847 10.8679H12.0352L8.28522 20.8451Z" fill={color} /><path d="M6.21524 13.8574H11.9647L17.7847 10.8679H12.0352L6.21524 13.8574Z" fill={color} /><path d="M14.8477 3.15488L6.21524 13.8574H11.9647L14.8477 3.15488Z" fill={color} /></svg>;
}
export default elec;
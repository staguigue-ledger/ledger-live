
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function dot({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24"><path d="M 15.910156 2.515625 C 15.910156 1.125 13.933594 0 11.5 0 C 9.0625 0 7.089844 1.125 7.089844 2.515625 C 7.089844 3.90625 9.0625 5.035156 11.5 5.035156 C 13.933594 5.035156 15.910156 3.90625 15.910156 2.515625 Z M 15.910156 2.515625 " fill={color} /><path d="M 15.910156 21.480469 C 15.910156 20.089844 13.933594 18.964844 11.5 18.964844 C 9.0625 18.964844 7.089844 20.089844 7.089844 21.480469 C 7.089844 22.871094 9.0625 24 11.5 24 C 13.933594 24 15.910156 22.871094 15.910156 21.480469 Z M 15.910156 21.480469 " fill={color} /><path d="M 5.335938 3.511719 C 4.109375 2.816406 2.125 3.929688 0.90625 6 C -0.308594 8.070312 -0.300781 10.3125 0.925781 11.007812 C 2.152344 11.703125 4.136719 10.585938 5.351562 8.519531 C 6.570312 6.449219 6.5625 4.207031 5.335938 3.511719 Z M 5.335938 3.511719 " fill={color} /><path d="M 22.070312 12.992188 C 20.84375 12.296875 18.863281 13.414062 17.644531 15.480469 C 16.429688 17.550781 16.433594 19.792969 17.660156 20.488281 C 18.890625 21.183594 20.871094 20.070312 22.089844 18 C 23.304688 15.929688 23.296875 13.6875 22.070312 12.992188 Z M 22.070312 12.992188 " fill={color} /><path d="M 5.355469 15.480469 C 4.136719 13.410156 2.152344 12.296875 0.925781 12.992188 C -0.300781 13.6875 -0.308594 15.929688 0.910156 18 C 2.125 20.070312 4.109375 21.183594 5.335938 20.488281 C 6.5625 19.792969 6.570312 17.550781 5.355469 15.480469 Z M 5.355469 15.480469 " fill={color} /><path d="M 22.089844 6 C 20.871094 3.929688 18.890625 2.816406 17.664062 3.511719 C 16.4375 4.207031 16.429688 6.449219 17.648438 8.515625 C 18.863281 10.585938 20.847656 11.703125 22.074219 11.007812 C 23.300781 10.3125 23.308594 8.070312 22.089844 6 Z M 22.089844 6 " fill={color} /></svg>;
}
export default dot;
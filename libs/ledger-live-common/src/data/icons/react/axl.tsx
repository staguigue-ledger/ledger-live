
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function axl({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 19 19" fill="none"><path fill={color} d="M 3.746094 1.136719 L 2.609375 2.273438 L 3.210938 2.851562 C 3.546875 3.171875 4.964844 4.5625 6.367188 5.925781 C 8.75 8.253906 8.964844 8.429688 9.417969 8.429688 C 9.6875 8.429688 10.074219 8.347656 10.277344 8.242188 C 10.476562 8.136719 11.949219 6.730469 13.554688 5.125 L 16.457031 2.207031 L 14.25 0 L 9.566406 4.683594 L 7.226562 2.339844 L 4.882812 0 Z M 3.746094 1.136719 " /><path fill={color} d="M 1.136719 3.746094 L 0.0664062 4.816406 L 4.683594 9.433594 L 2.339844 11.773438 L 0 14.117188 L 1.097656 15.214844 L 2.207031 16.3125 L 5.3125 13.273438 C 8.589844 10.0625 8.738281 9.847656 8.417969 8.992188 C 8.296875 8.683594 2.460938 2.675781 2.273438 2.675781 C 2.234375 2.675781 1.726562 3.15625 1.136719 3.746094 Z M 1.136719 3.746094 " /><path fill={color} d="M 13.753906 5.578125 C 12.164062 7.183594 10.796875 8.628906 10.71875 8.789062 C 10.636719 8.953125 10.570312 9.3125 10.570312 9.582031 C 10.570312 10.0625 10.730469 10.25 13.675781 13.207031 L 16.792969 16.324219 L 19 14.117188 L 16.726562 11.839844 C 15.480469 10.582031 14.449219 9.5 14.449219 9.40625 C 14.449219 9.324219 15.496094 8.253906 16.753906 7.039062 L 19.066406 4.816406 L 17.996094 3.746094 C 17.40625 3.15625 16.871094 2.675781 16.792969 2.675781 C 16.710938 2.675781 15.347656 3.988281 13.753906 5.578125 Z M 13.753906 5.578125 " /><path fill={color} d="M 8.898438 10.625 C 8.683594 10.730469 7.171875 12.136719 5.554688 13.769531 L 2.609375 16.726562 L 3.71875 17.824219 L 4.816406 18.933594 L 9.5 14.25 L 14.183594 18.933594 L 15.292969 17.824219 L 16.402344 16.710938 L 13.421875 13.742188 C 11.773438 12.109375 10.289062 10.703125 10.128906 10.609375 C 9.753906 10.394531 9.394531 10.394531 8.898438 10.625 Z M 8.898438 10.625 " /></svg>;
}
export default axl;
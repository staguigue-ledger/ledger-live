
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function bnb({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M9.087 10.803L12 7.89L14.9145 10.8045L16.6095 9.1095L12 4.5L7.392 9.108L9.087 10.803ZM4.5 12L6.195 10.305L7.89 12L6.195 13.695L4.5 12ZM9.087 13.197L12 16.11L14.9145 13.1955L16.6095 14.8898L12 19.5L7.392 14.892L7.38975 14.8898L9.087 13.197ZM16.11 12L17.805 10.305L19.5 12L17.805 13.695L16.11 12ZM13.719 11.9985H13.7205V12L12 13.7205L10.2817 12.003L10.2787 12L10.2817 11.9977L10.5825 11.6962L10.7288 11.55L12 10.2795L13.7197 11.9992L13.719 11.9985Z" fill={color} /></svg>;
}
export default bnb;
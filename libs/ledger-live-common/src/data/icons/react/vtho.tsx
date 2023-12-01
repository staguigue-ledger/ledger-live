
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function vtho({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path opacity={0.5} d="M14.7101 3.79352H16.9774L12.7159 9.48152H16.5401L7.40514 20.2065L10.3601 12.6285H7.02264L10.3879 3.79352H14.7101Z" fill={color} /><path d="M14.7101 3.79352H14.8466L11.0164 10.3283H14.5189L7.40514 20.2058L10.3601 12.6285H7.02264L10.3879 3.79352H14.7101Z" fill={color} /></svg>;
}
export default vtho;
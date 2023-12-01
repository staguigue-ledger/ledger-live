
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function bnt({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M11.571 4.71417L8.18248 6.69942L11.571 8.68542L15.0232 6.69942L11.571 4.71417ZM12.1282 15.3147V19.2859L16.731 16.6602V12.6882L12.1282 15.3147ZM15.5805 7.94817V11.9202L12.1275 13.9062V9.93417L15.5805 7.94817ZM7.26898 11.9202L10.722 13.9062V9.93417L7.26898 7.94817V11.9202ZM7.26898 17.3007L10.722 19.2859V15.3147L7.26898 13.3294V17.2999V17.3007Z" fill={color} /></svg>;
}
export default bnt;
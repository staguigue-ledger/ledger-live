
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function tks({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13.3275 10.6875C13.4474 10.6803 13.5676 10.6803 13.6875 10.6875C14.7975 10.7625 15.3075 12.27 16.0125 12.1875C15.3518 12.7276 14.5854 13.1236 13.7625 13.35C13.4204 13.3999 13.0716 13.3301 12.775 13.1525C12.4785 12.9748 12.2524 12.7002 12.135 12.375V15.375L16.5 12.885V9L13.3275 10.6875ZM11.16 10.68C10.9945 10.5429 10.8596 10.3726 10.764 10.1801C10.6684 9.9876 10.6143 9.77721 10.605 9.5625V9.5025C10.605 8.6325 12.0075 7.2525 12.0525 7.2525C12.0975 7.2975 13.5 8.64 13.5 9.5025V9.57C13.4866 9.95518 13.3255 10.3204 13.05 10.59L16.5 8.7375L12 6.5325L7.5 8.715L11.16 10.68ZM11.895 12.405C11.779 12.7316 11.5535 13.0079 11.2568 13.187C10.9601 13.3661 10.6105 13.437 10.2675 13.3875C9.44465 13.1611 8.67824 12.7651 8.0175 12.225C8.7225 12.2775 9.225 10.7625 10.3425 10.725C10.4624 10.7178 10.5826 10.7178 10.7025 10.725L7.5 9V12.8925L11.9025 15.435L11.895 12.405Z" fill={color} /><path d="M12 3C7.02975 3 3 7.02975 3 12C3 16.9703 7.02975 21 12 21C16.9703 21 21 16.9703 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3ZM6.975 8.3925L12 5.955L17.0325 8.3925V13.185L12 16.0875L6.975 13.185V8.3925ZM17.0475 15.1425L12.0375 18.0375L6.9675 15.1125V14.835L12.0375 17.76L17.0475 14.865V15.1425ZM17.0475 14.58L12.0375 17.475L6.9675 14.55V14.25L12.0375 17.1825L17.0475 14.2875V14.58ZM17.0475 14.0175L12.0375 16.9125L6.9675 13.9875V13.71L12.0375 16.6425L17.0475 13.7475V14.0175Z" fill={color} /></svg>;
}
export default tks;
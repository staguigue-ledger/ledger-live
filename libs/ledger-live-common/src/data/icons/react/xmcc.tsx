
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function xmcc({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M17.0115 5.25H13.1415L11.991 7.239L10.8442 5.25H6.97275L3 12.1312L6.84675 18.7913L9.4545 14.277L12 18.672L14.538 14.277L17.1517 18.822L21 12.162L17.0115 5.25ZM6.8415 16.158L4.515 12.1335L6.36525 8.9295L8.69025 12.957L6.84075 16.1617V16.158H6.8415ZM7.1295 7.6065L7.743 6.54075H10.0612L11.2275 8.5605L9.4545 11.6347L7.1295 7.6065ZM11.9895 16.0305L10.218 12.954L11.991 9.88125L12.783 11.25L13.7655 12.9548L11.991 16.0275L11.9895 16.0312V16.0305ZM12.7523 8.5605L13.9208 6.54075H16.239L16.86 7.60575L14.52 11.6347L12.7523 8.55975V8.5605ZM18.7283 13.4633L17.1585 16.1865L15.2925 12.9465L17.6175 8.92725L18.2445 10.0073L19.4842 12.1545L18.7283 13.4633Z" fill={color} /><path d="M17.0115 5.214H13.1415L11.991 7.203L10.8442 5.214H6.97275L3 12.0953L6.84675 18.7553L9.4545 14.241L12 18.636L14.538 14.241L17.1517 18.786L21 12.126L17.0115 5.214ZM6.8415 16.122L4.515 12.0975L6.36525 8.8935L8.69025 12.921L6.84075 16.1258V16.122H6.8415ZM7.1295 7.5705L7.743 6.50475H10.0612L11.2275 8.5245L9.4545 11.5988L7.1295 7.5705ZM11.9895 15.9945L10.218 12.918L11.991 9.84525L12.783 11.214L13.7655 12.9188L11.991 15.9915L11.9895 15.9953V15.9945ZM12.7523 8.5245L13.9208 6.50475H16.239L16.86 7.56975L14.52 11.5988L12.7523 8.52375V8.5245ZM18.7283 13.4273L17.1585 16.1505L15.2925 12.9105L17.6175 8.89125L18.2445 9.97125L19.4842 12.1185L18.7283 13.4273Z" fill={color} /></svg>;
}
export default xmcc;
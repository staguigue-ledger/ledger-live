
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function tpay({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 20.4173C7.35151 20.4173 3.58276 16.6485 3.58276 12C3.58276 7.35151 7.35151 3.58276 12 3.58276C16.6485 3.58276 20.4173 7.35151 20.4173 12C20.4173 16.6485 16.6485 20.4173 12 20.4173ZM12 3.04651C7.06276 3.04651 3.04651 7.06276 3.04651 12C3.04651 16.9373 7.06276 20.9535 12 20.9535C16.9373 20.9535 20.9535 16.9373 20.9535 12C20.9535 7.06276 16.9373 3.04651 12 3.04651Z" fill={color} /><path fillRule="evenodd" clipRule="evenodd" d="M15.153 15.2025L14.6857 17.2267L14.5732 17.7165H14.0707L11.487 17.715H11.4765C10.4407 17.6977 9.62772 17.4225 9.09447 16.9365C9.55497 17.7487 10.533 18.219 11.898 18.2415H11.9085L14.4915 18.243H14.994L15.1072 17.7532L15.5745 15.729L15.21 14.9557L15.153 15.2025ZM14.3407 6.52421L13.9717 5.75696L13.9192 5.99696L13.569 7.59221H14.106L14.3407 6.52421ZM16.206 8.36996L15.741 10.3387L15.6255 10.8247H12.8257L12.1147 14.0707C12.0997 14.1637 12.0907 14.2582 12.0907 14.3107C12.0907 14.3565 12.096 14.3857 12.1005 14.4C12.1539 14.42 12.2107 14.4296 12.2677 14.4285H12.5737L13.2472 11.352H16.047L16.1617 10.8652L16.6267 8.89646L16.2652 8.11946L16.2052 8.36996H16.206ZM9.25947 10.8247H7.30872L7.98072 11.352H9.14472L9.25947 10.8247Z" fill={color} /><path fillRule="evenodd" clipRule="evenodd" d="M12.3292 15.0608H12.258C11.715 15.0466 11.4585 14.7638 11.4585 14.3108C11.4585 14.2028 11.4765 14.0596 11.4945 13.9523L12.318 10.1933H15.126L15.591 8.22456H12.783L13.302 5.86206H11.0115L10.4917 8.22456H8.0062L7.5592 10.1933H10.0447L9.0772 14.6146C9.0247 14.8291 9.00595 15.0796 9.00595 15.2048C9.00595 16.4663 10.0012 17.0588 11.487 17.0836L14.07 17.0843L14.5372 15.0608H12.3292Z" fill={color} /></svg>;
}
export default tpay;
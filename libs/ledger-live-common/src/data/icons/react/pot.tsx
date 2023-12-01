
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function pot({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.02481 13.6351L8.73231 15.1254L8.19981 17.8636C8.18481 17.9461 8.16381 18.0016 8.05881 18.0001C7.39731 17.9904 6.73581 17.9851 6.07431 17.9776C6.05856 17.9776 6.04206 17.9671 6.00006 17.9514L7.49256 10.4964H6.23481C6.23781 10.4409 6.23631 10.4079 6.24231 10.3764C6.31956 9.97361 6.40281 9.57161 6.47256 9.16736C6.49206 9.05486 6.54231 9.02636 6.64731 9.02711C6.95481 9.03011 7.26231 9.01886 7.56831 9.02936C7.71456 9.03386 7.77081 8.99186 7.79931 8.84786C7.97031 7.95686 8.15331 7.06886 8.32881 6.17936C8.34981 6.07361 8.37306 6.00086 8.51106 6.00086C10.0171 6.00536 11.5238 5.99111 13.0298 6.01061C13.9088 6.02186 14.7901 6.06686 15.6548 6.24461C15.9526 6.30611 16.2548 6.38561 16.5308 6.50861C17.3243 6.86111 17.8021 7.47161 17.9348 8.31686C18.1411 9.63011 17.8628 10.8369 17.0198 11.8884C16.3973 12.6624 15.5438 13.0966 14.5906 13.3606C13.8346 13.5699 13.0591 13.6351 12.2776 13.6366C11.2613 13.6389 10.2451 13.6366 9.22881 13.6359H9.02481V13.6351ZM9.44106 11.5816H9.65331C10.7281 11.5816 11.8028 11.5839 12.8783 11.5801C13.1071 11.5801 13.3388 11.5704 13.5661 11.5426C14.4338 11.4391 15.0931 11.0229 15.5146 10.2676C15.6954 9.94009 15.7562 9.55967 15.6863 9.19211C15.5978 8.66936 15.2858 8.32811 14.7556 8.23211C14.3674 8.15813 13.9738 8.11549 13.5788 8.10461C12.4748 8.08436 11.3708 8.09261 10.2661 8.08961C10.2263 8.08961 10.1866 8.09561 10.1333 8.10011L9.95031 9.03611H13.0178L12.7358 10.4896H9.65856L9.44106 11.5816Z" fill={color} /></svg>;
}
export default pot;
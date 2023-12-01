
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function vivo({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M17.2867 6.95741C17.3666 6.82156 17.4729 6.70309 17.5994 6.609C17.7259 6.51491 17.8699 6.44709 18.023 6.40955C18.1761 6.37202 18.3351 6.36552 18.4907 6.39044C18.6464 6.41536 18.7955 6.4712 18.9292 6.55466C19.4917 6.90716 19.6687 7.65716 19.3237 8.23241C18.0457 10.3609 16.6034 12.5884 15.4012 14.2894C13.6462 16.7719 13.2659 17.6247 11.9999 17.6247C10.7339 17.6247 10.4489 16.8724 8.64368 14.2827C7.57118 12.7452 6.22643 10.6864 4.69118 8.25566C4.51921 7.9836 4.46021 7.65517 4.52675 7.34028C4.59329 7.02538 4.7801 6.74889 5.04743 6.56966C5.17909 6.48296 5.3268 6.42354 5.48181 6.39489C5.63683 6.36624 5.79602 6.36895 5.94997 6.40286C6.10393 6.43677 6.24952 6.50119 6.37816 6.59231C6.5068 6.68344 6.61587 6.79942 6.69893 6.93341C8.21618 9.33491 11.6437 14.3404 12.0097 14.7867C12.3922 14.3337 16.0387 9.03641 17.2867 6.95666V6.95741Z" fill={color} /></Svg>;
}
export default vivo;
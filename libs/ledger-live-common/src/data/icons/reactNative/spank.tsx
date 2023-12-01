
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function spank({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M6.34462 16.6058V16.7115H5.23687V14.7113L5.20237 14.8223L4.14412 14.5028L4.74187 12.5753L4.66837 12.6832L3.75037 12.0735L4.89787 10.398L4.78837 10.485L4.09087 9.6375L5.74162 8.3205L5.53162 8.40075L5.13412 7.38225L7.10587 6.63675L6.87487 6.65175L6.79837 5.56425L8.86237 5.42175L8.67562 5.37975L8.92462 4.317L10.8971 4.7655L10.7726 4.695L11.3254 3.75L13.0451 4.728L12.9776 4.6575L13.7876 3.9135L15.1271 5.328L15.0986 5.271L16.0939 4.7925L16.9534 6.528L16.9459 6.47925L18.0386 6.30825L18.3611 8.313L18.3836 8.1705L19.4779 8.34075L19.1509 10.3748L19.2311 10.2112L20.2264 10.6898L19.3054 12.5505L19.4404 12.408L20.2496 13.1528L18.8179 14.6647L18.9911 14.5665L19.5446 15.5115L17.7454 16.5345L17.9261 16.4932L18.1759 17.556L16.1869 18.0082L16.3406 18.0187L16.2634 19.107L14.2729 18.9697L14.3741 19.008L13.9766 20.0265L12.0716 19.3065L12.1924 19.4025L11.4956 20.25L9.92287 18.9952L10.0009 19.1085L9.08287 19.719L7.95787 18.0765L7.99162 18.1845L6.93262 18.504L6.34462 16.6058ZM6.34462 15.3097L7.03612 15.1012L7.57312 16.8337L8.17162 16.4363L9.19312 17.9288L9.64987 17.3738L11.0659 18.5033L11.3194 17.853L13.0264 18.498L13.0759 17.7938L14.9029 17.9198L14.7379 17.2185L16.5289 16.8113L16.1576 16.1782L17.7559 15.2692L17.2084 14.7667L18.4706 13.4332L17.7971 13.1093L18.6094 11.4698L17.8729 11.3542L18.1624 9.55425L17.4574 9.66375L17.1686 7.86375L16.5341 8.16825L15.7279 6.54075L15.2104 7.0155L13.9639 5.69775L13.6069 6.30675L12.0281 5.409L11.8646 6.105L10.0886 5.70075L10.1404 6.4275L8.31712 6.55275L8.58637 7.245L6.86887 7.8945L7.33162 8.45625L5.89012 9.606L6.49837 10.0103L5.46037 11.5275L6.16012 11.739L5.61787 13.4872H6.34537L6.34462 15.3097ZM11.7821 13.266C11.7821 12.99 11.6846 12.7793 11.4904 12.633C11.2954 12.4838 10.9466 12.3278 10.4411 12.1658C9.93562 12.0008 9.53587 11.838 9.24112 11.6783C8.43862 11.2432 8.03662 10.6582 8.03662 9.921C8.03662 9.53775 8.14312 9.1965 8.35687 8.898C8.57437 8.59575 8.88337 8.36025 9.28462 8.1915C9.68962 8.02275 10.1434 7.93875 10.6451 7.93875C11.1506 7.93875 11.6006 8.031 11.9951 8.21625C12.3904 8.39775 12.6964 8.65575 12.9139 8.99025C13.1353 9.32876 13.2502 9.72582 13.2439 10.1302H11.7866C11.7866 9.8055 11.6846 9.5535 11.4806 9.375C11.2766 9.1935 10.9901 9.10275 10.6211 9.10275C10.2649 9.10275 9.98737 9.1785 9.79012 9.3315C9.696 9.39881 9.61979 9.48813 9.56815 9.59168C9.51651 9.69522 9.49101 9.80983 9.49387 9.9255C9.49387 10.1558 9.60862 10.3492 9.83887 10.5052C10.0714 10.6605 10.4134 10.8067 10.8634 10.9432C11.6929 11.193 12.2966 11.5035 12.6754 11.8733C13.0549 12.2438 13.2439 12.705 13.2439 13.2562C13.2439 13.8705 13.0121 14.352 12.5494 14.703C12.0859 15.0503 11.4626 15.2242 10.6789 15.2242C10.168 15.231 9.66143 15.1298 9.19237 14.9272C8.74612 14.7255 8.40412 14.451 8.16787 14.1038C7.93462 13.7565 7.81762 13.3538 7.81762 12.8962H9.28012C9.28012 13.6785 9.74662 14.07 10.6789 14.07C11.0254 14.07 11.2961 14.0002 11.4904 13.86C11.5845 13.793 11.6604 13.7036 11.7114 13.5999C11.7623 13.4962 11.7866 13.3814 11.7821 13.266ZM16.2296 8.9175L14.8249 14.0565L13.6676 13.9755L14.5429 8.6775L16.2296 8.9175ZM15.0041 14.592L14.6389 16.4078L13.0999 15.9585L13.4531 14.217L15.0041 14.592Z" fill={color} /></Svg>;
}
export default spank;

      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function trtl({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12.0019 4.05421C12.2974 4.05421 12.5876 4.13146 12.8434 4.27921L18.2134 7.37971C18.4693 7.52758 18.6819 7.74025 18.8296 7.99632C18.9773 8.25239 19.055 8.54284 19.0549 8.83846V15.164C19.0549 15.7655 18.7346 16.3212 18.2134 16.622L12.8426 19.7232C12.5867 19.871 12.2963 19.9488 12.0007 19.9488C11.7052 19.9488 11.4148 19.871 11.1589 19.7232L5.78737 16.622C5.53141 16.4742 5.31884 16.2617 5.171 16.0057C5.02316 15.7498 4.94526 15.4595 4.94512 15.164V8.83846C4.94512 8.23696 5.26612 7.68121 5.78737 7.37971L11.1574 4.27921C11.4139 4.13146 11.7049 4.05346 11.9996 4.05346H12.0011L12.0019 4.05421ZM12.0004 2.88346C11.4996 2.88375 11.0076 3.01566 10.5739 3.26596L5.20237 6.36571C4.76895 6.61682 4.40902 6.97728 4.15857 7.41108C3.90811 7.84487 3.77589 8.3368 3.77512 8.83771V15.1632C3.77589 15.6641 3.90811 16.156 4.15857 16.5898C4.40902 17.0236 4.76895 17.3841 5.20237 17.6352L10.5724 20.7357C11.4559 21.2457 12.5441 21.2457 13.4269 20.7357L18.7976 17.6352C19.231 17.3841 19.591 17.0236 19.8414 16.5898C20.0919 16.156 20.2241 15.6641 20.2249 15.1632V8.83771C20.2241 8.3368 20.0919 7.84487 19.8414 7.41108C19.591 6.97728 19.231 6.61682 18.7976 6.36571L13.4276 3.26446C12.9934 3.0139 12.5009 2.88199 11.9996 2.88196L12.0004 2.88346Z" fill={color} /><path d="M11.3426 12.9942C11.2809 12.9943 11.2203 12.9781 11.1668 12.9473C11.1134 12.9165 11.069 12.8721 11.0381 12.8187L10.3924 11.6989C10.3616 11.6456 10.3454 11.5851 10.3454 11.5234C10.3454 11.4618 10.3616 11.4013 10.3924 11.3479L11.0381 10.2282C11.069 10.1748 11.1134 10.1304 11.1668 10.0996C11.2203 10.0688 11.2809 10.0526 11.3426 10.0527H12.6611C12.7227 10.0529 12.7831 10.0692 12.8364 10.1C12.8897 10.1308 12.934 10.175 12.9649 10.2282L13.6114 11.3479C13.6422 11.4013 13.6584 11.4618 13.6584 11.5234C13.6584 11.5851 13.6422 11.6456 13.6114 11.6989L12.9649 12.8187C12.9341 12.872 12.8898 12.9163 12.8365 12.9471C12.7832 12.9779 12.7227 12.9942 12.6611 12.9942H11.3426ZM9.58089 11.2309C9.64256 11.2309 9.70314 11.2146 9.75657 11.1838C9.81001 11.153 9.85442 11.1088 9.88539 11.0554L10.5311 9.93569C10.5619 9.88233 10.5782 9.8218 10.5782 9.76019C10.5782 9.69858 10.5619 9.63805 10.5311 9.58469L9.72564 8.18894L8.15289 9.04694C8.09651 9.07783 8.04969 9.12362 8.01756 9.1793C7.98542 9.23498 7.96919 9.29842 7.97064 9.36269C7.98339 9.99119 8.05689 10.6167 8.18889 11.2309H9.58089ZM14.4221 11.2309C14.3606 11.2309 14.3001 11.2147 14.2468 11.1839C14.1935 11.1531 14.1492 11.1088 14.1184 11.0554L13.4719 9.93569C13.4411 9.88233 13.4249 9.8218 13.4249 9.76019C13.4249 9.69858 13.4411 9.63805 13.4719 9.58469L14.2774 8.18894L15.8494 9.04694C15.9058 9.07767 15.9527 9.1233 15.985 9.17884C16.0172 9.23438 16.0336 9.29772 16.0324 9.36194C16.0196 9.99045 15.9468 10.6163 15.8149 11.2309H14.4221ZM12.1699 7.03769C12.1184 7.00959 12.0606 6.99487 12.0019 6.99487C11.9432 6.99487 11.8854 7.00959 11.8339 7.03769L10.2394 7.90769L11.0389 9.29219C11.0697 9.34552 11.114 9.3898 11.1673 9.42061C11.2206 9.45141 11.2811 9.46765 11.3426 9.46769H12.6611C12.7227 9.46773 12.7832 9.45152 12.8366 9.42071C12.8899 9.3899 12.9342 9.34557 12.9649 9.29219L13.7644 7.90844L12.1699 7.03844V7.03769ZM8.33439 11.8159C8.6352 12.8861 9.1158 13.8972 9.75564 14.8062L10.5319 13.4622C10.5627 13.4088 10.5789 13.3483 10.5789 13.2867C10.5789 13.2251 10.5627 13.1645 10.5319 13.1112L9.88539 11.9914C9.8546 11.9381 9.81033 11.8938 9.75701 11.863C9.7037 11.8322 9.64322 11.816 9.58164 11.8159H8.33439ZM15.6679 11.8159C15.3673 12.886 14.887 13.8972 14.2474 14.8062L13.4711 13.4622C13.4403 13.4088 13.4241 13.3483 13.4241 13.2867C13.4241 13.2251 13.4403 13.1645 13.4711 13.1112L14.1184 11.9914C14.1492 11.9381 14.1935 11.8938 14.2468 11.863C14.3001 11.8322 14.3606 11.816 14.4221 11.8159H15.6686H15.6679ZM11.3426 13.5792C11.2809 13.5791 11.2203 13.5953 11.1668 13.6261C11.1134 13.6569 11.069 13.7013 11.0381 13.7547L10.1381 15.3147C10.6228 15.9169 11.1763 16.4604 11.7874 16.9339C11.849 16.9813 11.9245 17.007 12.0023 17.007C12.08 17.007 12.1555 16.9813 12.2171 16.9339C12.828 16.4601 13.3812 15.9164 13.8656 15.3139L12.9656 13.7547C12.9349 13.7014 12.8906 13.6571 12.8373 13.6263C12.7839 13.5955 12.7235 13.5792 12.6619 13.5792H11.3419H11.3426Z" fill={color} /></svg>;
}
export default trtl;
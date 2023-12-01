
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function clam({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M13.3575 5.9025V5.83575C13.4902 5.7795 13.7535 5.72625 14.2065 5.84775C14.7247 5.98725 15.1252 6.50775 15.309 6.78825L15.3075 6.96825C15.2985 7.9725 14.979 10.4535 14.4255 12.3135C13.9417 13.9387 12.8865 16.101 12.672 16.533C12.5666 16.5098 12.4599 16.493 12.3525 16.4827C12.4417 15.9345 12.831 13.4925 13.0762 11.2673C13.3365 8.90625 13.3567 6.56475 13.3567 5.90325L13.3575 5.9025ZM15.5317 6.9705V6.96225C15.7267 6.95775 16.1587 6.993 16.6515 7.31025C17.1285 7.617 17.3745 8.2005 17.4765 8.514L17.4292 8.69925C17.313 9.15075 16.452 11.478 15.5257 13.2322C14.7397 14.7188 13.485 16.3635 13.2112 16.716C13.108 16.6669 13.0015 16.625 12.8925 16.5907C13.1475 16.0755 14.1652 13.9725 14.64 12.3757C15.1995 10.4962 15.522 7.98675 15.5317 6.9705ZM15.7245 13.3335C16.6065 11.6632 17.4975 9.3195 17.6445 8.76075C17.8387 8.83125 18.2557 9.018 18.5272 9.3885C18.7597 9.705 18.8355 10.1332 18.8602 10.4025L18.7695 10.614C18.594 11.0213 17.5245 12.8977 16.4467 14.235C15.5137 15.393 14.112 16.767 13.776 17.0925C13.6629 16.991 13.5403 16.9006 13.41 16.8225C13.7257 16.4145 14.9497 14.7998 15.7245 13.3335ZM8.25371 7.1445L8.22746 6.939C8.34971 6.67275 8.61971 6.22875 9.13646 5.9925C9.69896 5.736 10.1362 5.80575 10.332 5.86275L10.3335 5.907C10.3485 6.35325 10.4662 8.55 10.7535 11.1428C11.0175 13.515 11.4427 16.038 11.5245 16.5173C11.412 16.5375 11.3017 16.5652 11.1937 16.5997C10.9852 16.1572 10.0567 14.1472 9.43271 12.1335C8.73671 9.88725 8.33771 7.80225 8.25371 7.1445ZM10.557 5.8995L10.554 5.79675C10.7595 5.61225 11.238 5.25 11.8365 5.25C12.4335 5.25 12.9225 5.61225 13.1332 5.7975V5.9025C13.1332 6.56175 13.113 8.8935 12.8535 11.2425C12.6052 13.4955 12.2085 15.9728 12.1275 16.4708L12.069 16.4692C11.961 16.4692 11.8537 16.4753 11.7465 16.4858C11.667 16.0245 11.2402 13.4955 10.9762 11.1187C10.6897 8.53275 10.5727 6.3435 10.557 5.89875V5.8995ZM12.069 16.6898C13.2817 16.6898 13.8405 17.4255 14.0092 17.706C13.0905 18.351 12.3427 18.75 12.0787 18.75C11.8147 18.75 11.1585 18.42 10.1265 17.6737C10.2915 17.4075 10.848 16.6898 12.069 16.6898ZM18.9697 10.7137C19.1542 10.8337 19.533 11.157 19.4977 11.7787C19.4512 12.5977 18.0465 14.2207 16.2825 15.8625C15.621 16.4769 14.9222 17.0497 14.19 17.5778C14.1148 17.4605 14.0292 17.3503 13.9342 17.2485C14.2762 16.9177 15.6832 15.5385 16.6222 14.3722C17.7022 13.0328 18.777 11.151 18.9697 10.7137ZM5.11496 10.5547C5.06034 10.4191 5.00857 10.2823 4.95971 10.1445C4.95875 9.90156 5.01802 9.66218 5.13221 9.44775C5.38871 8.98275 6.03971 8.76975 6.29771 8.7015L6.29921 8.706L6.32696 8.8035C6.51446 9.45675 6.95246 10.9875 8.10596 13.2C9.13571 15.1748 10.2547 16.5398 10.5682 16.905C10.4842 16.9624 10.404 17.0253 10.3282 17.0933C9.26991 16.1769 8.28931 15.1745 7.39646 14.0963C6.28496 12.7523 5.51771 11.5612 5.11496 10.5547ZM10.17 17.2507C10.0875 17.3407 10.0125 17.4382 9.94496 17.5417C9.29469 17.0568 8.6618 16.549 8.04746 16.0192C5.78846 14.088 4.55246 12.7448 4.50296 11.8965C4.46546 11.2493 4.79396 10.884 4.95296 10.7468C5.37446 11.7495 6.13646 12.9218 7.22246 14.2358C8.12059 15.3197 9.10642 16.3278 10.17 17.25V17.2507ZM6.51521 8.64525C6.4908 8.56189 6.46779 8.47813 6.44621 8.394C6.50396 8.1195 6.64646 7.7085 6.99521 7.455C7.29463 7.23772 7.65918 7.12899 8.02871 7.14675L8.03246 7.17225C8.11721 7.836 8.51846 9.93825 9.21896 12.1973C9.83996 14.2005 10.7587 16.2 10.9837 16.6785C10.9074 16.7106 10.8328 16.7466 10.7602 16.7865C10.4865 16.47 9.35096 15.1042 8.30621 13.0995C7.16246 10.9065 6.72896 9.39075 6.54371 8.7435L6.51521 8.64525Z" fill={color} /></svg>;
}
export default clam;
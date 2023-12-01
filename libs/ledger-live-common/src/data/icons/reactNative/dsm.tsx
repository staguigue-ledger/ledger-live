
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function dsm({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" clipRule="evenodd" d="M72.2018 131.789C78.244 131.789 85.1536 130.259 92.1653 127.398C92.3848 127.311 92.6031 127.217 92.8202 127.12C93.0199 127.031 93.2184 126.94 93.4135 126.849L93.5006 126.81L93.5145 126.803C96.4764 126.072 99.5579 125.07 102.637 123.797C122.417 115.672 130.776 102.695 131.988 93.1489C133.445 81.4693 126.014 70.2996 116.674 61.9204C112.231 56.7474 106.724 52.2193 101.252 48.7251C94.3215 44.2848 87.2238 41.2422 80.9819 39.8405C74.762 38.4433 69.2956 38.6552 65.7125 40.8558C62.27 42.959 59.7376 46.9591 57.9902 52.9422C55.4382 55.9021 53.5596 60.3809 52.2777 66.4638C50.9831 72.6067 50.29 80.4279 50.153 90.0621C50.0148 100.139 50.708 108.386 52.2383 114.748C53.7662 121.099 56.143 125.634 59.4288 128.209C62.4325 130.566 66.8725 131.789 72.2018 131.789ZM96.8549 117.929C103.341 115.261 108.605 112.069 112.807 108.642C108.707 114.043 102.144 119.465 92.4394 123.724C90.2786 124.24 88.1933 124.598 86.2171 124.796C84.1493 125.003 82.1998 125.035 80.4048 124.893C76.8809 124.614 73.9852 123.666 71.951 122.079L71.713 121.882C73.3118 122.166 75.0418 122.321 76.8891 122.321C82.9313 122.321 89.8432 120.789 96.8549 117.929ZM118.209 96.3348C118.165 96.7507 118.098 97.1739 118.012 97.6096C117.932 98.0125 117.836 98.4261 117.725 98.855C113.455 104.623 106.359 110.473 95.6068 114.904C90.0893 117.172 84.7414 118.52 80.0228 118.942C75.3715 119.358 71.3658 118.873 68.4097 117.521C65.2586 111.438 63.7271 101.087 63.9384 86.5057C64.0743 77.3088 64.728 69.8293 65.9076 63.9986C67.0617 58.2931 68.7104 54.2131 70.8294 51.6413C77.4475 52.1207 86.1498 55.3644 94.7708 60.8982C101.035 64.9136 107.342 70.3143 111.857 76.4516C116.376 82.5917 119.073 89.427 118.209 96.3348ZM96.5658 58.1633C88.9503 53.2878 81.1293 50.09 74.4613 48.9098C75.2101 48.609 76.0554 48.3852 76.997 48.2424C77.804 48.12 78.6818 48.0571 79.628 48.0571C86.5899 48.0571 96.178 51.515 105.302 57.3599C108.408 59.3373 111.514 61.6745 114.409 64.2802C120.169 71.0328 123.908 78.9168 122.927 86.8672C122.728 88.4644 122.302 90.1794 121.608 91.9528C121.126 85.4564 118.119 79.2216 113.845 73.6657C109.116 67.5154 102.81 62.164 96.5658 58.1633ZM60.9684 54.5145C61.5303 53.9411 62.1399 53.4522 62.7715 53.0697C63.301 52.7428 63.8908 52.4708 64.5387 52.2538C65.2144 52.0278 65.9552 51.8606 66.7575 51.753C64.8673 54.8777 63.445 59.1061 62.4488 64.4972C61.362 70.3733 60.7745 77.6607 60.6526 86.462C60.4935 97.2272 61.2993 105.9 63.0676 112.424C61.6128 109.912 60.4656 106.55 59.6459 102.329C58.5359 96.6107 58.0332 89.3613 58.1551 80.6064C58.306 69.4038 59.2384 60.743 60.9684 54.5145ZM73.8459 42.1584C78.8118 42.1584 85.1432 43.9312 91.6939 47.0928C88.7483 46.1024 85.9211 45.4242 83.3017 45.0808C78.5459 44.4582 74.4125 44.933 71.5249 46.7245C70.7505 47.1982 70.0654 47.7517 69.392 48.405C66.9259 48.375 64.6989 48.7076 62.8226 49.4356C64.1207 46.635 65.6986 44.725 67.4913 43.6309C69.0379 42.6632 71.1603 42.1584 73.8459 42.1584ZM65.4467 119.602L65.6069 119.701C65.7485 119.787 65.8937 119.873 66.04 119.956C67.1453 121.882 68.4399 123.437 69.9284 124.609C72.1554 126.361 75.1695 127.472 78.7468 127.941C75.5329 128.497 72.5408 128.665 69.8901 128.451C66.3802 128.169 63.4984 127.22 61.4793 125.647C58.7438 123.491 56.6596 119.472 55.3023 113.507C53.9474 107.555 53.332 99.7366 53.4678 90.0746C53.6002 80.6222 54.2876 72.9943 55.5322 67.0984C55.1526 71.1234 54.9285 75.6068 54.8704 80.5639C54.7172 90.6412 55.4103 98.8879 56.9441 105.249C58.4767 111.601 60.8616 116.136 64.1463 118.71L64.1555 118.717C64.4748 118.955 64.8023 119.185 65.1425 119.407L65.4467 119.602ZM126.176 87.2796C126.563 84.1311 126.307 81.0172 125.545 77.9904C128.048 82.7197 129.321 87.7346 128.68 92.7653C127.794 99.8035 122.332 109.217 109.852 116.596C115.829 111.224 119.287 105.413 120.753 100.249C123.988 95.7388 125.68 91.2146 126.176 87.2796Z" fill={color} /></Svg>;
}
export default dsm;
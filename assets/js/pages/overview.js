window.chartColors = {
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  lightBlue: "rgb(14, 162, 249)",
  darkBlue: "rgb(7, 94, 145)",
  yellow: "rgb(191, 182, 30)",
  lightYellow: "rgb(242, 230, 38)",
  darkestGreen: "rgb(4, 124, 80)",
  lightDarkestGreen: "rgb(5, 181, 116)",
  darkerGreen: "rgb(6, 150, 8)",
  lightDarkerGreen: "rgb(8, 204, 11)",
  darkGreen: "rgb(109, 153, 7)",
  lightGreen: "rgb(166, 234, 9)",
  red: "rgb(255, 99, 132)"
};

var tripsByDayByRegionData = [
  {
    key: "2018-01-01",
    values: [
      { key: "San Francisco", value: 998 },
      { key: "East Bay", value: 290 },
      { key: "San Jose", value: 71 },
      { key: "null", value: 16 }
    ]
  },
  {
    key: "2018-01-02",
    values: [
      { key: "San Francisco", value: 2485 },
      { key: "East Bay", value: 633 },
      { key: "San Jose", value: 97 },
      { key: "null", value: 37 }
    ]
  },
  {
    key: "2018-01-03",
    values: [
      { key: "East Bay", value: 527 },
      { key: "San Francisco", value: 2235 },
      { key: "San Jose", value: 66 },
      { key: "null", value: 29 }
    ]
  },
  {
    key: "2018-01-04",
    values: [
      { key: "San Francisco", value: 2569 },
      { key: "East Bay", value: 609 },
      { key: "San Jose", value: 91 },
      { key: "null", value: 31 }
    ]
  },
  {
    key: "2018-01-05",
    values: [
      { key: "San Francisco", value: 1655 },
      { key: "East Bay", value: 384 },
      { key: "San Jose", value: 86 },
      { key: "null", value: 25 }
    ]
  },
  {
    key: "2018-01-06",
    values: [
      { key: "San Francisco", value: 1326 },
      { key: "San Jose", value: 66 },
      { key: "East Bay", value: 417 },
      { key: "null", value: 34 }
    ]
  },
  {
    key: "2018-01-07",
    values: [
      { key: "San Francisco", value: 967 },
      { key: "East Bay", value: 344 },
      { key: "null", value: 6 },
      { key: "San Jose", value: 65 }
    ]
  },
  {
    key: "2018-01-08",
    values: [
      { key: "San Francisco", value: 624 },
      { key: "East Bay", value: 141 },
      { key: "null", value: 6 },
      { key: "San Jose", value: 34 }
    ]
  },
  {
    key: "2018-01-09",
    values: [
      { key: "East Bay", value: 671 },
      { key: "San Francisco", value: 2786 },
      { key: "San Jose", value: 56 },
      { key: "null", value: 39 }
    ]
  },
  {
    key: "2018-01-10",
    values: [
      { key: "San Francisco", value: 2675 },
      { key: "East Bay", value: 669 },
      { key: "San Jose", value: 88 },
      { key: "null", value: 27 }
    ]
  },
  {
    key: "2018-01-11",
    values: [
      { key: "San Francisco", value: 3220 },
      { key: "East Bay", value: 708 },
      { key: "San Jose", value: 125 },
      { key: "null", value: 46 }
    ]
  },
  {
    key: "2018-01-12",
    values: [
      { key: "East Bay", value: 737 },
      { key: "San Francisco", value: 3042 },
      { key: "San Jose", value: 84 },
      { key: "null", value: 28 }
    ]
  },
  {
    key: "2018-01-13",
    values: [
      { key: "San Francisco", value: 1393 },
      { key: "East Bay", value: 512 },
      { key: "San Jose", value: 88 },
      { key: "null", value: 24 }
    ]
  },
  {
    key: "2018-01-14",
    values: [
      { key: "San Francisco", value: 1227 },
      { key: "East Bay", value: 429 },
      { key: "San Jose", value: 55 },
      { key: "null", value: 14 }
    ]
  },
  {
    key: "2018-01-15",
    values: [
      { key: "East Bay", value: 487 },
      { key: "San Francisco", value: 1617 },
      { key: "null", value: 19 },
      { key: "San Jose", value: 73 }
    ]
  },
  {
    key: "2018-01-16",
    values: [
      { key: "East Bay", value: 810 },
      { key: "San Francisco", value: 3304 },
      { key: "San Jose", value: 117 },
      { key: "null", value: 45 }
    ]
  },
  {
    key: "2018-01-17",
    values: [
      { key: "East Bay", value: 891 },
      { key: "San Francisco", value: 3476 },
      { key: "San Jose", value: 110 },
      { key: "null", value: 40 }
    ]
  },
  {
    key: "2018-01-18",
    values: [
      { key: "San Francisco", value: 1867 },
      { key: "San Jose", value: 101 },
      { key: "East Bay", value: 619 },
      { key: "null", value: 17 }
    ]
  },
  {
    key: "2018-01-19",
    values: [
      { key: "San Francisco", value: 2955 },
      { key: "East Bay", value: 709 },
      { key: "San Jose", value: 128 },
      { key: "null", value: 49 }
    ]
  },
  {
    key: "2018-01-20",
    values: [
      { key: "San Francisco", value: 1708 },
      { key: "San Jose", value: 105 },
      { key: "East Bay", value: 628 },
      { key: "null", value: 42 }
    ]
  },
  {
    key: "2018-01-21",
    values: [
      { key: "San Francisco", value: 1214 },
      { key: "San Jose", value: 67 },
      { key: "East Bay", value: 430 },
      { key: "null", value: 19 }
    ]
  },
  {
    key: "2018-01-22",
    values: [
      { key: "San Francisco", value: 2954 },
      { key: "East Bay", value: 708 },
      { key: "San Jose", value: 96 },
      { key: "null", value: 37 }
    ]
  },
  {
    key: "2018-01-23",
    values: [
      { key: "San Jose", value: 145 },
      { key: "San Francisco", value: 3384 },
      { key: "East Bay", value: 919 },
      { key: "null", value: 39 }
    ]
  },
  {
    key: "2018-01-24",
    values: [
      { key: "San Francisco", value: 2330 },
      { key: "East Bay", value: 594 },
      { key: "San Jose", value: 114 },
      { key: "null", value: 28 }
    ]
  },
  {
    key: "2018-01-25",
    values: [
      { key: "San Francisco", value: 3130 },
      { key: "East Bay", value: 739 },
      { key: "San Jose", value: 146 },
      { key: "null", value: 40 }
    ]
  },
  {
    key: "2018-01-26",
    values: [
      { key: "San Francisco", value: 2910 },
      { key: "East Bay", value: 764 },
      { key: "null", value: 38 },
      { key: "San Jose", value: 134 }
    ]
  },
  {
    key: "2018-01-27",
    values: [
      { key: "East Bay", value: 570 },
      { key: "San Francisco", value: 1675 },
      { key: "San Jose", value: 85 },
      { key: "null", value: 18 }
    ]
  },
  {
    key: "2018-01-28",
    values: [
      { key: "San Francisco", value: 1590 },
      { key: "East Bay", value: 472 },
      { key: "San Jose", value: 104 },
      { key: "null", value: 11 }
    ]
  },
  {
    key: "2018-01-29",
    values: [
      { key: "San Francisco", value: 3373 },
      { key: "East Bay", value: 846 },
      { key: "null", value: 47 },
      { key: "San Jose", value: 201 }
    ]
  },
  {
    key: "2018-01-30",
    values: [
      { key: "San Francisco", value: 3590 },
      { key: "East Bay", value: 913 },
      { key: "San Jose", value: 178 },
      { key: "null", value: 50 }
    ]
  },
  {
    key: "2018-01-31",
    values: [
      { key: "San Francisco", value: 3330 },
      { key: "San Jose", value: 171 },
      { key: "East Bay", value: 899 },
      { key: "null", value: 76 }
    ]
  },
  {
    key: "2018-02-01",
    values: [
      { key: "San Francisco", value: 3532 },
      { key: "East Bay", value: 984 },
      { key: "San Jose", value: 197 },
      { key: "null", value: 82 }
    ]
  },
  {
    key: "2018-02-02",
    values: [
      { key: "San Francisco", value: 3375 },
      { key: "East Bay", value: 938 },
      { key: "null", value: 81 },
      { key: "San Jose", value: 178 }
    ]
  },
  {
    key: "2018-02-03",
    values: [
      { key: "East Bay", value: 696 },
      { key: "San Francisco", value: 1956 },
      { key: "San Jose", value: 121 },
      { key: "null", value: 44 }
    ]
  },
  {
    key: "2018-02-04",
    values: [
      { key: "East Bay", value: 484 },
      { key: "San Francisco", value: 1506 },
      { key: "San Jose", value: 76 },
      { key: "null", value: 31 }
    ]
  },
  {
    key: "2018-02-05",
    values: [
      { key: "East Bay", value: 932 },
      { key: "San Francisco", value: 3503 },
      { key: "San Jose", value: 208 },
      { key: "null", value: 82 }
    ]
  },
  {
    key: "2018-02-06",
    values: [
      { key: "San Francisco", value: 3821 },
      { key: "East Bay", value: 1015 },
      { key: "San Jose", value: 228 },
      { key: "null", value: 95 }
    ]
  },
  {
    key: "2018-02-07",
    values: [
      { key: "East Bay", value: 1008 },
      { key: "San Francisco", value: 3735 },
      { key: "San Jose", value: 248 },
      { key: "null", value: 101 }
    ]
  },
  {
    key: "2018-02-08",
    values: [
      { key: "San Francisco", value: 3813 },
      { key: "East Bay", value: 1024 },
      { key: "San Jose", value: 265 },
      { key: "null", value: 104 }
    ]
  },
  {
    key: "2018-02-09",
    values: [
      { key: "San Jose", value: 207 },
      { key: "East Bay", value: 937 },
      { key: "San Francisco", value: 3623 },
      { key: "null", value: 101 }
    ]
  },
  {
    key: "2018-02-10",
    values: [
      { key: "San Francisco", value: 1941 },
      { key: "East Bay", value: 704 },
      { key: "San Jose", value: 154 },
      { key: "null", value: 59 }
    ]
  },
  {
    key: "2018-02-11",
    values: [
      { key: "San Francisco", value: 1191 },
      { key: "East Bay", value: 478 },
      { key: "San Jose", value: 125 },
      { key: "null", value: 32 }
    ]
  },
  {
    key: "2018-02-12",
    values: [
      { key: "East Bay", value: 944 },
      { key: "San Francisco", value: 3531 },
      { key: "null", value: 94 },
      { key: "San Jose", value: 236 }
    ]
  },
  {
    key: "2018-02-13",
    values: [
      { key: "San Francisco", value: 3806 },
      { key: "East Bay", value: 998 },
      { key: "null", value: 121 },
      { key: "San Jose", value: 223 }
    ]
  },
  {
    key: "2018-02-14",
    values: [
      { key: "East Bay", value: 981 },
      { key: "San Francisco", value: 3590 },
      { key: "San Jose", value: 227 },
      { key: "null", value: 97 }
    ]
  },
  {
    key: "2018-02-15",
    values: [
      { key: "San Francisco", value: 3438 },
      { key: "San Jose", value: 243 },
      { key: "East Bay", value: 965 },
      { key: "null", value: 88 }
    ]
  },
  {
    key: "2018-02-16",
    values: [
      { key: "East Bay", value: 887 },
      { key: "San Francisco", value: 3168 },
      { key: "San Jose", value: 221 },
      { key: "null", value: 90 }
    ]
  },
  {
    key: "2018-02-17",
    values: [
      { key: "San Francisco", value: 1488 },
      { key: "null", value: 37 },
      { key: "East Bay", value: 644 },
      { key: "San Jose", value: 154 }
    ]
  },
  {
    key: "2018-02-18",
    values: [
      { key: "East Bay", value: 432 },
      { key: "San Francisco", value: 1223 },
      { key: "San Jose", value: 108 },
      { key: "null", value: 31 }
    ]
  },
  {
    key: "2018-02-19",
    values: [
      { key: "San Francisco", value: 1434 },
      { key: "East Bay", value: 456 },
      { key: "San Jose", value: 154 },
      { key: "null", value: 41 }
    ]
  },
  {
    key: "2018-02-20",
    values: [
      { key: "East Bay", value: 795 },
      { key: "San Francisco", value: 2991 },
      { key: "San Jose", value: 215 },
      { key: "null", value: 96 }
    ]
  },
  {
    key: "2018-02-21",
    values: [
      { key: "San Francisco", value: 3356 },
      { key: "San Jose", value: 210 },
      { key: "East Bay", value: 885 },
      { key: "null", value: 89 }
    ]
  },
  {
    key: "2018-02-22",
    values: [
      { key: "East Bay", value: 806 },
      { key: "San Francisco", value: 3007 },
      { key: "San Jose", value: 203 },
      { key: "null", value: 85 }
    ]
  },
  {
    key: "2018-02-23",
    values: [
      { key: "East Bay", value: 772 },
      { key: "San Francisco", value: 2780 },
      { key: "San Jose", value: 192 },
      { key: "null", value: 91 }
    ]
  },
  {
    key: "2018-02-24",
    values: [
      { key: "San Francisco", value: 1266 },
      { key: "San Jose", value: 115 },
      { key: "East Bay", value: 518 },
      { key: "null", value: 43 }
    ]
  },
  {
    key: "2018-02-25",
    values: [
      { key: "San Francisco", value: 1220 },
      { key: "San Jose", value: 141 },
      { key: "East Bay", value: 550 },
      { key: "null", value: 32 }
    ]
  },
  {
    key: "2018-02-26",
    values: [
      { key: "East Bay", value: 620 },
      { key: "San Francisco", value: 2510 },
      { key: "San Jose", value: 158 },
      { key: "null", value: 82 }
    ]
  },
  {
    key: "2018-02-27",
    values: [
      { key: "San Francisco", value: 3227 },
      { key: "East Bay", value: 908 },
      { key: "null", value: 90 },
      { key: "San Jose", value: 230 }
    ]
  },
  {
    key: "2018-02-28",
    values: [
      { key: "San Francisco", value: 3052 },
      { key: "San Jose", value: 245 },
      { key: "East Bay", value: 875 },
      { key: "null", value: 98 }
    ]
  },
  {
    key: "2018-03-01",
    values: [
      { key: "San Francisco", value: 1950 },
      { key: "San Jose", value: 158 },
      { key: "East Bay", value: 527 },
      { key: "null", value: 61 }
    ]
  },
  {
    key: "2018-03-02",
    values: [
      { key: "San Francisco", value: 2106 },
      { key: "East Bay", value: 535 },
      { key: "San Jose", value: 123 },
      { key: "null", value: 50 }
    ]
  },
  {
    key: "2018-03-03",
    values: [
      { key: "San Francisco", value: 1050 },
      { key: "East Bay", value: 497 },
      { key: "San Jose", value: 86 },
      { key: "null", value: 32 }
    ]
  },
  {
    key: "2018-03-04",
    values: [
      { key: "San Francisco", value: 1200 },
      { key: "San Jose", value: 154 },
      { key: "East Bay", value: 466 },
      { key: "null", value: 32 }
    ]
  },
  {
    key: "2018-03-05",
    values: [
      { key: "San Francisco", value: 3198 },
      { key: "San Jose", value: 224 },
      { key: "East Bay", value: 867 },
      { key: "null", value: 86 }
    ]
  },
  {
    key: "2018-03-06",
    values: [
      { key: "San Francisco", value: 3515 },
      { key: "null", value: 98 },
      { key: "East Bay", value: 967 },
      { key: "San Jose", value: 246 }
    ]
  },
  {
    key: "2018-03-07",
    values: [
      { key: "San Francisco", value: 3563 },
      { key: "East Bay", value: 976 },
      { key: "San Jose", value: 316 },
      { key: "null", value: 103 }
    ]
  },
  {
    key: "2018-03-08",
    values: [
      { key: "San Jose", value: 303 },
      { key: "San Francisco", value: 3409 },
      { key: "East Bay", value: 921 },
      { key: "null", value: 92 }
    ]
  },
  {
    key: "2018-03-09",
    values: [
      { key: "San Francisco", value: 3174 },
      { key: "East Bay", value: 867 },
      { key: "San Jose", value: 258 },
      { key: "null", value: 83 }
    ]
  },
  {
    key: "2018-03-10",
    values: [
      { key: "San Francisco", value: 1403 },
      { key: "San Jose", value: 190 },
      { key: "East Bay", value: 571 },
      { key: "null", value: 47 }
    ]
  },
  {
    key: "2018-03-11",
    values: [
      { key: "San Francisco", value: 1574 },
      { key: "San Jose", value: 192 },
      { key: "East Bay", value: 619 },
      { key: "null", value: 27 }
    ]
  },
  {
    key: "2018-03-12",
    values: [
      { key: "San Francisco", value: 2671 },
      { key: "East Bay", value: 750 },
      { key: "San Jose", value: 233 },
      { key: "null", value: 74 }
    ]
  },
  {
    key: "2018-03-13",
    values: [
      { key: "San Francisco", value: 2093 },
      { key: "East Bay", value: 616 },
      { key: "null", value: 75 },
      { key: "San Jose", value: 164 }
    ]
  },
  {
    key: "2018-03-14",
    values: [
      { key: "San Francisco", value: 2959 },
      { key: "East Bay", value: 852 },
      { key: "San Jose", value: 177 },
      { key: "null", value: 79 }
    ]
  },
  {
    key: "2018-03-15",
    values: [
      { key: "San Francisco", value: 2377 },
      { key: "East Bay", value: 656 },
      { key: "San Jose", value: 273 },
      { key: "null", value: 61 }
    ]
  },
  {
    key: "2018-03-16",
    values: [
      { key: "San Francisco", value: 2614 },
      { key: "East Bay", value: 708 },
      { key: "San Jose", value: 227 },
      { key: "null", value: 81 }
    ]
  },
  {
    key: "2018-03-17",
    values: [
      { key: "San Jose", value: 181 },
      { key: "San Francisco", value: 1503 },
      { key: "East Bay", value: 456 },
      { key: "null", value: 36 }
    ]
  },
  {
    key: "2018-03-18",
    values: [
      { key: "San Francisco", value: 1208 },
      { key: "San Jose", value: 196 },
      { key: "East Bay", value: 525 },
      { key: "null", value: 26 }
    ]
  },
  {
    key: "2018-03-19",
    values: [
      { key: "San Francisco", value: 3529 },
      { key: "San Jose", value: 315 },
      { key: "East Bay", value: 1052 },
      { key: "null", value: 97 }
    ]
  },
  {
    key: "2018-03-20",
    values: [
      { key: "San Francisco", value: 1924 },
      { key: "East Bay", value: 608 },
      { key: "San Jose", value: 194 },
      { key: "null", value: 62 }
    ]
  },
  {
    key: "2018-03-21",
    values: [
      { key: "San Francisco", value: 2934 },
      { key: "San Jose", value: 259 },
      { key: "East Bay", value: 752 },
      { key: "null", value: 91 }
    ]
  },
  {
    key: "2018-03-22",
    values: [
      { key: "East Bay", value: 800 },
      { key: "San Francisco", value: 2638 },
      { key: "San Jose", value: 244 },
      { key: "null", value: 83 }
    ]
  },
  {
    key: "2018-03-23",
    values: [
      { key: "East Bay", value: 887 },
      { key: "San Francisco", value: 3119 },
      { key: "San Jose", value: 226 },
      { key: "null", value: 86 }
    ]
  },
  {
    key: "2018-03-24",
    values: [
      { key: "San Francisco", value: 1546 },
      { key: "East Bay", value: 574 },
      { key: "San Jose", value: 130 },
      { key: "null", value: 30 }
    ]
  },
  {
    key: "2018-03-25",
    values: [
      { key: "San Jose", value: 144 },
      { key: "East Bay", value: 681 },
      { key: "San Francisco", value: 1370 },
      { key: "null", value: 38 }
    ]
  },
  {
    key: "2018-03-26",
    values: [
      { key: "East Bay", value: 904 },
      { key: "San Francisco", value: 3513 },
      { key: "San Jose", value: 236 },
      { key: "null", value: 106 }
    ]
  },
  {
    key: "2018-03-27",
    values: [
      { key: "San Francisco", value: 3836 },
      { key: "East Bay", value: 1000 },
      { key: "San Jose", value: 231 },
      { key: "null", value: 114 }
    ]
  },
  {
    key: "2018-03-28",
    values: [
      { key: "East Bay", value: 1064 },
      { key: "San Francisco", value: 3891 },
      { key: "San Jose", value: 293 },
      { key: "null", value: 108 }
    ]
  },
  {
    key: "2018-03-29",
    values: [
      { key: "San Francisco", value: 3960 },
      { key: "San Jose", value: 245 },
      { key: "East Bay", value: 1114 },
      { key: "null", value: 113 }
    ]
  },
  {
    key: "2018-03-30",
    values: [
      { key: "San Francisco", value: 3540 },
      { key: "San Jose", value: 174 },
      { key: "East Bay", value: 945 },
      { key: "null", value: 101 }
    ]
  },
  {
    key: "2018-03-31",
    values: [
      { key: "San Francisco", value: 1822 },
      { key: "East Bay", value: 676 },
      { key: "San Jose", value: 153 },
      { key: "null", value: 43 }
    ]
  },
  {
    key: "2018-04-01",
    values: [
      { key: "East Bay", value: 613 },
      { key: "San Francisco", value: 1302 },
      { key: "null", value: 32 },
      { key: "San Jose", value: 231 }
    ]
  },
  {
    key: "2018-04-02",
    values: [
      { key: "San Jose", value: 352 },
      { key: "San Francisco", value: 3608 },
      { key: "East Bay", value: 1157 },
      { key: "null", value: 104 }
    ]
  },
  {
    key: "2018-04-03",
    values: [
      { key: "San Francisco", value: 3917 },
      { key: "San Jose", value: 342 },
      { key: "East Bay", value: 1191 },
      { key: "null", value: 116 }
    ]
  },
  {
    key: "2018-04-04",
    values: [
      { key: "East Bay", value: 1093 },
      { key: "San Francisco", value: 3666 },
      { key: "San Jose", value: 305 },
      { key: "null", value: 118 }
    ]
  },
  {
    key: "2018-04-05",
    values: [
      { key: "East Bay", value: 878 },
      { key: "San Francisco", value: 3092 },
      { key: "San Jose", value: 285 },
      { key: "null", value: 71 }
    ]
  },
  {
    key: "2018-04-06",
    values: [
      { key: "San Francisco", value: 894 },
      { key: "East Bay", value: 196 },
      { key: "San Jose", value: 177 },
      { key: "null", value: 27 }
    ]
  },
  {
    key: "2018-04-07",
    values: [
      { key: "San Francisco", value: 1634 },
      { key: "East Bay", value: 754 },
      { key: "San Jose", value: 226 },
      { key: "null", value: 32 }
    ]
  },
  {
    key: "2018-04-08",
    values: [
      { key: "San Francisco", value: 1768 },
      { key: "East Bay", value: 753 },
      { key: "null", value: 47 },
      { key: "San Jose", value: 196 }
    ]
  },
  {
    key: "2018-04-09",
    values: [
      { key: "East Bay", value: 1151 },
      { key: "San Francisco", value: 3798 },
      { key: "San Jose", value: 306 },
      { key: "null", value: 110 }
    ]
  },
  {
    key: "2018-04-10",
    values: [
      { key: "East Bay", value: 1144 },
      { key: "San Francisco", value: 3717 },
      { key: "San Jose", value: 334 },
      { key: "null", value: 101 }
    ]
  },
  {
    key: "2018-04-11",
    values: [
      { key: "San Francisco", value: 3138 },
      { key: "East Bay", value: 957 },
      { key: "San Jose", value: 265 },
      { key: "null", value: 75 }
    ]
  },
  {
    key: "2018-04-12",
    values: [
      { key: "San Francisco", value: 3487 },
      { key: "East Bay", value: 1101 },
      { key: "San Jose", value: 275 },
      { key: "null", value: 45 }
    ]
  },
  {
    key: "2018-04-13",
    values: [
      { key: "San Francisco", value: 3353 },
      { key: "East Bay", value: 1145 },
      { key: "San Jose", value: 315 },
      { key: "null", value: 44 }
    ]
  },
  {
    key: "2018-04-14",
    values: [
      { key: "San Francisco", value: 1967 },
      { key: "East Bay", value: 835 },
      { key: "San Jose", value: 200 },
      { key: "null", value: 28 }
    ]
  },
  {
    key: "2018-04-15",
    values: [
      { key: "East Bay", value: 522 },
      { key: "San Francisco", value: 1065 },
      { key: "null", value: 20 },
      { key: "San Jose", value: 184 }
    ]
  },
  {
    key: "2018-04-16",
    values: [
      { key: "San Francisco", value: 2777 },
      { key: "San Jose", value: 224 },
      { key: "East Bay", value: 868 },
      { key: "null", value: 37 }
    ]
  },
  {
    key: "2018-04-17",
    values: [
      { key: "San Francisco", value: 3758 },
      { key: "San Jose", value: 304 },
      { key: "East Bay", value: 1129 },
      { key: "null", value: 40 }
    ]
  },
  {
    key: "2018-04-18",
    values: [
      { key: "East Bay", value: 1103 },
      { key: "San Jose", value: 286 },
      { key: "San Francisco", value: 3546 },
      { key: "null", value: 38 }
    ]
  },
  {
    key: "2018-04-19",
    values: [
      { key: "East Bay", value: 1088 },
      { key: "San Francisco", value: 3816 },
      { key: "San Jose", value: 295 },
      { key: "null", value: 47 }
    ]
  },
  {
    key: "2018-04-20",
    values: [
      { key: "San Francisco", value: 3510 },
      { key: "San Jose", value: 289 },
      { key: "East Bay", value: 1057 },
      { key: "null", value: 30 }
    ]
  },
  {
    key: "2018-04-21",
    values: [
      { key: "San Francisco", value: 2008 },
      { key: "East Bay", value: 811 },
      { key: "San Jose", value: 203 },
      { key: "null", value: 20 }
    ]
  },
  {
    key: "2018-04-22",
    values: [
      { key: "East Bay", value: 691 },
      { key: "San Jose", value: 224 },
      { key: "San Francisco", value: 1607 },
      { key: "null", value: 19 }
    ]
  },
  {
    key: "2018-04-23",
    values: [
      { key: "East Bay", value: 1155 },
      { key: "San Francisco", value: 3716 },
      { key: "null", value: 44 },
      { key: "San Jose", value: 301 }
    ]
  },
  {
    key: "2018-04-24",
    values: [
      { key: "San Francisco", value: 4451 },
      { key: "East Bay", value: 1106 },
      { key: "San Jose", value: 325 },
      { key: "null", value: 45 }
    ]
  },
  {
    key: "2018-04-25",
    values: [
      { key: "San Francisco", value: 4832 },
      { key: "East Bay", value: 1156 },
      { key: "San Jose", value: 340 },
      { key: "null", value: 49 }
    ]
  },
  {
    key: "2018-04-26",
    values: [
      { key: "San Francisco", value: 4559 },
      { key: "East Bay", value: 1116 },
      { key: "San Jose", value: 255 },
      { key: "null", value: 48 }
    ]
  },
  {
    key: "2018-04-27",
    values: [
      { key: "San Francisco", value: 4605 },
      { key: "East Bay", value: 1106 },
      { key: "San Jose", value: 266 },
      { key: "null", value: 43 }
    ]
  },
  {
    key: "2018-04-28",
    values: [
      { key: "San Francisco", value: 2616 },
      { key: "null", value: 31 },
      { key: "San Jose", value: 206 },
      { key: "East Bay", value: 766 }
    ]
  },
  {
    key: "2018-04-29",
    values: [
      { key: "San Francisco", value: 2328 },
      { key: "East Bay", value: 692 },
      { key: "San Jose", value: 164 },
      { key: "null", value: 24 }
    ]
  },
  {
    key: "2018-04-30",
    values: [
      { key: "San Francisco", value: 4657 },
      { key: "East Bay", value: 1129 },
      { key: "San Jose", value: 301 },
      { key: "null", value: 53 }
    ]
  },
  {
    key: "2018-05-01",
    values: [
      { key: "San Francisco", value: 5051 },
      { key: "East Bay", value: 1251 },
      { key: "San Jose", value: 316 },
      { key: "null", value: 46 }
    ]
  },
  {
    key: "2018-05-02",
    values: [
      { key: "San Francisco", value: 5186 },
      { key: "East Bay", value: 1253 },
      { key: "San Jose", value: 324 },
      { key: "null", value: 38 }
    ]
  },
  {
    key: "2018-05-03",
    values: [
      { key: "San Francisco", value: 4892 },
      { key: "East Bay", value: 1187 },
      { key: "San Jose", value: 294 },
      { key: "null", value: 45 }
    ]
  },
  {
    key: "2018-05-04",
    values: [
      { key: "San Francisco", value: 4733 },
      { key: "East Bay", value: 1229 },
      { key: "San Jose", value: 316 },
      { key: "null", value: 53 }
    ]
  },
  {
    key: "2018-05-05",
    values: [
      { key: "San Francisco", value: 2468 },
      { key: "East Bay", value: 882 },
      { key: "San Jose", value: 190 },
      { key: "null", value: 8 }
    ]
  },
  {
    key: "2018-05-06",
    values: [
      { key: "San Francisco", value: 2291 },
      { key: "San Jose", value: 232 },
      { key: "East Bay", value: 748 },
      { key: "null", value: 26 }
    ]
  },
  {
    key: "2018-05-07",
    values: [
      { key: "San Francisco", value: 4892 },
      { key: "East Bay", value: 1263 },
      { key: "San Jose", value: 323 },
      { key: "null", value: 50 }
    ]
  },
  {
    key: "2018-05-08",
    values: [
      { key: "San Francisco", value: 4913 },
      { key: "East Bay", value: 1303 },
      { key: "San Jose", value: 350 },
      { key: "null", value: 48 }
    ]
  },
  {
    key: "2018-05-09",
    values: [
      { key: "East Bay", value: 1357 },
      { key: "San Jose", value: 292 },
      { key: "San Francisco", value: 4843 },
      { key: "null", value: 33 }
    ]
  },
  {
    key: "2018-05-10",
    values: [
      { key: "San Francisco", value: 5782 },
      { key: "East Bay", value: 1541 },
      { key: "null", value: 58 },
      { key: "San Jose", value: 379 }
    ]
  },
  {
    key: "2018-05-11",
    values: [
      { key: "San Francisco", value: 5122 },
      { key: "East Bay", value: 1366 },
      { key: "San Jose", value: 295 },
      { key: "null", value: 1 }
    ]
  },
  {
    key: "2018-05-12",
    values: [
      { key: "East Bay", value: 946 },
      { key: "San Francisco", value: 2892 },
      { key: "San Jose", value: 190 },
      { key: "null", value: 1 }
    ]
  },
  {
    key: "2018-05-13",
    values: [
      { key: "San Francisco", value: 2176 },
      { key: "East Bay", value: 699 },
      { key: "San Jose", value: 219 }
    ]
  },
  {
    key: "2018-05-14",
    values: [
      { key: "San Francisco", value: 4869 },
      { key: "San Jose", value: 352 },
      { key: "East Bay", value: 1325 }
    ]
  },
  {
    key: "2018-05-15",
    values: [
      { key: "San Francisco", value: 5051 },
      { key: "East Bay", value: 1376 },
      { key: "San Jose", value: 290 },
      { key: "null", value: 2 }
    ]
  },
  {
    key: "2018-05-16",
    values: [
      { key: "San Francisco", value: 5317 },
      { key: "East Bay", value: 1392 },
      { key: "San Jose", value: 305 },
      { key: "null", value: 1 }
    ]
  },
  {
    key: "2018-05-17",
    values: [
      { key: "San Francisco", value: 5049 },
      { key: "East Bay", value: 1419 },
      { key: "San Jose", value: 274 }
    ]
  },
  {
    key: "2018-05-18",
    values: [
      { key: "San Francisco", value: 4792 },
      { key: "East Bay", value: 1226 },
      { key: "San Jose", value: 290 },
      { key: "null", value: 2 }
    ]
  },
  {
    key: "2018-05-19",
    values: [
      { key: "San Francisco", value: 2679 },
      { key: "East Bay", value: 973 },
      { key: "San Jose", value: 206 }
    ]
  },
  {
    key: "2018-05-20",
    values: [
      { key: "San Francisco", value: 2514 },
      { key: "East Bay", value: 797 },
      { key: "San Jose", value: 181 }
    ]
  },
  {
    key: "2018-05-21",
    values: [
      { key: "San Francisco", value: 5049 },
      { key: "East Bay", value: 1346 },
      { key: "San Jose", value: 294 },
      { key: "null", value: 3 }
    ]
  },
  {
    key: "2018-05-22",
    values: [
      { key: "San Francisco", value: 4925 },
      { key: "San Jose", value: 277 },
      { key: "East Bay", value: 1327 },
      { key: "null", value: 2 }
    ]
  },
  {
    key: "2018-05-23",
    values: [
      { key: "San Francisco", value: 4816 },
      { key: "East Bay", value: 1226 },
      { key: "San Jose", value: 319 },
      { key: "null", value: 3 }
    ]
  },
  {
    key: "2018-05-24",
    values: [
      { key: "San Francisco", value: 5114 },
      { key: "East Bay", value: 1277 },
      { key: "San Jose", value: 231 }
    ]
  },
  {
    key: "2018-05-25",
    values: [
      { key: "San Francisco", value: 4690 },
      { key: "East Bay", value: 1157 },
      { key: "San Jose", value: 240 }
    ]
  },
  {
    key: "2018-05-26",
    values: [
      { key: "San Jose", value: 163 },
      { key: "San Francisco", value: 2622 },
      { key: "East Bay", value: 815 }
    ]
  },
  {
    key: "2018-05-27",
    values: [
      { key: "San Francisco", value: 2702 },
      { key: "East Bay", value: 881 },
      { key: "San Jose", value: 178 }
    ]
  },
  {
    key: "2018-05-28",
    values: [
      { key: "San Jose", value: 149 },
      { key: "San Francisco", value: 2704 },
      { key: "East Bay", value: 891 }
    ]
  },
  {
    key: "2018-05-29",
    values: [
      { key: "San Francisco", value: 5194 },
      { key: "East Bay", value: 1459 },
      { key: "San Jose", value: 263 }
    ]
  },
  {
    key: "2018-05-30",
    values: [
      { key: "East Bay", value: 1414 },
      { key: "San Jose", value: 236 },
      { key: "San Francisco", value: 5104 }
    ]
  },
  {
    key: "2018-05-31",
    values: [
      { key: "San Francisco", value: 5221 },
      { key: "East Bay", value: 1512 },
      { key: "San Jose", value: 246 }
    ]
  },
  {
    key: "2018-06-01",
    values: [
      { key: "San Francisco", value: 5142 },
      { key: "East Bay", value: 1623 },
      { key: "San Jose", value: 259 },
      { key: "null", value: 3 }
    ]
  },
  {
    key: "2018-06-02",
    values: [
      { key: "San Francisco", value: 3508 },
      { key: "East Bay", value: 1180 },
      { key: "San Jose", value: 207 }
    ]
  },
  {
    key: "2018-06-03",
    values: [
      { key: "East Bay", value: 1089 },
      { key: "San Francisco", value: 2900 },
      { key: "San Jose", value: 211 }
    ]
  },
  {
    key: "2018-06-04",
    values: [
      { key: "San Jose", value: 360 },
      { key: "San Francisco", value: 5547 },
      { key: "East Bay", value: 1562 }
    ]
  },
  {
    key: "2018-06-05",
    values: [
      { key: "San Francisco", value: 5800 },
      { key: "East Bay", value: 1575 },
      { key: "San Jose", value: 346 }
    ]
  },
  {
    key: "2018-06-06",
    values: [
      { key: "San Francisco", value: 5827 },
      { key: "San Jose", value: 306 },
      { key: "East Bay", value: 1482 }
    ]
  },
  {
    key: "2018-06-07",
    values: [
      { key: "San Francisco", value: 5404 },
      { key: "East Bay", value: 1498 },
      { key: "San Jose", value: 305 },
      { key: "null", value: 1 }
    ]
  },
  {
    key: "2018-06-08",
    values: [
      { key: "East Bay", value: 1474 },
      { key: "San Francisco", value: 5043 },
      { key: "San Jose", value: 315 }
    ]
  },
  {
    key: "2018-06-09",
    values: [
      { key: "San Francisco", value: 2540 },
      { key: "San Jose", value: 159 },
      { key: "East Bay", value: 1011 }
    ]
  },
  {
    key: "2018-06-10",
    values: [
      { key: "San Francisco", value: 2525 },
      { key: "East Bay", value: 1023 },
      { key: "San Jose", value: 146 }
    ]
  },
  {
    key: "2018-06-11",
    values: [
      { key: "San Francisco", value: 5346 },
      { key: "East Bay", value: 1490 },
      { key: "San Jose", value: 248 },
      { key: "null", value: 3 }
    ]
  },
  {
    key: "2018-06-12",
    values: [
      { key: "San Francisco", value: 5788 },
      { key: "East Bay", value: 1867 },
      { key: "San Jose", value: 211 },
      { key: "null", value: 2 }
    ]
  },
  {
    key: "2018-06-13",
    values: [
      { key: "East Bay", value: 1681 },
      { key: "San Francisco", value: 5853 },
      { key: "San Jose", value: 239 },
      { key: "null", value: 77 }
    ]
  },
  {
    key: "2018-06-14",
    values: [
      { key: "San Francisco", value: 5903 },
      { key: "East Bay", value: 1591 },
      { key: "San Jose", value: 289 },
      { key: "null", value: 95 }
    ]
  },
  {
    key: "2018-06-15",
    values: [
      { key: "San Francisco", value: 5153 },
      { key: "East Bay", value: 1345 },
      { key: "San Jose", value: 246 },
      { key: "null", value: 115 }
    ]
  },
  {
    key: "2018-06-16",
    values: [
      { key: "San Francisco", value: 2948 },
      { key: "East Bay", value: 940 },
      { key: "San Jose", value: 116 },
      { key: "null", value: 88 }
    ]
  },
  {
    key: "2018-06-17",
    values: [
      { key: "San Francisco", value: 2528 },
      { key: "East Bay", value: 883 },
      { key: "San Jose", value: 136 },
      { key: "null", value: 92 }
    ]
  },
  {
    key: "2018-06-18",
    values: [
      { key: "San Francisco", value: 5482 },
      { key: "East Bay", value: 1597 },
      { key: "null", value: 111 },
      { key: "San Jose", value: 280 }
    ]
  },
  {
    key: "2018-06-19",
    values: [
      { key: "null", value: 134 },
      { key: "San Francisco", value: 5525 },
      { key: "East Bay", value: 1646 },
      { key: "San Jose", value: 257 }
    ]
  },
  {
    key: "2018-06-20",
    values: [
      { key: "East Bay", value: 1533 },
      { key: "San Francisco", value: 5464 },
      { key: "null", value: 134 },
      { key: "San Jose", value: 256 }
    ]
  },
  {
    key: "2018-06-21",
    values: [
      { key: "San Francisco", value: 5639 },
      { key: "null", value: 147 },
      { key: "San Jose", value: 260 },
      { key: "East Bay", value: 1570 }
    ]
  },
  {
    key: "2018-06-22",
    values: [
      { key: "San Francisco", value: 5517 },
      { key: "null", value: 123 },
      { key: "East Bay", value: 1578 },
      { key: "San Jose", value: 262 }
    ]
  },
  {
    key: "2018-06-23",
    values: [
      { key: "San Francisco", value: 3366 },
      { key: "San Jose", value: 158 },
      { key: "East Bay", value: 1120 },
      { key: "null", value: 151 }
    ]
  },
  {
    key: "2018-06-24",
    values: [
      { key: "San Francisco", value: 3240 },
      { key: "null", value: 103 },
      { key: "San Jose", value: 188 },
      { key: "East Bay", value: 1053 }
    ]
  },
  {
    key: "2018-06-25",
    values: [
      { key: "San Jose", value: 243 },
      { key: "San Francisco", value: 5573 },
      { key: "null", value: 142 },
      { key: "East Bay", value: 1638 }
    ]
  },
  {
    key: "2018-06-26",
    values: [
      { key: "San Francisco", value: 6078 },
      { key: "null", value: 143 },
      { key: "East Bay", value: 1809 },
      { key: "San Jose", value: 252 }
    ]
  },
  {
    key: "2018-06-27",
    values: [
      { key: "San Francisco", value: 5764 },
      { key: "East Bay", value: 1571 },
      { key: "null", value: 121 },
      { key: "San Jose", value: 231 }
    ]
  },
  {
    key: "2018-06-28",
    values: [
      { key: "San Francisco", value: 6160 },
      { key: "null", value: 125 },
      { key: "East Bay", value: 1601 },
      { key: "San Jose", value: 234 }
    ]
  },
  {
    key: "2018-06-29",
    values: [
      { key: "null", value: 84 },
      { key: "San Francisco", value: 5563 },
      { key: "East Bay", value: 1645 },
      { key: "San Jose", value: 227 }
    ]
  },
  {
    key: "2018-06-30",
    values: [
      { key: "San Francisco", value: 2838 },
      { key: "East Bay", value: 1178 },
      { key: "San Jose", value: 133 },
      { key: "null", value: 77 }
    ]
  },
  {
    key: "2018-07-01",
    values: [
      { key: "null", value: 91 },
      { key: "San Francisco", value: 2080 },
      { key: "East Bay", value: 815 },
      { key: "San Jose", value: 188 }
    ]
  },
  {
    key: "2018-07-02",
    values: [
      { key: "null", value: 105 },
      { key: "San Francisco", value: 4831 },
      { key: "East Bay", value: 1520 },
      { key: "San Jose", value: 264 }
    ]
  },
  {
    key: "2018-07-03",
    values: [
      { key: "San Francisco", value: 5070 },
      { key: "East Bay", value: 1723 },
      { key: "San Jose", value: 248 },
      { key: "null", value: 101 }
    ]
  },
  {
    key: "2018-07-04",
    values: [
      { key: "East Bay", value: 1053 },
      { key: "San Francisco", value: 2572 },
      { key: "San Jose", value: 222 },
      { key: "null", value: 99 }
    ]
  },
  {
    key: "2018-07-05",
    values: [
      { key: "East Bay", value: 1435 },
      { key: "San Francisco", value: 4595 },
      { key: "San Jose", value: 249 },
      { key: "null", value: 89 }
    ]
  },
  {
    key: "2018-07-06",
    values: [
      { key: "San Francisco", value: 4863 },
      { key: "East Bay", value: 1483 },
      { key: "San Jose", value: 272 },
      { key: "null", value: 77 }
    ]
  },
  {
    key: "2018-07-07",
    values: [
      { key: "San Francisco", value: 3024 },
      { key: "null", value: 94 },
      { key: "East Bay", value: 1140 },
      { key: "San Jose", value: 177 }
    ]
  },
  {
    key: "2018-07-08",
    values: [
      { key: "San Francisco", value: 2844 },
      { key: "San Jose", value: 155 },
      { key: "East Bay", value: 994 },
      { key: "null", value: 96 }
    ]
  },
  {
    key: "2018-07-09",
    values: [
      { key: "null", value: 107 },
      { key: "San Francisco", value: 5646 },
      { key: "San Jose", value: 279 },
      { key: "East Bay", value: 1720 }
    ]
  },
  {
    key: "2018-07-10",
    values: [
      { key: "San Francisco", value: 5981 },
      { key: "East Bay", value: 1759 },
      { key: "San Jose", value: 294 },
      { key: "null", value: 92 }
    ]
  },
  {
    key: "2018-07-11",
    values: [
      { key: "East Bay", value: 1721 },
      { key: "null", value: 92 },
      { key: "San Francisco", value: 5939 },
      { key: "San Jose", value: 301 }
    ]
  },
  {
    key: "2018-07-12",
    values: [
      { key: "San Francisco", value: 5852 },
      { key: "East Bay", value: 1788 },
      { key: "San Jose", value: 255 },
      { key: "null", value: 100 }
    ]
  },
  {
    key: "2018-07-13",
    values: [
      { key: "San Francisco", value: 5601 },
      { key: "East Bay", value: 1649 },
      { key: "San Jose", value: 250 },
      { key: "null", value: 72 }
    ]
  },
  {
    key: "2018-07-14",
    values: [
      { key: "San Francisco", value: 3001 },
      { key: "null", value: 63 },
      { key: "East Bay", value: 1151 },
      { key: "San Jose", value: 184 }
    ]
  },
  {
    key: "2018-07-15",
    values: [
      { key: "San Francisco", value: 2802 },
      { key: "East Bay", value: 1047 },
      { key: "San Jose", value: 149 },
      { key: "null", value: 78 }
    ]
  },
  {
    key: "2018-07-16",
    values: [
      { key: "San Francisco", value: 5569 },
      { key: "East Bay", value: 1730 },
      { key: "null", value: 100 },
      { key: "San Jose", value: 298 }
    ]
  },
  {
    key: "2018-07-17",
    values: [
      { key: "San Francisco", value: 5547 },
      { key: "East Bay", value: 1784 },
      { key: "San Jose", value: 263 },
      { key: "null", value: 87 }
    ]
  },
  {
    key: "2018-07-18",
    values: [
      { key: "San Francisco", value: 5843 },
      { key: "null", value: 116 },
      { key: "East Bay", value: 1788 },
      { key: "San Jose", value: 291 }
    ]
  },
  {
    key: "2018-07-19",
    values: [
      { key: "null", value: 115 },
      { key: "San Francisco", value: 5902 },
      { key: "East Bay", value: 1709 },
      { key: "San Jose", value: 249 }
    ]
  },
  {
    key: "2018-07-20",
    values: [
      { key: "East Bay", value: 1689 },
      { key: "San Francisco", value: 5377 },
      { key: "null", value: 104 },
      { key: "San Jose", value: 265 }
    ]
  },
  {
    key: "2018-07-21",
    values: [
      { key: "San Francisco", value: 3231 },
      { key: "East Bay", value: 1156 },
      { key: "null", value: 91 },
      { key: "San Jose", value: 182 }
    ]
  },
  {
    key: "2018-07-22",
    values: [
      { key: "null", value: 134 },
      { key: "San Francisco", value: 2878 },
      { key: "East Bay", value: 949 },
      { key: "San Jose", value: 159 }
    ]
  },
  {
    key: "2018-07-23",
    values: [
      { key: "East Bay", value: 1693 },
      { key: "San Francisco", value: 5460 },
      { key: "San Jose", value: 292 },
      { key: "null", value: 119 }
    ]
  },
  {
    key: "2018-07-24",
    values: [
      { key: "San Jose", value: 266 },
      { key: "East Bay", value: 1849 },
      { key: "San Francisco", value: 5753 },
      { key: "null", value: 136 }
    ]
  },
  {
    key: "2018-07-25",
    values: [
      { key: "San Jose", value: 312 },
      { key: "East Bay", value: 1784 },
      { key: "San Francisco", value: 6026 },
      { key: "null", value: 158 }
    ]
  },
  {
    key: "2018-07-26",
    values: [
      { key: "San Francisco", value: 5709 },
      { key: "East Bay", value: 1648 },
      { key: "null", value: 108 },
      { key: "San Jose", value: 236 }
    ]
  },
  {
    key: "2018-07-27",
    values: [
      { key: "San Francisco", value: 5079 },
      { key: "East Bay", value: 1497 },
      { key: "San Jose", value: 257 },
      { key: "null", value: 164 }
    ]
  },
  {
    key: "2018-07-28",
    values: [
      { key: "East Bay", value: 1128 },
      { key: "San Francisco", value: 2915 },
      { key: "null", value: 114 },
      { key: "San Jose", value: 214 }
    ]
  },
  {
    key: "2018-07-29",
    values: [
      { key: "null", value: 100 },
      { key: "East Bay", value: 842 },
      { key: "San Francisco", value: 2579 },
      { key: "San Jose", value: 182 }
    ]
  },
  {
    key: "2018-07-30",
    values: [
      { key: "null", value: 164 },
      { key: "San Francisco", value: 5134 },
      { key: "East Bay", value: 1678 },
      { key: "San Jose", value: 262 }
    ]
  },
  {
    key: "2018-07-31",
    values: [
      { key: "East Bay", value: 1619 },
      { key: "San Francisco", value: 5181 },
      { key: "null", value: 144 },
      { key: "San Jose", value: 272 }
    ]
  },
  {
    key: "2018-08-01",
    values: [
      { key: "San Francisco", value: 5163 },
      { key: "null", value: 147 },
      { key: "San Jose", value: 296 },
      { key: "East Bay", value: 1655 }
    ]
  },
  {
    key: "2018-08-02",
    values: [
      { key: "East Bay", value: 1668 },
      { key: "San Francisco", value: 5213 },
      { key: "null", value: 121 },
      { key: "San Jose", value: 276 }
    ]
  },
  {
    key: "2018-08-03",
    values: [
      { key: "San Francisco", value: 4715 },
      { key: "East Bay", value: 1682 },
      { key: "San Jose", value: 231 },
      { key: "null", value: 125 }
    ]
  },
  {
    key: "2018-08-04",
    values: [
      { key: "San Francisco", value: 2630 },
      { key: "East Bay", value: 1097 },
      { key: "San Jose", value: 172 },
      { key: "null", value: 129 }
    ]
  },
  {
    key: "2018-08-05",
    values: [
      { key: "San Jose", value: 217 },
      { key: "San Francisco", value: 2155 },
      { key: "null", value: 87 },
      { key: "East Bay", value: 921 }
    ]
  },
  {
    key: "2018-08-06",
    values: [
      { key: "null", value: 126 },
      { key: "San Francisco", value: 5095 },
      { key: "San Jose", value: 265 },
      { key: "East Bay", value: 1646 }
    ]
  },
  {
    key: "2018-08-07",
    values: [
      { key: "San Francisco", value: 5215 },
      { key: "null", value: 146 },
      { key: "East Bay", value: 1674 },
      { key: "San Jose", value: 265 }
    ]
  },
  {
    key: "2018-08-08",
    values: [
      { key: "San Jose", value: 233 },
      { key: "East Bay", value: 1704 },
      { key: "San Francisco", value: 5366 },
      { key: "null", value: 150 }
    ]
  },
  {
    key: "2018-08-09",
    values: [
      { key: "null", value: 148 },
      { key: "East Bay", value: 1673 },
      { key: "San Francisco", value: 5478 },
      { key: "San Jose", value: 247 }
    ]
  },
  {
    key: "2018-08-10",
    values: [
      { key: "East Bay", value: 1485 },
      { key: "San Francisco", value: 5235 },
      { key: "null", value: 191 },
      { key: "San Jose", value: 260 }
    ]
  },
  {
    key: "2018-08-11",
    values: [
      { key: "San Francisco", value: 3092 },
      { key: "null", value: 203 },
      { key: "San Jose", value: 176 },
      { key: "East Bay", value: 977 }
    ]
  },
  {
    key: "2018-08-12",
    values: [
      { key: "null", value: 162 },
      { key: "East Bay", value: 1040 },
      { key: "San Francisco", value: 2506 },
      { key: "San Jose", value: 193 }
    ]
  },
  {
    key: "2018-08-13",
    values: [
      { key: "San Jose", value: 265 },
      { key: "East Bay", value: 1511 },
      { key: "San Francisco", value: 4795 },
      { key: "null", value: 116 }
    ]
  },
  {
    key: "2018-08-14",
    values: [
      { key: "San Francisco", value: 5028 },
      { key: "null", value: 106 },
      { key: "East Bay", value: 1557 },
      { key: "San Jose", value: 218 }
    ]
  },
  {
    key: "2018-08-15",
    values: [
      { key: "San Francisco", value: 5329 },
      { key: "East Bay", value: 1508 },
      { key: "San Jose", value: 260 },
      { key: "null", value: 112 }
    ]
  },
  {
    key: "2018-08-16",
    values: [
      { key: "San Francisco", value: 5231 },
      { key: "San Jose", value: 244 },
      { key: "East Bay", value: 1654 },
      { key: "null", value: 142 }
    ]
  },
  {
    key: "2018-08-17",
    values: [
      { key: "San Francisco", value: 4844 },
      { key: "null", value: 109 },
      { key: "East Bay", value: 1528 },
      { key: "San Jose", value: 234 }
    ]
  },
  {
    key: "2018-08-18",
    values: [
      { key: "San Jose", value: 242 },
      { key: "San Francisco", value: 2517 },
      { key: "null", value: 91 },
      { key: "East Bay", value: 995 }
    ]
  },
  {
    key: "2018-08-19",
    values: [
      { key: "San Francisco", value: 2239 },
      { key: "East Bay", value: 904 },
      { key: "San Jose", value: 202 },
      { key: "null", value: 91 }
    ]
  },
  {
    key: "2018-08-20",
    values: [
      { key: "San Francisco", value: 4636 },
      { key: "East Bay", value: 1550 },
      { key: "null", value: 97 },
      { key: "San Jose", value: 302 }
    ]
  },
  {
    key: "2018-08-21",
    values: [
      { key: "San Francisco", value: 5298 },
      { key: "East Bay", value: 1594 },
      { key: "San Jose", value: 334 },
      { key: "null", value: 99 }
    ]
  },
  {
    key: "2018-08-22",
    values: [
      { key: "East Bay", value: 1679 },
      { key: "San Francisco", value: 5264 },
      { key: "San Jose", value: 396 },
      { key: "null", value: 106 }
    ]
  },
  {
    key: "2018-08-23",
    values: [
      { key: "San Francisco", value: 5152 },
      { key: "East Bay", value: 1661 },
      { key: "null", value: 84 },
      { key: "San Jose", value: 340 }
    ]
  },
  {
    key: "2018-08-24",
    values: [
      { key: "East Bay", value: 1542 },
      { key: "San Francisco", value: 4802 },
      { key: "null", value: 91 },
      { key: "San Jose", value: 291 }
    ]
  },
  {
    key: "2018-08-25",
    values: [
      { key: "San Francisco", value: 2454 },
      { key: "East Bay", value: 1029 },
      { key: "San Jose", value: 230 },
      { key: "null", value: 71 }
    ]
  },
  {
    key: "2018-08-26",
    values: [
      { key: "San Francisco", value: 2062 },
      { key: "East Bay", value: 843 },
      { key: "San Jose", value: 262 },
      { key: "null", value: 69 }
    ]
  },
  {
    key: "2018-08-27",
    values: [
      { key: "East Bay", value: 1580 },
      { key: "San Francisco", value: 4693 },
      { key: "San Jose", value: 351 },
      { key: "null", value: 83 }
    ]
  },
  {
    key: "2018-08-28",
    values: [
      { key: "San Francisco", value: 5144 },
      { key: "East Bay", value: 1566 },
      { key: "null", value: 73 },
      { key: "San Jose", value: 369 }
    ]
  },
  {
    key: "2018-08-29",
    values: [
      { key: "San Francisco", value: 5163 },
      { key: "East Bay", value: 1711 },
      { key: "San Jose", value: 362 },
      { key: "null", value: 70 }
    ]
  },
  {
    key: "2018-08-30",
    values: [
      { key: "San Francisco", value: 4888 },
      { key: "East Bay", value: 1533 },
      { key: "San Jose", value: 346 },
      { key: "null", value: 71 }
    ]
  },
  {
    key: "2018-08-31",
    values: [
      { key: "San Francisco", value: 4418 },
      { key: "East Bay", value: 1357 },
      { key: "San Jose", value: 276 },
      { key: "null", value: 47 }
    ]
  }
];

var tripsByDayAndMemberTypeData = [
  {
    key: "2018-01-01",
    values: [{ key: "Customer", value: 580 }, { key: "Subscriber", value: 795 }]
  },
  {
    key: "2018-01-02",
    values: [
      { key: "Customer", value: 377 },
      { key: "Subscriber", value: 2875 }
    ]
  },
  {
    key: "2018-01-03",
    values: [
      { key: "Subscriber", value: 2622 },
      { key: "Customer", value: 235 }
    ]
  },
  {
    key: "2018-01-04",
    values: [
      { key: "Customer", value: 277 },
      { key: "Subscriber", value: 3023 }
    ]
  },
  {
    key: "2018-01-05",
    values: [
      { key: "Subscriber", value: 1912 },
      { key: "Customer", value: 238 }
    ]
  },
  {
    key: "2018-01-06",
    values: [
      { key: "Customer", value: 439 },
      { key: "Subscriber", value: 1404 }
    ]
  },
  {
    key: "2018-01-07",
    values: [
      { key: "Customer", value: 273 },
      { key: "Subscriber", value: 1109 }
    ]
  },
  {
    key: "2018-01-08",
    values: [{ key: "Customer", value: 30 }, { key: "Subscriber", value: 775 }]
  },
  {
    key: "2018-01-09",
    values: [
      { key: "Customer", value: 250 },
      { key: "Subscriber", value: 3302 }
    ]
  },
  {
    key: "2018-01-10",
    values: [
      { key: "Subscriber", value: 3204 },
      { key: "Customer", value: 255 }
    ]
  },
  {
    key: "2018-01-11",
    values: [
      { key: "Customer", value: 406 },
      { key: "Subscriber", value: 3693 }
    ]
  },
  {
    key: "2018-01-12",
    values: [
      { key: "Customer", value: 453 },
      { key: "Subscriber", value: 3438 }
    ]
  },
  {
    key: "2018-01-13",
    values: [
      { key: "Customer", value: 603 },
      { key: "Subscriber", value: 1414 }
    ]
  },
  {
    key: "2018-01-14",
    values: [
      { key: "Customer", value: 592 },
      { key: "Subscriber", value: 1133 }
    ]
  },
  {
    key: "2018-01-15",
    values: [
      { key: "Customer", value: 380 },
      { key: "Subscriber", value: 1816 }
    ]
  },
  {
    key: "2018-01-16",
    values: [
      { key: "Customer", value: 322 },
      { key: "Subscriber", value: 3954 }
    ]
  },
  {
    key: "2018-01-17",
    values: [
      { key: "Subscriber", value: 4170 },
      { key: "Customer", value: 347 }
    ]
  },
  {
    key: "2018-01-18",
    values: [
      { key: "Subscriber", value: 2447 },
      { key: "Customer", value: 157 }
    ]
  },
  {
    key: "2018-01-19",
    values: [
      { key: "Subscriber", value: 3434 },
      { key: "Customer", value: 407 }
    ]
  },
  {
    key: "2018-01-20",
    values: [
      { key: "Customer", value: 750 },
      { key: "Subscriber", value: 1733 }
    ]
  },
  {
    key: "2018-01-21",
    values: [
      { key: "Customer", value: 518 },
      { key: "Subscriber", value: 1212 }
    ]
  },
  {
    key: "2018-01-22",
    values: [
      { key: "Customer", value: 353 },
      { key: "Subscriber", value: 3442 }
    ]
  },
  {
    key: "2018-01-23",
    values: [
      { key: "Subscriber", value: 4138 },
      { key: "Customer", value: 349 }
    ]
  },
  {
    key: "2018-01-24",
    values: [
      { key: "Customer", value: 218 },
      { key: "Subscriber", value: 2848 }
    ]
  },
  {
    key: "2018-01-25",
    values: [
      { key: "Subscriber", value: 3729 },
      { key: "Customer", value: 326 }
    ]
  },
  {
    key: "2018-01-26",
    values: [
      { key: "Customer", value: 389 },
      { key: "Subscriber", value: 3457 }
    ]
  },
  {
    key: "2018-01-27",
    values: [
      { key: "Subscriber", value: 1605 },
      { key: "Customer", value: 743 }
    ]
  },
  {
    key: "2018-01-28",
    values: [
      { key: "Customer", value: 827 },
      { key: "Subscriber", value: 1350 }
    ]
  },
  {
    key: "2018-01-29",
    values: [
      { key: "Customer", value: 427 },
      { key: "Subscriber", value: 4040 }
    ]
  },
  {
    key: "2018-01-30",
    values: [
      { key: "Customer", value: 455 },
      { key: "Subscriber", value: 4276 }
    ]
  },
  {
    key: "2018-01-31",
    values: [
      { key: "Subscriber", value: 4108 },
      { key: "Customer", value: 368 }
    ]
  },
  {
    key: "2018-02-01",
    values: [
      { key: "Subscriber", value: 4272 },
      { key: "Customer", value: 523 }
    ]
  },
  {
    key: "2018-02-02",
    values: [
      { key: "Customer", value: 566 },
      { key: "Subscriber", value: 4006 }
    ]
  },
  {
    key: "2018-02-03",
    values: [
      { key: "Customer", value: 927 },
      { key: "Subscriber", value: 1890 }
    ]
  },
  {
    key: "2018-02-04",
    values: [
      { key: "Subscriber", value: 1454 },
      { key: "Customer", value: 643 }
    ]
  },
  {
    key: "2018-02-05",
    values: [
      { key: "Subscriber", value: 4280 },
      { key: "Customer", value: 445 }
    ]
  },
  {
    key: "2018-02-06",
    values: [
      { key: "Customer", value: 491 },
      { key: "Subscriber", value: 4668 }
    ]
  },
  {
    key: "2018-02-07",
    values: [
      { key: "Customer", value: 500 },
      { key: "Subscriber", value: 4592 }
    ]
  },
  {
    key: "2018-02-08",
    values: [
      { key: "Customer", value: 589 },
      { key: "Subscriber", value: 4617 }
    ]
  },
  {
    key: "2018-02-09",
    values: [
      { key: "Customer", value: 729 },
      { key: "Subscriber", value: 4139 }
    ]
  },
  {
    key: "2018-02-10",
    values: [
      { key: "Customer", value: 1028 },
      { key: "Subscriber", value: 1830 }
    ]
  },
  {
    key: "2018-02-11",
    values: [
      { key: "Customer", value: 527 },
      { key: "Subscriber", value: 1299 }
    ]
  },
  {
    key: "2018-02-12",
    values: [
      { key: "Subscriber", value: 4368 },
      { key: "Customer", value: 437 }
    ]
  },
  {
    key: "2018-02-13",
    values: [
      { key: "Customer", value: 438 },
      { key: "Subscriber", value: 4710 }
    ]
  },
  {
    key: "2018-02-14",
    values: [
      { key: "Subscriber", value: 4418 },
      { key: "Customer", value: 477 }
    ]
  },
  {
    key: "2018-02-15",
    values: [
      { key: "Subscriber", value: 4325 },
      { key: "Customer", value: 409 }
    ]
  },
  {
    key: "2018-02-16",
    values: [
      { key: "Subscriber", value: 3786 },
      { key: "Customer", value: 580 }
    ]
  },
  {
    key: "2018-02-17",
    values: [
      { key: "Customer", value: 931 },
      { key: "Subscriber", value: 1392 }
    ]
  },
  {
    key: "2018-02-18",
    values: [
      { key: "Customer", value: 661 },
      { key: "Subscriber", value: 1133 }
    ]
  },
  {
    key: "2018-02-19",
    values: [
      { key: "Customer", value: 441 },
      { key: "Subscriber", value: 1644 }
    ]
  },
  {
    key: "2018-02-20",
    values: [
      { key: "Customer", value: 356 },
      { key: "Subscriber", value: 3741 }
    ]
  },
  {
    key: "2018-02-21",
    values: [
      { key: "Subscriber", value: 4091 },
      { key: "Customer", value: 449 }
    ]
  },
  {
    key: "2018-02-22",
    values: [
      { key: "Customer", value: 309 },
      { key: "Subscriber", value: 3792 }
    ]
  },
  {
    key: "2018-02-23",
    values: [
      { key: "Customer", value: 386 },
      { key: "Subscriber", value: 3449 }
    ]
  },
  {
    key: "2018-02-24",
    values: [
      { key: "Customer", value: 542 },
      { key: "Subscriber", value: 1400 }
    ]
  },
  {
    key: "2018-02-25",
    values: [
      { key: "Customer", value: 539 },
      { key: "Subscriber", value: 1404 }
    ]
  },
  {
    key: "2018-02-26",
    values: [
      { key: "Customer", value: 275 },
      { key: "Subscriber", value: 3095 }
    ]
  },
  {
    key: "2018-02-27",
    values: [
      { key: "Customer", value: 345 },
      { key: "Subscriber", value: 4110 }
    ]
  },
  {
    key: "2018-02-28",
    values: [
      { key: "Subscriber", value: 3952 },
      { key: "Customer", value: 318 }
    ]
  },
  {
    key: "2018-03-01",
    values: [
      { key: "Customer", value: 194 },
      { key: "Subscriber", value: 2502 }
    ]
  },
  {
    key: "2018-03-02",
    values: [
      { key: "Customer", value: 227 },
      { key: "Subscriber", value: 2587 }
    ]
  },
  {
    key: "2018-03-03",
    values: [
      { key: "Customer", value: 354 },
      { key: "Subscriber", value: 1311 }
    ]
  },
  {
    key: "2018-03-04",
    values: [
      { key: "Customer", value: 531 },
      { key: "Subscriber", value: 1321 }
    ]
  },
  {
    key: "2018-03-05",
    values: [
      { key: "Customer", value: 339 },
      { key: "Subscriber", value: 4036 }
    ]
  },
  {
    key: "2018-03-06",
    values: [
      { key: "Customer", value: 398 },
      { key: "Subscriber", value: 4428 }
    ]
  },
  {
    key: "2018-03-07",
    values: [
      { key: "Customer", value: 470 },
      { key: "Subscriber", value: 4488 }
    ]
  },
  {
    key: "2018-03-08",
    values: [
      { key: "Customer", value: 490 },
      { key: "Subscriber", value: 4235 }
    ]
  },
  {
    key: "2018-03-09",
    values: [
      { key: "Customer", value: 552 },
      { key: "Subscriber", value: 3830 }
    ]
  },
  {
    key: "2018-03-10",
    values: [
      { key: "Subscriber", value: 1551 },
      { key: "Customer", value: 660 }
    ]
  },
  {
    key: "2018-03-11",
    values: [
      { key: "Customer", value: 753 },
      { key: "Subscriber", value: 1659 }
    ]
  },
  {
    key: "2018-03-12",
    values: [
      { key: "Customer", value: 347 },
      { key: "Subscriber", value: 3381 }
    ]
  },
  {
    key: "2018-03-13",
    values: [
      { key: "Subscriber", value: 2699 },
      { key: "Customer", value: 249 }
    ]
  },
  {
    key: "2018-03-14",
    values: [
      { key: "Subscriber", value: 3654 },
      { key: "Customer", value: 413 }
    ]
  },
  {
    key: "2018-03-15",
    values: [
      { key: "Customer", value: 272 },
      { key: "Subscriber", value: 3095 }
    ]
  },
  {
    key: "2018-03-16",
    values: [
      { key: "Customer", value: 451 },
      { key: "Subscriber", value: 3179 }
    ]
  },
  {
    key: "2018-03-17",
    values: [
      { key: "Customer", value: 572 },
      { key: "Subscriber", value: 1604 }
    ]
  },
  {
    key: "2018-03-18",
    values: [
      { key: "Customer", value: 618 },
      { key: "Subscriber", value: 1337 }
    ]
  },
  {
    key: "2018-03-19",
    values: [
      { key: "Customer", value: 511 },
      { key: "Subscriber", value: 4482 }
    ]
  },
  {
    key: "2018-03-20",
    values: [
      { key: "Customer", value: 197 },
      { key: "Subscriber", value: 2591 }
    ]
  },
  {
    key: "2018-03-21",
    values: [
      { key: "Customer", value: 414 },
      { key: "Subscriber", value: 3622 }
    ]
  },
  {
    key: "2018-03-22",
    values: [
      { key: "Customer", value: 415 },
      { key: "Subscriber", value: 3350 }
    ]
  },
  {
    key: "2018-03-23",
    values: [
      { key: "Customer", value: 614 },
      { key: "Subscriber", value: 3704 }
    ]
  },
  {
    key: "2018-03-24",
    values: [
      { key: "Subscriber", value: 1495 },
      { key: "Customer", value: 785 }
    ]
  },
  {
    key: "2018-03-25",
    values: [
      { key: "Customer", value: 762 },
      { key: "Subscriber", value: 1471 }
    ]
  },
  {
    key: "2018-03-26",
    values: [
      { key: "Customer", value: 605 },
      { key: "Subscriber", value: 4154 }
    ]
  },
  {
    key: "2018-03-27",
    values: [
      { key: "Customer", value: 696 },
      { key: "Subscriber", value: 4485 }
    ]
  },
  {
    key: "2018-03-28",
    values: [
      { key: "Customer", value: 737 },
      { key: "Subscriber", value: 4619 }
    ]
  },
  {
    key: "2018-03-29",
    values: [
      { key: "Customer", value: 831 },
      { key: "Subscriber", value: 4601 }
    ]
  },
  {
    key: "2018-03-30",
    values: [
      { key: "Customer", value: 868 },
      { key: "Subscriber", value: 3892 }
    ]
  },
  {
    key: "2018-03-31",
    values: [
      { key: "Customer", value: 982 },
      { key: "Subscriber", value: 1712 }
    ]
  },
  {
    key: "2018-04-01",
    values: [
      { key: "Customer", value: 715 },
      { key: "Subscriber", value: 1463 }
    ]
  },
  {
    key: "2018-04-02",
    values: [
      { key: "Customer", value: 569 },
      { key: "Subscriber", value: 4652 }
    ]
  },
  {
    key: "2018-04-03",
    values: [
      { key: "Customer", value: 717 },
      { key: "Subscriber", value: 4849 }
    ]
  },
  {
    key: "2018-04-04",
    values: [
      { key: "Customer", value: 576 },
      { key: "Subscriber", value: 4606 }
    ]
  },
  {
    key: "2018-04-05",
    values: [
      { key: "Subscriber", value: 3918 },
      { key: "Customer", value: 408 }
    ]
  },
  {
    key: "2018-04-06",
    values: [
      { key: "Subscriber", value: 1194 },
      { key: "Customer", value: 100 }
    ]
  },
  {
    key: "2018-04-07",
    values: [
      { key: "Customer", value: 820 },
      { key: "Subscriber", value: 1826 }
    ]
  },
  {
    key: "2018-04-08",
    values: [
      { key: "Customer", value: 936 },
      { key: "Subscriber", value: 1828 }
    ]
  },
  {
    key: "2018-04-09",
    values: [
      { key: "Subscriber", value: 4771 },
      { key: "Customer", value: 594 }
    ]
  },
  {
    key: "2018-04-10",
    values: [
      { key: "Subscriber", value: 4729 },
      { key: "Customer", value: 567 }
    ]
  },
  {
    key: "2018-04-11",
    values: [
      { key: "Customer", value: 402 },
      { key: "Subscriber", value: 4033 }
    ]
  },
  {
    key: "2018-04-12",
    values: [
      { key: "Customer", value: 540 },
      { key: "Subscriber", value: 4368 }
    ]
  },
  {
    key: "2018-04-13",
    values: [
      { key: "Customer", value: 718 },
      { key: "Subscriber", value: 4139 }
    ]
  },
  {
    key: "2018-04-14",
    values: [
      { key: "Customer", value: 1112 },
      { key: "Subscriber", value: 1918 }
    ]
  },
  {
    key: "2018-04-15",
    values: [
      { key: "Customer", value: 537 },
      { key: "Subscriber", value: 1254 }
    ]
  },
  {
    key: "2018-04-16",
    values: [
      { key: "Customer", value: 373 },
      { key: "Subscriber", value: 3533 }
    ]
  },
  {
    key: "2018-04-17",
    values: [
      { key: "Customer", value: 506 },
      { key: "Subscriber", value: 4725 }
    ]
  },
  {
    key: "2018-04-18",
    values: [
      { key: "Subscriber", value: 4425 },
      { key: "Customer", value: 548 }
    ]
  },
  {
    key: "2018-04-19",
    values: [
      { key: "Subscriber", value: 4675 },
      { key: "Customer", value: 571 }
    ]
  },
  {
    key: "2018-04-20",
    values: [
      { key: "Customer", value: 893 },
      { key: "Subscriber", value: 3993 }
    ]
  },
  {
    key: "2018-04-21",
    values: [
      { key: "Subscriber", value: 1892 },
      { key: "Customer", value: 1150 }
    ]
  },
  {
    key: "2018-04-22",
    values: [
      { key: "Customer", value: 922 },
      { key: "Subscriber", value: 1619 }
    ]
  },
  {
    key: "2018-04-23",
    values: [
      { key: "Subscriber", value: 4642 },
      { key: "Customer", value: 574 }
    ]
  },
  {
    key: "2018-04-24",
    values: [
      { key: "Customer", value: 622 },
      { key: "Subscriber", value: 5305 }
    ]
  },
  {
    key: "2018-04-25",
    values: [
      { key: "Subscriber", value: 5673 },
      { key: "Customer", value: 704 }
    ]
  },
  {
    key: "2018-04-26",
    values: [
      { key: "Customer", value: 690 },
      { key: "Subscriber", value: 5288 }
    ]
  },
  {
    key: "2018-04-27",
    values: [
      { key: "Customer", value: 930 },
      { key: "Subscriber", value: 5090 }
    ]
  },
  {
    key: "2018-04-28",
    values: [
      { key: "Customer", value: 1373 },
      { key: "Subscriber", value: 2246 }
    ]
  },
  {
    key: "2018-04-29",
    values: [
      { key: "Customer", value: 1114 },
      { key: "Subscriber", value: 2094 }
    ]
  },
  {
    key: "2018-04-30",
    values: [
      { key: "Customer", value: 899 },
      { key: "Subscriber", value: 5241 }
    ]
  },
  {
    key: "2018-05-01",
    values: [
      { key: "Customer", value: 914 },
      { key: "Subscriber", value: 5750 }
    ]
  },
  {
    key: "2018-05-02",
    values: [
      { key: "Customer", value: 945 },
      { key: "Subscriber", value: 5856 }
    ]
  },
  {
    key: "2018-05-03",
    values: [
      { key: "Customer", value: 794 },
      { key: "Subscriber", value: 5624 }
    ]
  },
  {
    key: "2018-05-04",
    values: [
      { key: "Customer", value: 963 },
      { key: "Subscriber", value: 5368 }
    ]
  },
  {
    key: "2018-05-05",
    values: [
      { key: "Customer", value: 1031 },
      { key: "Subscriber", value: 2517 }
    ]
  },
  {
    key: "2018-05-06",
    values: [
      { key: "Subscriber", value: 2254 },
      { key: "Customer", value: 1043 }
    ]
  },
  {
    key: "2018-05-07",
    values: [
      { key: "Customer", value: 873 },
      { key: "Subscriber", value: 5655 }
    ]
  },
  {
    key: "2018-05-08",
    values: [
      { key: "Customer", value: 754 },
      { key: "Subscriber", value: 5860 }
    ]
  },
  {
    key: "2018-05-09",
    values: [
      { key: "Customer", value: 794 },
      { key: "Subscriber", value: 5731 }
    ]
  },
  {
    key: "2018-05-10",
    values: [
      { key: "Subscriber", value: 6028 },
      { key: "Customer", value: 1732 }
    ]
  },
  {
    key: "2018-05-11",
    values: [
      { key: "Subscriber", value: 5560 },
      { key: "Customer", value: 1224 }
    ]
  },
  {
    key: "2018-05-12",
    values: [
      { key: "Subscriber", value: 2745 },
      { key: "Customer", value: 1284 }
    ]
  },
  {
    key: "2018-05-13",
    values: [
      { key: "Subscriber", value: 2168 },
      { key: "Customer", value: 926 }
    ]
  },
  {
    key: "2018-05-14",
    values: [
      { key: "Customer", value: 744 },
      { key: "Subscriber", value: 5802 }
    ]
  },
  {
    key: "2018-05-15",
    values: [
      { key: "Subscriber", value: 5978 },
      { key: "Customer", value: 741 }
    ]
  },
  {
    key: "2018-05-16",
    values: [
      { key: "Customer", value: 830 },
      { key: "Subscriber", value: 6185 }
    ]
  },
  {
    key: "2018-05-17",
    values: [
      { key: "Customer", value: 841 },
      { key: "Subscriber", value: 5901 }
    ]
  },
  {
    key: "2018-05-18",
    values: [
      { key: "Customer", value: 888 },
      { key: "Subscriber", value: 5422 }
    ]
  },
  {
    key: "2018-05-19",
    values: [
      { key: "Customer", value: 1176 },
      { key: "Subscriber", value: 2682 }
    ]
  },
  {
    key: "2018-05-20",
    values: [
      { key: "Customer", value: 979 },
      { key: "Subscriber", value: 2513 }
    ]
  },
  {
    key: "2018-05-21",
    values: [
      { key: "Subscriber", value: 5896 },
      { key: "Customer", value: 796 }
    ]
  },
  {
    key: "2018-05-22",
    values: [
      { key: "Customer", value: 651 },
      { key: "Subscriber", value: 5880 }
    ]
  },
  {
    key: "2018-05-23",
    values: [
      { key: "Subscriber", value: 5657 },
      { key: "Customer", value: 707 }
    ]
  },
  {
    key: "2018-05-24",
    values: [
      { key: "Customer", value: 779 },
      { key: "Subscriber", value: 5843 }
    ]
  },
  {
    key: "2018-05-25",
    values: [
      { key: "Customer", value: 848 },
      { key: "Subscriber", value: 5239 }
    ]
  },
  {
    key: "2018-05-26",
    values: [
      { key: "Customer", value: 1241 },
      { key: "Subscriber", value: 2359 }
    ]
  },
  {
    key: "2018-05-27",
    values: [
      { key: "Customer", value: 1382 },
      { key: "Subscriber", value: 2379 }
    ]
  },
  {
    key: "2018-05-28",
    values: [
      { key: "Customer", value: 1154 },
      { key: "Subscriber", value: 2590 }
    ]
  },
  {
    key: "2018-05-29",
    values: [
      { key: "Subscriber", value: 6133 },
      { key: "Customer", value: 783 }
    ]
  },
  {
    key: "2018-05-30",
    values: [
      { key: "Subscriber", value: 6060 },
      { key: "Customer", value: 694 }
    ]
  },
  {
    key: "2018-05-31",
    values: [
      { key: "Customer", value: 728 },
      { key: "Subscriber", value: 6251 }
    ]
  },
  {
    key: "2018-06-01",
    values: [
      { key: "Customer", value: 988 },
      { key: "Subscriber", value: 6039 }
    ]
  },
  {
    key: "2018-06-02",
    values: [
      { key: "Customer", value: 1642 },
      { key: "Subscriber", value: 3253 }
    ]
  },
  {
    key: "2018-06-03",
    values: [
      { key: "Customer", value: 1327 },
      { key: "Subscriber", value: 2873 }
    ]
  },
  {
    key: "2018-06-04",
    values: [
      { key: "Subscriber", value: 6545 },
      { key: "Customer", value: 924 }
    ]
  },
  {
    key: "2018-06-05",
    values: [
      { key: "Subscriber", value: 6748 },
      { key: "Customer", value: 973 }
    ]
  },
  {
    key: "2018-06-06",
    values: [
      { key: "Subscriber", value: 6595 },
      { key: "Customer", value: 1020 }
    ]
  },
  {
    key: "2018-06-07",
    values: [
      { key: "Subscriber", value: 6304 },
      { key: "Customer", value: 904 }
    ]
  },
  {
    key: "2018-06-08",
    values: [
      { key: "Subscriber", value: 5795 },
      { key: "Customer", value: 1037 }
    ]
  },
  {
    key: "2018-06-09",
    values: [
      { key: "Customer", value: 1094 },
      { key: "Subscriber", value: 2616 }
    ]
  },
  {
    key: "2018-06-10",
    values: [
      { key: "Customer", value: 1088 },
      { key: "Subscriber", value: 2606 }
    ]
  },
  {
    key: "2018-06-11",
    values: [
      { key: "Customer", value: 824 },
      { key: "Subscriber", value: 6263 }
    ]
  },
  {
    key: "2018-06-12",
    values: [
      { key: "Customer", value: 1206 },
      { key: "Subscriber", value: 6662 }
    ]
  },
  {
    key: "2018-06-13",
    values: [
      { key: "Customer", value: 1007 },
      { key: "Subscriber", value: 6843 }
    ]
  },
  {
    key: "2018-06-14",
    values: [
      { key: "Subscriber", value: 6800 },
      { key: "Customer", value: 1078 }
    ]
  },
  {
    key: "2018-06-15",
    values: [
      { key: "Customer", value: 915 },
      { key: "Subscriber", value: 5944 }
    ]
  },
  {
    key: "2018-06-16",
    values: [
      { key: "Customer", value: 1221 },
      { key: "Subscriber", value: 2871 }
    ]
  },
  {
    key: "2018-06-17",
    values: [
      { key: "Customer", value: 974 },
      { key: "Subscriber", value: 2665 }
    ]
  },
  {
    key: "2018-06-18",
    values: [
      { key: "Customer", value: 834 },
      { key: "Subscriber", value: 6636 }
    ]
  },
  {
    key: "2018-06-19",
    values: [
      { key: "Subscriber", value: 6727 },
      { key: "Customer", value: 835 }
    ]
  },
  {
    key: "2018-06-20",
    values: [
      { key: "Customer", value: 848 },
      { key: "Subscriber", value: 6539 }
    ]
  },
  {
    key: "2018-06-21",
    values: [
      { key: "Customer", value: 991 },
      { key: "Subscriber", value: 6625 }
    ]
  },
  {
    key: "2018-06-22",
    values: [
      { key: "Customer", value: 1270 },
      { key: "Subscriber", value: 6210 }
    ]
  },
  {
    key: "2018-06-23",
    values: [
      { key: "Customer", value: 1544 },
      { key: "Subscriber", value: 3251 }
    ]
  },
  {
    key: "2018-06-24",
    values: [
      { key: "Customer", value: 1731 },
      { key: "Subscriber", value: 2853 }
    ]
  },
  {
    key: "2018-06-25",
    values: [
      { key: "Subscriber", value: 6626 },
      { key: "Customer", value: 970 }
    ]
  },
  {
    key: "2018-06-26",
    values: [
      { key: "Subscriber", value: 7275 },
      { key: "Customer", value: 1007 }
    ]
  },
  {
    key: "2018-06-27",
    values: [
      { key: "Subscriber", value: 6738 },
      { key: "Customer", value: 949 }
    ]
  },
  {
    key: "2018-06-28",
    values: [
      { key: "Subscriber", value: 6978 },
      { key: "Customer", value: 1142 }
    ]
  },
  {
    key: "2018-06-29",
    values: [
      { key: "Subscriber", value: 6321 },
      { key: "Customer", value: 1198 }
    ]
  },
  {
    key: "2018-06-30",
    values: [
      { key: "Subscriber", value: 2884 },
      { key: "Customer", value: 1342 }
    ]
  },
  {
    key: "2018-07-01",
    values: [
      { key: "Subscriber", value: 2419 },
      { key: "Customer", value: 755 }
    ]
  },
  {
    key: "2018-07-02",
    values: [
      { key: "Subscriber", value: 5948 },
      { key: "Customer", value: 772 }
    ]
  },
  {
    key: "2018-07-03",
    values: [
      { key: "Customer", value: 855 },
      { key: "Subscriber", value: 6287 }
    ]
  },
  {
    key: "2018-07-04",
    values: [
      { key: "Customer", value: 1383 },
      { key: "Subscriber", value: 2563 }
    ]
  },
  {
    key: "2018-07-05",
    values: [
      { key: "Subscriber", value: 5371 },
      { key: "Customer", value: 997 }
    ]
  },
  {
    key: "2018-07-06",
    values: [
      { key: "Customer", value: 1297 },
      { key: "Subscriber", value: 5398 }
    ]
  },
  {
    key: "2018-07-07",
    values: [
      { key: "Subscriber", value: 3023 },
      { key: "Customer", value: 1412 }
    ]
  },
  {
    key: "2018-07-08",
    values: [
      { key: "Customer", value: 1225 },
      { key: "Subscriber", value: 2864 }
    ]
  },
  {
    key: "2018-07-09",
    values: [
      { key: "Subscriber", value: 6888 },
      { key: "Customer", value: 864 }
    ]
  },
  {
    key: "2018-07-10",
    values: [
      { key: "Customer", value: 1097 },
      { key: "Subscriber", value: 7029 }
    ]
  },
  {
    key: "2018-07-11",
    values: [
      { key: "Subscriber", value: 6951 },
      { key: "Customer", value: 1102 }
    ]
  },
  {
    key: "2018-07-12",
    values: [
      { key: "Customer", value: 978 },
      { key: "Subscriber", value: 7017 }
    ]
  },
  {
    key: "2018-07-13",
    values: [
      { key: "Customer", value: 1249 },
      { key: "Subscriber", value: 6323 }
    ]
  },
  {
    key: "2018-07-14",
    values: [
      { key: "Customer", value: 1445 },
      { key: "Subscriber", value: 2954 }
    ]
  },
  {
    key: "2018-07-15",
    values: [
      { key: "Customer", value: 1201 },
      { key: "Subscriber", value: 2875 }
    ]
  },
  {
    key: "2018-07-16",
    values: [
      { key: "Customer", value: 896 },
      { key: "Subscriber", value: 6801 }
    ]
  },
  {
    key: "2018-07-17",
    values: [
      { key: "Customer", value: 800 },
      { key: "Subscriber", value: 6881 }
    ]
  },
  {
    key: "2018-07-18",
    values: [
      { key: "Customer", value: 1064 },
      { key: "Subscriber", value: 6974 }
    ]
  },
  {
    key: "2018-07-19",
    values: [
      { key: "Subscriber", value: 6854 },
      { key: "Customer", value: 1121 }
    ]
  },
  {
    key: "2018-07-20",
    values: [
      { key: "Customer", value: 1232 },
      { key: "Subscriber", value: 6203 }
    ]
  },
  {
    key: "2018-07-21",
    values: [
      { key: "Customer", value: 1647 },
      { key: "Subscriber", value: 3013 }
    ]
  },
  {
    key: "2018-07-22",
    values: [
      { key: "Customer", value: 1342 },
      { key: "Subscriber", value: 2778 }
    ]
  },
  {
    key: "2018-07-23",
    values: [
      { key: "Subscriber", value: 6612 },
      { key: "Customer", value: 952 }
    ]
  },
  {
    key: "2018-07-24",
    values: [
      { key: "Subscriber", value: 7025 },
      { key: "Customer", value: 979 }
    ]
  },
  {
    key: "2018-07-25",
    values: [
      { key: "Subscriber", value: 7201 },
      { key: "Customer", value: 1079 }
    ]
  },
  {
    key: "2018-07-26",
    values: [
      { key: "Customer", value: 993 },
      { key: "Subscriber", value: 6708 }
    ]
  },
  {
    key: "2018-07-27",
    values: [
      { key: "Subscriber", value: 5967 },
      { key: "Customer", value: 1030 }
    ]
  },
  {
    key: "2018-07-28",
    values: [
      { key: "Customer", value: 1403 },
      { key: "Subscriber", value: 2968 }
    ]
  },
  {
    key: "2018-07-29",
    values: [
      { key: "Subscriber", value: 2555 },
      { key: "Customer", value: 1148 }
    ]
  },
  {
    key: "2018-07-30",
    values: [
      { key: "Customer", value: 899 },
      { key: "Subscriber", value: 6339 }
    ]
  },
  {
    key: "2018-07-31",
    values: [
      { key: "Customer", value: 762 },
      { key: "Subscriber", value: 6454 }
    ]
  },
  {
    key: "2018-08-01",
    values: [
      { key: "Customer", value: 807 },
      { key: "Subscriber", value: 6454 }
    ]
  },
  {
    key: "2018-08-02",
    values: [
      { key: "Customer", value: 958 },
      { key: "Subscriber", value: 6320 }
    ]
  },
  {
    key: "2018-08-03",
    values: [
      { key: "Customer", value: 1032 },
      { key: "Subscriber", value: 5721 }
    ]
  },
  {
    key: "2018-08-04",
    values: [
      { key: "Customer", value: 1334 },
      { key: "Subscriber", value: 2694 }
    ]
  },
  {
    key: "2018-08-05",
    values: [
      { key: "Customer", value: 1102 },
      { key: "Subscriber", value: 2278 }
    ]
  },
  {
    key: "2018-08-06",
    values: [
      { key: "Subscriber", value: 6283 },
      { key: "Customer", value: 849 }
    ]
  },
  {
    key: "2018-08-07",
    values: [
      { key: "Customer", value: 916 },
      { key: "Subscriber", value: 6384 }
    ]
  },
  {
    key: "2018-08-08",
    values: [
      { key: "Customer", value: 965 },
      { key: "Subscriber", value: 6488 }
    ]
  },
  {
    key: "2018-08-09",
    values: [
      { key: "Customer", value: 1125 },
      { key: "Subscriber", value: 6421 }
    ]
  },
  {
    key: "2018-08-10",
    values: [
      { key: "Customer", value: 1286 },
      { key: "Subscriber", value: 5885 }
    ]
  },
  {
    key: "2018-08-11",
    values: [
      { key: "Customer", value: 1565 },
      { key: "Subscriber", value: 2883 }
    ]
  },
  {
    key: "2018-08-12",
    values: [
      { key: "Customer", value: 1362 },
      { key: "Subscriber", value: 2539 }
    ]
  },
  {
    key: "2018-08-13",
    values: [
      { key: "Customer", value: 838 },
      { key: "Subscriber", value: 5849 }
    ]
  },
  {
    key: "2018-08-14",
    values: [
      { key: "Subscriber", value: 6128 },
      { key: "Customer", value: 781 }
    ]
  },
  {
    key: "2018-08-15",
    values: [
      { key: "Subscriber", value: 6344 },
      { key: "Customer", value: 865 }
    ]
  },
  {
    key: "2018-08-16",
    values: [
      { key: "Customer", value: 958 },
      { key: "Subscriber", value: 6313 }
    ]
  },
  {
    key: "2018-08-17",
    values: [
      { key: "Subscriber", value: 5536 },
      { key: "Customer", value: 1179 }
    ]
  },
  {
    key: "2018-08-18",
    values: [
      { key: "Customer", value: 1252 },
      { key: "Subscriber", value: 2593 }
    ]
  },
  {
    key: "2018-08-19",
    values: [
      { key: "Subscriber", value: 2331 },
      { key: "Customer", value: 1105 }
    ]
  },
  {
    key: "2018-08-20",
    values: [
      { key: "Subscriber", value: 5921 },
      { key: "Customer", value: 664 }
    ]
  },
  {
    key: "2018-08-21",
    values: [
      { key: "Customer", value: 870 },
      { key: "Subscriber", value: 6455 }
    ]
  },
  {
    key: "2018-08-22",
    values: [
      { key: "Subscriber", value: 6480 },
      { key: "Customer", value: 965 }
    ]
  },
  {
    key: "2018-08-23",
    values: [
      { key: "Subscriber", value: 6341 },
      { key: "Customer", value: 896 }
    ]
  },
  {
    key: "2018-08-24",
    values: [
      { key: "Subscriber", value: 5694 },
      { key: "Customer", value: 1032 }
    ]
  },
  {
    key: "2018-08-25",
    values: [
      { key: "Subscriber", value: 2611 },
      { key: "Customer", value: 1173 }
    ]
  },
  {
    key: "2018-08-26",
    values: [
      { key: "Customer", value: 922 },
      { key: "Subscriber", value: 2314 }
    ]
  },
  {
    key: "2018-08-27",
    values: [
      { key: "Customer", value: 677 },
      { key: "Subscriber", value: 6030 }
    ]
  },
  {
    key: "2018-08-28",
    values: [
      { key: "Customer", value: 771 },
      { key: "Subscriber", value: 6381 }
    ]
  },
  {
    key: "2018-08-29",
    values: [
      { key: "Customer", value: 832 },
      { key: "Subscriber", value: 6474 }
    ]
  },
  {
    key: "2018-08-30",
    values: [
      { key: "Customer", value: 729 },
      { key: "Subscriber", value: 6109 }
    ]
  },
  {
    key: "2018-08-31",
    values: [
      { key: "Customer", value: 909 },
      { key: "Subscriber", value: 5189 }
    ]
  }
];

var tripsByDayAndGender = [
  {
    key: "2018-01-01",
    values: [
      { key: "", value: 350 },
      { key: "Male", value: 673 },
      { key: "Female", value: 329 },
      { key: "Other", value: 23 }
    ]
  },
  {
    key: "2018-01-02",
    values: [
      { key: "", value: 275 },
      { key: "Female", value: 702 },
      { key: "Male", value: 2239 },
      { key: "Other", value: 36 }
    ]
  },
  {
    key: "2018-01-03",
    values: [
      { key: "Male", value: 2033 },
      { key: "Female", value: 623 },
      { key: "Other", value: 45 },
      { key: "", value: 156 }
    ]
  },
  {
    key: "2018-01-04",
    values: [
      { key: "Male", value: 2400 },
      { key: "", value: 159 },
      { key: "Female", value: 701 },
      { key: "Other", value: 40 }
    ]
  },
  {
    key: "2018-01-05",
    values: [
      { key: "Male", value: 1530 },
      { key: "Female", value: 426 },
      { key: "Other", value: 29 },
      { key: "", value: 165 }
    ]
  },
  {
    key: "2018-01-06",
    values: [
      { key: "", value: 289 },
      { key: "Female", value: 422 },
      { key: "Male", value: 1114 },
      { key: "Other", value: 18 }
    ]
  },
  {
    key: "2018-01-07",
    values: [
      { key: "", value: 169 },
      { key: "Male", value: 884 },
      { key: "Other", value: 19 },
      { key: "Female", value: 310 }
    ]
  },
  {
    key: "2018-01-08",
    values: [
      { key: "", value: 27 },
      { key: "Male", value: 630 },
      { key: "Female", value: 134 },
      { key: "Other", value: 14 }
    ]
  },
  {
    key: "2018-01-09",
    values: [
      { key: "", value: 179 },
      { key: "Male", value: 2589 },
      { key: "Female", value: 750 },
      { key: "Other", value: 34 }
    ]
  },
  {
    key: "2018-01-10",
    values: [
      { key: "Female", value: 749 },
      { key: "Male", value: 2507 },
      { key: "", value: 171 },
      { key: "Other", value: 32 }
    ]
  },
  {
    key: "2018-01-11",
    values: [
      { key: "Female", value: 823 },
      { key: "Male", value: 2939 },
      { key: "", value: 278 },
      { key: "Other", value: 59 }
    ]
  },
  {
    key: "2018-01-12",
    values: [
      { key: "Female", value: 838 },
      { key: "", value: 264 },
      { key: "Male", value: 2743 },
      { key: "Other", value: 46 }
    ]
  },
  {
    key: "2018-01-13",
    values: [
      { key: "", value: 381 },
      { key: "Male", value: 1194 },
      { key: "Female", value: 426 },
      { key: "Other", value: 16 }
    ]
  },
  {
    key: "2018-01-14",
    values: [
      { key: "Female", value: 360 },
      { key: "", value: 381 },
      { key: "Male", value: 971 },
      { key: "Other", value: 13 }
    ]
  },
  {
    key: "2018-01-15",
    values: [
      { key: "Male", value: 1478 },
      { key: "Female", value: 469 },
      { key: "", value: 221 },
      { key: "Other", value: 28 }
    ]
  },
  {
    key: "2018-01-16",
    values: [
      { key: "Other", value: 51 },
      { key: "Female", value: 875 },
      { key: "", value: 222 },
      { key: "Male", value: 3128 }
    ]
  },
  {
    key: "2018-01-17",
    values: [
      { key: "Male", value: 3235 },
      { key: "Other", value: 61 },
      { key: "Female", value: 978 },
      { key: "", value: 243 }
    ]
  },
  {
    key: "2018-01-18",
    values: [
      { key: "Male", value: 1962 },
      { key: "Female", value: 530 },
      { key: "Other", value: 22 },
      { key: "", value: 90 }
    ]
  },
  {
    key: "2018-01-19",
    values: [
      { key: "Male", value: 2727 },
      { key: "", value: 289 },
      { key: "Female", value: 767 },
      { key: "Other", value: 58 }
    ]
  },
  {
    key: "2018-01-20",
    values: [
      { key: "Female", value: 624 },
      { key: "Male", value: 1408 },
      { key: "", value: 413 },
      { key: "Other", value: 38 }
    ]
  },
  {
    key: "2018-01-21",
    values: [
      { key: "", value: 339 },
      { key: "Male", value: 1006 },
      { key: "Female", value: 350 },
      { key: "Other", value: 35 }
    ]
  },
  {
    key: "2018-01-22",
    values: [
      { key: "Female", value: 771 },
      { key: "Male", value: 2739 },
      { key: "", value: 249 },
      { key: "Other", value: 36 }
    ]
  },
  {
    key: "2018-01-23",
    values: [
      { key: "Male", value: 3176 },
      { key: "", value: 225 },
      { key: "Female", value: 1024 },
      { key: "Other", value: 62 }
    ]
  },
  {
    key: "2018-01-24",
    values: [
      { key: "", value: 138 },
      { key: "Male", value: 2206 },
      { key: "Female", value: 685 },
      { key: "Other", value: 37 }
    ]
  },
  {
    key: "2018-01-25",
    values: [
      { key: "Male", value: 2952 },
      { key: "Other", value: 39 },
      { key: "", value: 189 },
      { key: "Female", value: 875 }
    ]
  },
  {
    key: "2018-01-26",
    values: [
      { key: "", value: 221 },
      { key: "Male", value: 2732 },
      { key: "Female", value: 836 },
      { key: "Other", value: 57 }
    ]
  },
  {
    key: "2018-01-27",
    values: [
      { key: "Male", value: 1369 },
      { key: "", value: 418 },
      { key: "Female", value: 531 },
      { key: "Other", value: 30 }
    ]
  },
  {
    key: "2018-01-28",
    values: [
      { key: "Male", value: 1215 },
      { key: "", value: 463 },
      { key: "Female", value: 460 },
      { key: "Other", value: 39 }
    ]
  },
  {
    key: "2018-01-29",
    values: [
      { key: "", value: 242 },
      { key: "Male", value: 3194 },
      { key: "Female", value: 972 },
      { key: "Other", value: 59 }
    ]
  },
  {
    key: "2018-01-30",
    values: [
      { key: "", value: 351 },
      { key: "Male", value: 3338 },
      { key: "Female", value: 977 },
      { key: "Other", value: 65 }
    ]
  },
  {
    key: "2018-01-31",
    values: [
      { key: "Male", value: 3197 },
      { key: "", value: 244 },
      { key: "Female", value: 981 },
      { key: "Other", value: 54 }
    ]
  },
  {
    key: "2018-02-01",
    values: [
      { key: "Female", value: 1035 },
      { key: "", value: 285 },
      { key: "Male", value: 3419 },
      { key: "Other", value: 56 }
    ]
  },
  {
    key: "2018-02-02",
    values: [
      { key: "", value: 274 },
      { key: "Male", value: 3205 },
      { key: "Female", value: 1014 },
      { key: "Other", value: 79 }
    ]
  },
  {
    key: "2018-02-03",
    values: [
      { key: "", value: 428 },
      { key: "Male", value: 1665 },
      { key: "Female", value: 697 },
      { key: "Other", value: 27 }
    ]
  },
  {
    key: "2018-02-04",
    values: [
      { key: "Male", value: 1289 },
      { key: "Female", value: 503 },
      { key: "", value: 283 },
      { key: "Other", value: 22 }
    ]
  },
  {
    key: "2018-02-05",
    values: [
      { key: "Male", value: 3306 },
      { key: "", value: 227 },
      { key: "Female", value: 1137 },
      { key: "Other", value: 55 }
    ]
  },
  {
    key: "2018-02-06",
    values: [
      { key: "", value: 325 },
      { key: "Male", value: 3647 },
      { key: "Female", value: 1120 },
      { key: "Other", value: 67 }
    ]
  },
  {
    key: "2018-02-07",
    values: [
      { key: "", value: 293 },
      { key: "Male", value: 3629 },
      { key: "Female", value: 1117 },
      { key: "Other", value: 53 }
    ]
  },
  {
    key: "2018-02-08",
    values: [
      { key: "", value: 335 },
      { key: "Male", value: 3603 },
      { key: "Female", value: 1200 },
      { key: "Other", value: 68 }
    ]
  },
  {
    key: "2018-02-09",
    values: [
      { key: "Female", value: 1105 },
      { key: "Male", value: 3314 },
      { key: "", value: 389 },
      { key: "Other", value: 60 }
    ]
  },
  {
    key: "2018-02-10",
    values: [
      { key: "", value: 551 },
      { key: "Female", value: 667 },
      { key: "Male", value: 1598 },
      { key: "Other", value: 42 }
    ]
  },
  {
    key: "2018-02-11",
    values: [
      { key: "", value: 291 },
      { key: "Female", value: 388 },
      { key: "Male", value: 1116 },
      { key: "Other", value: 31 }
    ]
  },
  {
    key: "2018-02-12",
    values: [
      { key: "Female", value: 1117 },
      { key: "Male", value: 3379 },
      { key: "", value: 260 },
      { key: "Other", value: 49 }
    ]
  },
  {
    key: "2018-02-13",
    values: [
      { key: "Female", value: 1178 },
      { key: "Male", value: 3625 },
      { key: "", value: 275 },
      { key: "Other", value: 70 }
    ]
  },
  {
    key: "2018-02-14",
    values: [
      { key: "Male", value: 3466 },
      { key: "Female", value: 1155 },
      { key: "", value: 223 },
      { key: "Other", value: 51 }
    ]
  },
  {
    key: "2018-02-15",
    values: [
      { key: "Male", value: 3377 },
      { key: "Female", value: 1064 },
      { key: "", value: 234 },
      { key: "Other", value: 59 }
    ]
  },
  {
    key: "2018-02-16",
    values: [
      { key: "Male", value: 3049 },
      { key: "", value: 329 },
      { key: "Female", value: 925 },
      { key: "Other", value: 63 }
    ]
  },
  {
    key: "2018-02-17",
    values: [
      { key: "", value: 495 },
      { key: "Male", value: 1250 },
      { key: "Female", value: 549 },
      { key: "Other", value: 29 }
    ]
  },
  {
    key: "2018-02-18",
    values: [
      { key: "Male", value: 994 },
      { key: "", value: 333 },
      { key: "Female", value: 446 },
      { key: "Other", value: 21 }
    ]
  },
  {
    key: "2018-02-19",
    values: [
      { key: "Male", value: 1355 },
      { key: "Female", value: 454 },
      { key: "Other", value: 26 },
      { key: "", value: 250 }
    ]
  },
  {
    key: "2018-02-20",
    values: [
      { key: "", value: 218 },
      { key: "Male", value: 2887 },
      { key: "Female", value: 934 },
      { key: "Other", value: 58 }
    ]
  },
  {
    key: "2018-02-21",
    values: [
      { key: "Male", value: 3258 },
      { key: "", value: 246 },
      { key: "Female", value: 987 },
      { key: "Other", value: 49 }
    ]
  },
  {
    key: "2018-02-22",
    values: [
      { key: "", value: 218 },
      { key: "Male", value: 2900 },
      { key: "Female", value: 938 },
      { key: "Other", value: 45 }
    ]
  },
  {
    key: "2018-02-23",
    values: [
      { key: "Male", value: 2680 },
      { key: "", value: 241 },
      { key: "Female", value: 853 },
      { key: "Other", value: 61 }
    ]
  },
  {
    key: "2018-02-24",
    values: [
      { key: "", value: 259 },
      { key: "Female", value: 493 },
      { key: "Male", value: 1165 },
      { key: "Other", value: 25 }
    ]
  },
  {
    key: "2018-02-25",
    values: [
      { key: "Female", value: 479 },
      { key: "Other", value: 33 },
      { key: "Male", value: 1143 },
      { key: "", value: 288 }
    ]
  },
  {
    key: "2018-02-26",
    values: [
      { key: "Female", value: 714 },
      { key: "", value: 156 },
      { key: "Male", value: 2452 },
      { key: "Other", value: 48 }
    ]
  },
  {
    key: "2018-02-27",
    values: [
      { key: "Male", value: 3172 },
      { key: "", value: 188 },
      { key: "Female", value: 1033 },
      { key: "Other", value: 62 }
    ]
  },
  {
    key: "2018-02-28",
    values: [
      { key: "Male", value: 3125 },
      { key: "Female", value: 929 },
      { key: "", value: 162 },
      { key: "Other", value: 54 }
    ]
  },
  {
    key: "2018-03-01",
    values: [
      { key: "Female", value: 587 },
      { key: "", value: 125 },
      { key: "Male", value: 1945 },
      { key: "Other", value: 39 }
    ]
  },
  {
    key: "2018-03-02",
    values: [
      { key: "Female", value: 603 },
      { key: "Male", value: 2037 },
      { key: "", value: 143 },
      { key: "Other", value: 31 }
    ]
  },
  {
    key: "2018-03-03",
    values: [
      { key: "", value: 174 },
      { key: "Male", value: 1078 },
      { key: "Female", value: 391 },
      { key: "Other", value: 22 }
    ]
  },
  {
    key: "2018-03-04",
    values: [
      { key: "", value: 280 },
      { key: "Female", value: 421 },
      { key: "Male", value: 1116 },
      { key: "Other", value: 35 }
    ]
  },
  {
    key: "2018-03-05",
    values: [
      { key: "", value: 194 },
      { key: "Male", value: 3171 },
      { key: "Female", value: 954 },
      { key: "Other", value: 56 }
    ]
  },
  {
    key: "2018-03-06",
    values: [
      { key: "Male", value: 3438 },
      { key: "Female", value: 1105 },
      { key: "", value: 221 },
      { key: "Other", value: 62 }
    ]
  },
  {
    key: "2018-03-07",
    values: [
      { key: "Male", value: 3479 },
      { key: "", value: 262 },
      { key: "Female", value: 1164 },
      { key: "Other", value: 53 }
    ]
  },
  {
    key: "2018-03-08",
    values: [
      { key: "", value: 273 },
      { key: "Female", value: 1074 },
      { key: "Male", value: 3328 },
      { key: "Other", value: 50 }
    ]
  },
  {
    key: "2018-03-09",
    values: [
      { key: "Male", value: 2987 },
      { key: "", value: 369 },
      { key: "Female", value: 958 },
      { key: "Other", value: 68 }
    ]
  },
  {
    key: "2018-03-10",
    values: [
      { key: "Male", value: 1263 },
      { key: "", value: 363 },
      { key: "Female", value: 541 },
      { key: "Other", value: 44 }
    ]
  },
  {
    key: "2018-03-11",
    values: [
      { key: "", value: 381 },
      { key: "Male", value: 1383 },
      { key: "Female", value: 608 },
      { key: "Other", value: 40 }
    ]
  },
  {
    key: "2018-03-12",
    values: [
      { key: "", value: 201 },
      { key: "Male", value: 2576 },
      { key: "Female", value: 899 },
      { key: "Other", value: 52 }
    ]
  },
  {
    key: "2018-03-13",
    values: [
      { key: "Male", value: 2117 },
      { key: "Female", value: 642 },
      { key: "", value: 142 },
      { key: "Other", value: 47 }
    ]
  },
  {
    key: "2018-03-14",
    values: [
      { key: "Other", value: 50 },
      { key: "Male", value: 2819 },
      { key: "Female", value: 933 },
      { key: "", value: 265 }
    ]
  },
  {
    key: "2018-03-15",
    values: [
      { key: "", value: 169 },
      { key: "Male", value: 2376 },
      { key: "Female", value: 773 },
      { key: "Other", value: 49 }
    ]
  },
  {
    key: "2018-03-16",
    values: [
      { key: "Female", value: 825 },
      { key: "Male", value: 2469 },
      { key: "", value: 294 },
      { key: "Other", value: 42 }
    ]
  },
  {
    key: "2018-03-17",
    values: [
      { key: "Male", value: 1324 },
      { key: "", value: 350 },
      { key: "Female", value: 473 },
      { key: "Other", value: 29 }
    ]
  },
  {
    key: "2018-03-18",
    values: [
      { key: "", value: 460 },
      { key: "Male", value: 1081 },
      { key: "Female", value: 378 },
      { key: "Other", value: 36 }
    ]
  },
  {
    key: "2018-03-19",
    values: [
      { key: "Female", value: 1171 },
      { key: "Male", value: 3441 },
      { key: "", value: 301 },
      { key: "Other", value: 80 }
    ]
  },
  {
    key: "2018-03-20",
    values: [
      { key: "Male", value: 2009 },
      { key: "Female", value: 643 },
      { key: "", value: 106 },
      { key: "Other", value: 30 }
    ]
  },
  {
    key: "2018-03-21",
    values: [
      { key: "", value: 244 },
      { key: "Male", value: 2905 },
      { key: "Female", value: 855 },
      { key: "Other", value: 32 }
    ]
  },
  {
    key: "2018-03-22",
    values: [
      { key: "Female", value: 819 },
      { key: "Male", value: 2749 },
      { key: "", value: 150 },
      { key: "Other", value: 47 }
    ]
  },
  {
    key: "2018-03-23",
    values: [
      { key: "", value: 323 },
      { key: "Male", value: 2962 },
      { key: "Female", value: 983 },
      { key: "Other", value: 50 }
    ]
  },
  {
    key: "2018-03-24",
    values: [
      { key: "Male", value: 1324 },
      { key: "Female", value: 553 },
      { key: "", value: 358 },
      { key: "Other", value: 45 }
    ]
  },
  {
    key: "2018-03-25",
    values: [
      { key: "", value: 401 },
      { key: "Male", value: 1227 },
      { key: "Female", value: 567 },
      { key: "Other", value: 38 }
    ]
  },
  {
    key: "2018-03-26",
    values: [
      { key: "", value: 341 },
      { key: "Male", value: 3211 },
      { key: "Other", value: 53 },
      { key: "Female", value: 1154 }
    ]
  },
  {
    key: "2018-03-27",
    values: [
      { key: "Male", value: 3525 },
      { key: "", value: 337 },
      { key: "Other", value: 69 },
      { key: "Female", value: 1250 }
    ]
  },
  {
    key: "2018-03-28",
    values: [
      { key: "Female", value: 1230 },
      { key: "", value: 423 },
      { key: "Other", value: 77 },
      { key: "Male", value: 3626 }
    ]
  },
  {
    key: "2018-03-29",
    values: [
      { key: "Male", value: 3655 },
      { key: "Female", value: 1258 },
      { key: "", value: 447 },
      { key: "Other", value: 72 }
    ]
  },
  {
    key: "2018-03-30",
    values: [
      { key: "", value: 429 },
      { key: "Male", value: 3155 },
      { key: "Female", value: 1109 },
      { key: "Other", value: 67 }
    ]
  },
  {
    key: "2018-03-31",
    values: [
      { key: "Female", value: 649 },
      { key: "Male", value: 1526 },
      { key: "", value: 471 },
      { key: "Other", value: 48 }
    ]
  },
  {
    key: "2018-04-01",
    values: [
      { key: "", value: 333 },
      { key: "Male", value: 1304 },
      { key: "Female", value: 504 },
      { key: "Other", value: 37 }
    ]
  },
  {
    key: "2018-04-02",
    values: [
      { key: "", value: 296 },
      { key: "Other", value: 80 },
      { key: "Male", value: 3570 },
      { key: "Female", value: 1275 }
    ]
  },
  {
    key: "2018-04-03",
    values: [
      { key: "", value: 359 },
      { key: "Male", value: 3770 },
      { key: "Female", value: 1377 },
      { key: "Other", value: 60 }
    ]
  },
  {
    key: "2018-04-04",
    values: [
      { key: "", value: 266 },
      { key: "Male", value: 3615 },
      { key: "Female", value: 1245 },
      { key: "Other", value: 56 }
    ]
  },
  {
    key: "2018-04-05",
    values: [
      { key: "", value: 198 },
      { key: "Male", value: 3043 },
      { key: "Female", value: 1028 },
      { key: "Other", value: 57 }
    ]
  },
  {
    key: "2018-04-06",
    values: [
      { key: "Male", value: 964 },
      { key: "", value: 55 },
      { key: "Female", value: 263 },
      { key: "Other", value: 12 }
    ]
  },
  {
    key: "2018-04-07",
    values: [
      { key: "Female", value: 641 },
      { key: "", value: 389 },
      { key: "Male", value: 1581 },
      { key: "Other", value: 35 }
    ]
  },
  {
    key: "2018-04-08",
    values: [
      { key: "", value: 427 },
      { key: "Female", value: 732 },
      { key: "Male", value: 1561 },
      { key: "Other", value: 44 }
    ]
  },
  {
    key: "2018-04-09",
    values: [
      { key: "Male", value: 3744 },
      { key: "Female", value: 1274 },
      { key: "", value: 275 },
      { key: "Other", value: 72 }
    ]
  },
  {
    key: "2018-04-10",
    values: [
      { key: "Female", value: 1266 },
      { key: "Other", value: 85 },
      { key: "Male", value: 3727 },
      { key: "", value: 218 }
    ]
  },
  {
    key: "2018-04-11",
    values: [
      { key: "Female", value: 1052 },
      { key: "", value: 197 },
      { key: "Male", value: 3112 },
      { key: "Other", value: 74 }
    ]
  },
  {
    key: "2018-04-12",
    values: [
      { key: "Female", value: 1131 },
      { key: "", value: 217 },
      { key: "Male", value: 3487 },
      { key: "Other", value: 73 }
    ]
  },
  {
    key: "2018-04-13",
    values: [
      { key: "", value: 309 },
      { key: "Male", value: 3421 },
      { key: "Female", value: 1061 },
      { key: "Other", value: 66 }
    ]
  },
  {
    key: "2018-04-14",
    values: [
      { key: "", value: 530 },
      { key: "Female", value: 722 },
      { key: "Male", value: 1732 },
      { key: "Other", value: 46 }
    ]
  },
  {
    key: "2018-04-15",
    values: [
      { key: "", value: 237 },
      { key: "Male", value: 1137 },
      { key: "Other", value: 35 },
      { key: "Female", value: 382 }
    ]
  },
  {
    key: "2018-04-16",
    values: [
      { key: "", value: 190 },
      { key: "Male", value: 2829 },
      { key: "Female", value: 839 },
      { key: "Other", value: 48 }
    ]
  },
  {
    key: "2018-04-17",
    values: [
      { key: "", value: 214 },
      { key: "Male", value: 3722 },
      { key: "Female", value: 1220 },
      { key: "Other", value: 75 }
    ]
  },
  {
    key: "2018-04-18",
    values: [
      { key: "Male", value: 3542 },
      { key: "", value: 225 },
      { key: "Female", value: 1137 },
      { key: "Other", value: 69 }
    ]
  },
  {
    key: "2018-04-19",
    values: [
      { key: "Male", value: 3709 },
      { key: "Female", value: 1234 },
      { key: "", value: 243 },
      { key: "Other", value: 60 }
    ]
  },
  {
    key: "2018-04-20",
    values: [
      { key: "Male", value: 3333 },
      { key: "", value: 373 },
      { key: "Other", value: 63 },
      { key: "Female", value: 1117 }
    ]
  },
  {
    key: "2018-04-21",
    values: [
      { key: "Female", value: 754 },
      { key: "Male", value: 1731 },
      { key: "", value: 511 },
      { key: "Other", value: 46 }
    ]
  },
  {
    key: "2018-04-22",
    values: [
      { key: "", value: 395 },
      { key: "Male", value: 1533 },
      { key: "Female", value: 579 },
      { key: "Other", value: 34 }
    ]
  },
  {
    key: "2018-04-23",
    values: [
      { key: "Male", value: 3611 },
      { key: "Female", value: 1305 },
      { key: "Other", value: 60 },
      { key: "", value: 240 }
    ]
  },
  {
    key: "2018-04-24",
    values: [
      { key: "", value: 295 },
      { key: "Male", value: 4220 },
      { key: "Female", value: 1350 },
      { key: "Other", value: 62 }
    ]
  },
  {
    key: "2018-04-25",
    values: [
      { key: "Male", value: 4606 },
      { key: "Female", value: 1402 },
      { key: "", value: 287 },
      { key: "Other", value: 82 }
    ]
  },
  {
    key: "2018-04-26",
    values: [
      { key: "Female", value: 1345 },
      { key: "Male", value: 4284 },
      { key: "", value: 265 },
      { key: "Other", value: 84 }
    ]
  },
  {
    key: "2018-04-27",
    values: [
      { key: "", value: 361 },
      { key: "Female", value: 1352 },
      { key: "Male", value: 4222 },
      { key: "Other", value: 85 }
    ]
  },
  {
    key: "2018-04-28",
    values: [
      { key: "Male", value: 2203 },
      { key: "Female", value: 808 },
      { key: "", value: 562 },
      { key: "Other", value: 46 }
    ]
  },
  {
    key: "2018-04-29",
    values: [
      { key: "", value: 470 },
      { key: "Female", value: 724 },
      { key: "Male", value: 1970 },
      { key: "Other", value: 44 }
    ]
  },
  {
    key: "2018-04-30",
    values: [
      { key: "", value: 405 },
      { key: "Male", value: 4292 },
      { key: "Female", value: 1363 },
      { key: "Other", value: 80 }
    ]
  },
  {
    key: "2018-05-01",
    values: [
      { key: "Female", value: 1484 },
      { key: "", value: 371 },
      { key: "Male", value: 4725 },
      { key: "Other", value: 84 }
    ]
  },
  {
    key: "2018-05-02",
    values: [
      { key: "Other", value: 78 },
      { key: "Male", value: 4852 },
      { key: "", value: 417 },
      { key: "Female", value: 1454 }
    ]
  },
  {
    key: "2018-05-03",
    values: [
      { key: "", value: 325 },
      { key: "Male", value: 4559 },
      { key: "Female", value: 1456 },
      { key: "Other", value: 78 }
    ]
  },
  {
    key: "2018-05-04",
    values: [
      { key: "Male", value: 4451 },
      { key: "", value: 352 },
      { key: "Female", value: 1451 },
      { key: "Other", value: 77 }
    ]
  },
  {
    key: "2018-05-05",
    values: [
      { key: "", value: 385 },
      { key: "Male", value: 2213 },
      { key: "Female", value: 904 },
      { key: "Other", value: 46 }
    ]
  },
  {
    key: "2018-05-06",
    values: [
      { key: "Male", value: 2105 },
      { key: "", value: 433 },
      { key: "Female", value: 708 },
      { key: "Other", value: 51 }
    ]
  },
  {
    key: "2018-05-07",
    values: [
      { key: "Male", value: 4503 },
      { key: "Female", value: 1554 },
      { key: "", value: 399 },
      { key: "Other", value: 72 }
    ]
  },
  {
    key: "2018-05-08",
    values: [
      { key: "Male", value: 4632 },
      { key: "", value: 301 },
      { key: "Female", value: 1594 },
      { key: "Other", value: 87 }
    ]
  },
  {
    key: "2018-05-09",
    values: [
      { key: "Male", value: 4575 },
      { key: "", value: 346 },
      { key: "Female", value: 1507 },
      { key: "Other", value: 97 }
    ]
  },
  {
    key: "2018-05-10",
    values: [
      { key: "Female", value: 1992 },
      { key: "Male", value: 5209 },
      { key: "", value: 444 },
      { key: "Other", value: 115 }
    ]
  },
  {
    key: "2018-05-11",
    values: [
      { key: "Male", value: 4672 },
      { key: "Female", value: 1569 },
      { key: "", value: 442 },
      { key: "Other", value: 101 }
    ]
  },
  {
    key: "2018-05-12",
    values: [
      { key: "Male", value: 2514 },
      { key: "", value: 506 },
      { key: "Female", value: 955 },
      { key: "Other", value: 54 }
    ]
  },
  {
    key: "2018-05-13",
    values: [
      { key: "Male", value: 1927 },
      { key: "Female", value: 739 },
      { key: "", value: 391 },
      { key: "Other", value: 37 }
    ]
  },
  {
    key: "2018-05-14",
    values: [
      { key: "Male", value: 4623 },
      { key: "Female", value: 1558 },
      { key: "", value: 293 },
      { key: "Other", value: 72 }
    ]
  },
  {
    key: "2018-05-15",
    values: [
      { key: "Male", value: 4704 },
      { key: "", value: 301 },
      { key: "Female", value: 1628 },
      { key: "Other", value: 86 }
    ]
  },
  {
    key: "2018-05-16",
    values: [
      { key: "Male", value: 4944 },
      { key: "", value: 339 },
      { key: "Female", value: 1617 },
      { key: "Other", value: 115 }
    ]
  },
  {
    key: "2018-05-17",
    values: [
      { key: "Male", value: 4724 },
      { key: "Female", value: 1620 },
      { key: "", value: 311 },
      { key: "Other", value: 87 }
    ]
  },
  {
    key: "2018-05-18",
    values: [
      { key: "", value: 318 },
      { key: "Male", value: 4387 },
      { key: "Female", value: 1514 },
      { key: "Other", value: 91 }
    ]
  },
  {
    key: "2018-05-19",
    values: [
      { key: "", value: 465 },
      { key: "Male", value: 2386 },
      { key: "Female", value: 928 },
      { key: "Other", value: 79 }
    ]
  },
  {
    key: "2018-05-20",
    values: [
      { key: "", value: 441 },
      { key: "Male", value: 2240 },
      { key: "Female", value: 768 },
      { key: "Other", value: 43 }
    ]
  },
  {
    key: "2018-05-21",
    values: [
      { key: "Male", value: 4678 },
      { key: "Female", value: 1609 },
      { key: "", value: 305 },
      { key: "Other", value: 100 }
    ]
  },
  {
    key: "2018-05-22",
    values: [
      { key: "Female", value: 1580 },
      { key: "Male", value: 4591 },
      { key: "", value: 262 },
      { key: "Other", value: 98 }
    ]
  },
  {
    key: "2018-05-23",
    values: [
      { key: "Female", value: 1453 },
      { key: "", value: 288 },
      { key: "Male", value: 4498 },
      { key: "Other", value: 125 }
    ]
  },
  {
    key: "2018-05-24",
    values: [
      { key: "Male", value: 4662 },
      { key: "", value: 286 },
      { key: "Female", value: 1576 },
      { key: "Other", value: 98 }
    ]
  },
  {
    key: "2018-05-25",
    values: [
      { key: "Male", value: 4353 },
      { key: "Female", value: 1320 },
      { key: "", value: 315 },
      { key: "Other", value: 99 }
    ]
  },
  {
    key: "2018-05-26",
    values: [
      { key: "", value: 562 },
      { key: "Male", value: 2051 },
      { key: "Female", value: 885 },
      { key: "Other", value: 102 }
    ]
  },
  {
    key: "2018-05-27",
    values: [
      { key: "Female", value: 943 },
      { key: "", value: 624 },
      { key: "Male", value: 2120 },
      { key: "Other", value: 74 }
    ]
  },
  {
    key: "2018-05-28",
    values: [
      { key: "", value: 569 },
      { key: "Male", value: 2283 },
      { key: "Female", value: 843 },
      { key: "Other", value: 49 }
    ]
  },
  {
    key: "2018-05-29",
    values: [
      { key: "Male", value: 4909 },
      { key: "", value: 306 },
      { key: "Female", value: 1595 },
      { key: "Other", value: 106 }
    ]
  },
  {
    key: "2018-05-30",
    values: [
      { key: "Female", value: 1556 },
      { key: "Male", value: 4787 },
      { key: "Other", value: 106 },
      { key: "", value: 305 }
    ]
  },
  {
    key: "2018-05-31",
    values: [
      { key: "", value: 310 },
      { key: "Male", value: 4906 },
      { key: "Female", value: 1651 },
      { key: "Other", value: 112 }
    ]
  },
  {
    key: "2018-06-01",
    values: [
      { key: "Male", value: 4945 },
      { key: "Female", value: 1641 },
      { key: "Other", value: 111 },
      { key: "", value: 330 }
    ]
  },
  {
    key: "2018-06-02",
    values: [
      { key: "Male", value: 3007 },
      { key: "", value: 621 },
      { key: "Female", value: 1178 },
      { key: "Other", value: 89 }
    ]
  },
  {
    key: "2018-06-03",
    values: [
      { key: "", value: 502 },
      { key: "Female", value: 1072 },
      { key: "Male", value: 2546 },
      { key: "Other", value: 80 }
    ]
  },
  {
    key: "2018-06-04",
    values: [
      { key: "Female", value: 1750 },
      { key: "Male", value: 5180 },
      { key: "", value: 415 },
      { key: "Other", value: 124 }
    ]
  },
  {
    key: "2018-06-05",
    values: [
      { key: "Male", value: 5350 },
      { key: "", value: 417 },
      { key: "Other", value: 131 },
      { key: "Female", value: 1823 }
    ]
  },
  {
    key: "2018-06-06",
    values: [
      { key: "Other", value: 134 },
      { key: "Male", value: 5308 },
      { key: "", value: 445 },
      { key: "Female", value: 1728 }
    ]
  },
  {
    key: "2018-06-07",
    values: [
      { key: "Male", value: 5046 },
      { key: "Female", value: 1626 },
      { key: "", value: 424 },
      { key: "Other", value: 112 }
    ]
  },
  {
    key: "2018-06-08",
    values: [
      { key: "Male", value: 4737 },
      { key: "Female", value: 1591 },
      { key: "", value: 402 },
      { key: "Other", value: 102 }
    ]
  },
  {
    key: "2018-06-09",
    values: [
      { key: "", value: 388 },
      { key: "Other", value: 81 },
      { key: "Female", value: 941 },
      { key: "Male", value: 2300 }
    ]
  },
  {
    key: "2018-06-10",
    values: [
      { key: "", value: 464 },
      { key: "Female", value: 952 },
      { key: "Male", value: 2215 },
      { key: "Other", value: 63 }
    ]
  },
  {
    key: "2018-06-11",
    values: [
      { key: "", value: 350 },
      { key: "Female", value: 1705 },
      { key: "Male", value: 4921 },
      { key: "Other", value: 111 }
    ]
  },
  {
    key: "2018-06-12",
    values: [
      { key: "Male", value: 5404 },
      { key: "Female", value: 1811 },
      { key: "", value: 533 },
      { key: "Other", value: 120 }
    ]
  },
  {
    key: "2018-06-13",
    values: [
      { key: "", value: 434 },
      { key: "Male", value: 5397 },
      { key: "Female", value: 1894 },
      { key: "Other", value: 125 }
    ]
  },
  {
    key: "2018-06-14",
    values: [
      { key: "Male", value: 5494 },
      { key: "Other", value: 155 },
      { key: "", value: 392 },
      { key: "Female", value: 1837 }
    ]
  },
  {
    key: "2018-06-15",
    values: [
      { key: "", value: 336 },
      { key: "Female", value: 1590 },
      { key: "Male", value: 4833 },
      { key: "Other", value: 100 }
    ]
  },
  {
    key: "2018-06-16",
    values: [
      { key: "", value: 507 },
      { key: "Male", value: 2549 },
      { key: "Female", value: 965 },
      { key: "Other", value: 71 }
    ]
  },
  {
    key: "2018-06-17",
    values: [
      { key: "Male", value: 2375 },
      { key: "", value: 316 },
      { key: "Female", value: 876 },
      { key: "Other", value: 72 }
    ]
  },
  {
    key: "2018-06-18",
    values: [
      { key: "Male", value: 5211 },
      { key: "", value: 314 },
      { key: "Female", value: 1830 },
      { key: "Other", value: 115 }
    ]
  },
  {
    key: "2018-06-19",
    values: [
      { key: "Male", value: 5303 },
      { key: "Female", value: 1802 },
      { key: "Other", value: 116 },
      { key: "", value: 341 }
    ]
  },
  {
    key: "2018-06-20",
    values: [
      { key: "Female", value: 1772 },
      { key: "Male", value: 5188 },
      { key: "", value: 324 },
      { key: "Other", value: 103 }
    ]
  },
  {
    key: "2018-06-21",
    values: [
      { key: "", value: 421 },
      { key: "Male", value: 5297 },
      { key: "Female", value: 1789 },
      { key: "Other", value: 109 }
    ]
  },
  {
    key: "2018-06-22",
    values: [
      { key: "Male", value: 5131 },
      { key: "", value: 446 },
      { key: "Female", value: 1801 },
      { key: "Other", value: 102 }
    ]
  },
  {
    key: "2018-06-23",
    values: [
      { key: "Female", value: 1224 },
      { key: "", value: 582 },
      { key: "Male", value: 2901 },
      { key: "Other", value: 88 }
    ]
  },
  {
    key: "2018-06-24",
    values: [
      { key: "Female", value: 1094 },
      { key: "", value: 549 },
      { key: "Male", value: 2863 },
      { key: "Other", value: 78 }
    ]
  },
  {
    key: "2018-06-25",
    values: [
      { key: "Male", value: 5375 },
      { key: "Female", value: 1767 },
      { key: "", value: 312 },
      { key: "Other", value: 142 }
    ]
  },
  {
    key: "2018-06-26",
    values: [
      { key: "Male", value: 5644 },
      { key: "Female", value: 2097 },
      { key: "Other", value: 118 },
      { key: "", value: 423 }
    ]
  },
  {
    key: "2018-06-27",
    values: [
      { key: "Male", value: 5325 },
      { key: "", value: 332 },
      { key: "Other", value: 127 },
      { key: "Female", value: 1903 }
    ]
  },
  {
    key: "2018-06-28",
    values: [
      { key: "Male", value: 5691 },
      { key: "Female", value: 1874 },
      { key: "", value: 430 },
      { key: "Other", value: 125 }
    ]
  },
  {
    key: "2018-06-29",
    values: [
      { key: "Male", value: 5218 },
      { key: "", value: 414 },
      { key: "Female", value: 1789 },
      { key: "Other", value: 98 }
    ]
  },
  {
    key: "2018-06-30",
    values: [
      { key: "Male", value: 2694 },
      { key: "", value: 402 },
      { key: "Female", value: 1073 },
      { key: "Other", value: 57 }
    ]
  },
  {
    key: "2018-07-01",
    values: [
      { key: "Male", value: 2112 },
      { key: "Female", value: 725 },
      { key: "", value: 271 },
      { key: "Other", value: 66 }
    ]
  },
  {
    key: "2018-07-02",
    values: [
      { key: "Other", value: 84 },
      { key: "Male", value: 4685 },
      { key: "Female", value: 1626 },
      { key: "", value: 325 }
    ]
  },
  {
    key: "2018-07-03",
    values: [
      { key: "Male", value: 4785 },
      { key: "", value: 432 },
      { key: "Female", value: 1827 },
      { key: "Other", value: 98 }
    ]
  },
  {
    key: "2018-07-04",
    values: [
      { key: "Male", value: 2412 },
      { key: "Other", value: 75 },
      { key: "Female", value: 1066 },
      { key: "", value: 393 }
    ]
  },
  {
    key: "2018-07-05",
    values: [
      { key: "Female", value: 1502 },
      { key: "Male", value: 4362 },
      { key: "", value: 389 },
      { key: "Other", value: 115 }
    ]
  },
  {
    key: "2018-07-06",
    values: [
      { key: "Female", value: 1542 },
      { key: "", value: 463 },
      { key: "Male", value: 4580 },
      { key: "Other", value: 110 }
    ]
  },
  {
    key: "2018-07-07",
    values: [
      { key: "Male", value: 2838 },
      { key: "", value: 440 },
      { key: "Female", value: 1078 },
      { key: "Other", value: 79 }
    ]
  },
  {
    key: "2018-07-08",
    values: [
      { key: "Male", value: 2508 },
      { key: "", value: 425 },
      { key: "Female", value: 1092 },
      { key: "Other", value: 64 }
    ]
  },
  {
    key: "2018-07-09",
    values: [
      { key: "Male", value: 5427 },
      { key: "Female", value: 1904 },
      { key: "", value: 305 },
      { key: "Other", value: 116 }
    ]
  },
  {
    key: "2018-07-10",
    values: [
      { key: "Male", value: 5564 },
      { key: "", value: 484 },
      { key: "Female", value: 1958 },
      { key: "Other", value: 120 }
    ]
  },
  {
    key: "2018-07-11",
    values: [
      { key: "Male", value: 5623 },
      { key: "Female", value: 1917 },
      { key: "", value: 374 },
      { key: "Other", value: 139 }
    ]
  },
  {
    key: "2018-07-12",
    values: [
      { key: "", value: 375 },
      { key: "Female", value: 1961 },
      { key: "Male", value: 5548 },
      { key: "Other", value: 111 }
    ]
  },
  {
    key: "2018-07-13",
    values: [
      { key: "Male", value: 5276 },
      { key: "", value: 451 },
      { key: "Female", value: 1738 },
      { key: "Other", value: 107 }
    ]
  },
  {
    key: "2018-07-14",
    values: [
      { key: "Male", value: 2723 },
      { key: "Other", value: 81 },
      { key: "Female", value: 1076 },
      { key: "", value: 519 }
    ]
  },
  {
    key: "2018-07-15",
    values: [
      { key: "Male", value: 2577 },
      { key: "Female", value: 1071 },
      { key: "", value: 355 },
      { key: "Other", value: 73 }
    ]
  },
  {
    key: "2018-07-16",
    values: [
      { key: "Female", value: 1816 },
      { key: "", value: 374 },
      { key: "Male", value: 5391 },
      { key: "Other", value: 116 }
    ]
  },
  {
    key: "2018-07-17",
    values: [
      { key: "Female", value: 1892 },
      { key: "", value: 353 },
      { key: "Male", value: 5328 },
      { key: "Other", value: 108 }
    ]
  },
  {
    key: "2018-07-18",
    values: [
      { key: "Male", value: 5573 },
      { key: "Female", value: 1940 },
      { key: "", value: 414 },
      { key: "Other", value: 111 }
    ]
  },
  {
    key: "2018-07-19",
    values: [
      { key: "Male", value: 5435 },
      { key: "", value: 486 },
      { key: "Female", value: 1950 },
      { key: "Other", value: 104 }
    ]
  },
  {
    key: "2018-07-20",
    values: [
      { key: "Male", value: 5180 },
      { key: "", value: 458 },
      { key: "Female", value: 1681 },
      { key: "Other", value: 116 }
    ]
  },
  {
    key: "2018-07-21",
    values: [
      { key: "", value: 579 },
      { key: "Male", value: 2908 },
      { key: "Other", value: 103 },
      { key: "Female", value: 1070 }
    ]
  },
  {
    key: "2018-07-22",
    values: [
      { key: "Male", value: 2711 },
      { key: "Female", value: 980 },
      { key: "", value: 360 },
      { key: "Other", value: 69 }
    ]
  },
  {
    key: "2018-07-23",
    values: [
      { key: "Female", value: 1831 },
      { key: "Male", value: 5261 },
      { key: "", value: 347 },
      { key: "Other", value: 125 }
    ]
  },
  {
    key: "2018-07-24",
    values: [
      { key: "Female", value: 1880 },
      { key: "Male", value: 5540 },
      { key: "", value: 449 },
      { key: "Other", value: 135 }
    ]
  },
  {
    key: "2018-07-25",
    values: [
      { key: "Female", value: 1974 },
      { key: "Other", value: 146 },
      { key: "", value: 419 },
      { key: "Male", value: 5741 }
    ]
  },
  {
    key: "2018-07-26",
    values: [
      { key: "Male", value: 5429 },
      { key: "", value: 366 },
      { key: "Female", value: 1803 },
      { key: "Other", value: 103 }
    ]
  },
  {
    key: "2018-07-27",
    values: [
      { key: "Male", value: 4911 },
      { key: "", value: 349 },
      { key: "Female", value: 1624 },
      { key: "Other", value: 113 }
    ]
  },
  {
    key: "2018-07-28",
    values: [
      { key: "", value: 493 },
      { key: "Male", value: 2744 },
      { key: "Female", value: 1057 },
      { key: "Other", value: 77 }
    ]
  },
  {
    key: "2018-07-29",
    values: [
      { key: "Male", value: 2334 },
      { key: "Female", value: 966 },
      { key: "", value: 339 },
      { key: "Other", value: 64 }
    ]
  },
  {
    key: "2018-07-30",
    values: [
      { key: "Female", value: 1842 },
      { key: "", value: 292 },
      { key: "Male", value: 5022 },
      { key: "Other", value: 82 }
    ]
  },
  {
    key: "2018-07-31",
    values: [
      { key: "Male", value: 4982 },
      { key: "Female", value: 1825 },
      { key: "", value: 311 },
      { key: "Other", value: 98 }
    ]
  },
  {
    key: "2018-08-01",
    values: [
      { key: "Male", value: 5017 },
      { key: "Female", value: 1796 },
      { key: "", value: 343 },
      { key: "Other", value: 105 }
    ]
  },
  {
    key: "2018-08-02",
    values: [
      { key: "Female", value: 1731 },
      { key: "Male", value: 5068 },
      { key: "", value: 385 },
      { key: "Other", value: 94 }
    ]
  },
  {
    key: "2018-08-03",
    values: [
      { key: "Female", value: 1682 },
      { key: "Male", value: 4572 },
      { key: "Other", value: 113 },
      { key: "", value: 386 }
    ]
  },
  {
    key: "2018-08-04",
    values: [
      { key: "Male", value: 2536 },
      { key: "Female", value: 1044 },
      { key: "", value: 385 },
      { key: "Other", value: 63 }
    ]
  },
  {
    key: "2018-08-05",
    values: [
      { key: "Male", value: 2145 },
      { key: "Female", value: 875 },
      { key: "", value: 304 },
      { key: "Other", value: 56 }
    ]
  },
  {
    key: "2018-08-06",
    values: [
      { key: "Male", value: 4936 },
      { key: "", value: 306 },
      { key: "Female", value: 1783 },
      { key: "Other", value: 107 }
    ]
  },
  {
    key: "2018-08-07",
    values: [
      { key: "Male", value: 5069 },
      { key: "", value: 359 },
      { key: "Female", value: 1757 },
      { key: "Other", value: 115 }
    ]
  },
  {
    key: "2018-08-08",
    values: [
      { key: "", value: 423 },
      { key: "Male", value: 5114 },
      { key: "Female", value: 1802 },
      { key: "Other", value: 114 }
    ]
  },
  {
    key: "2018-08-09",
    values: [
      { key: "Male", value: 5153 },
      { key: "", value: 405 },
      { key: "Female", value: 1885 },
      { key: "Other", value: 103 }
    ]
  },
  {
    key: "2018-08-10",
    values: [
      { key: "Male", value: 4904 },
      { key: "Female", value: 1679 },
      { key: "", value: 482 },
      { key: "Other", value: 106 }
    ]
  },
  {
    key: "2018-08-11",
    values: [
      { key: "Male", value: 2782 },
      { key: "Female", value: 1117 },
      { key: "", value: 484 },
      { key: "Other", value: 65 }
    ]
  },
  {
    key: "2018-08-12",
    values: [
      { key: "Male", value: 2448 },
      { key: "", value: 397 },
      { key: "Female", value: 984 },
      { key: "Other", value: 72 }
    ]
  },
  {
    key: "2018-08-13",
    values: [
      { key: "Female", value: 1657 },
      { key: "", value: 347 },
      { key: "Male", value: 4609 },
      { key: "Other", value: 74 }
    ]
  },
  {
    key: "2018-08-14",
    values: [
      { key: "Male", value: 4752 },
      { key: "Female", value: 1754 },
      { key: "", value: 301 },
      { key: "Other", value: 102 }
    ]
  },
  {
    key: "2018-08-15",
    values: [
      { key: "Male", value: 4953 },
      { key: "Female", value: 1778 },
      { key: "", value: 353 },
      { key: "Other", value: 125 }
    ]
  },
  {
    key: "2018-08-16",
    values: [
      { key: "", value: 374 },
      { key: "Male", value: 4967 },
      { key: "Female", value: 1817 },
      { key: "Other", value: 113 }
    ]
  },
  {
    key: "2018-08-17",
    values: [
      { key: "Male", value: 4571 },
      { key: "Female", value: 1571 },
      { key: "", value: 469 },
      { key: "Other", value: 104 }
    ]
  },
  {
    key: "2018-08-18",
    values: [
      { key: "Male", value: 2432 },
      { key: "", value: 359 },
      { key: "Female", value: 989 },
      { key: "Other", value: 65 }
    ]
  },
  {
    key: "2018-08-19",
    values: [
      { key: "Male", value: 2226 },
      { key: "", value: 337 },
      { key: "Female", value: 817 },
      { key: "Other", value: 56 }
    ]
  },
  {
    key: "2018-08-20",
    values: [
      { key: "Female", value: 1583 },
      { key: "Male", value: 4598 },
      { key: "", value: 297 },
      { key: "Other", value: 107 }
    ]
  },
  {
    key: "2018-08-21",
    values: [
      { key: "Male", value: 5111 },
      { key: "Female", value: 1751 },
      { key: "Other", value: 118 },
      { key: "", value: 345 }
    ]
  },
  {
    key: "2018-08-22",
    values: [
      { key: "Male", value: 5199 },
      { key: "Female", value: 1831 },
      { key: "Other", value: 117 },
      { key: "", value: 298 }
    ]
  },
  {
    key: "2018-08-23",
    values: [
      { key: "Male", value: 5045 },
      { key: "Female", value: 1764 },
      { key: "", value: 316 },
      { key: "Other", value: 112 }
    ]
  },
  {
    key: "2018-08-24",
    values: [
      { key: "Male", value: 4737 },
      { key: "Female", value: 1550 },
      { key: "", value: 314 },
      { key: "Other", value: 125 }
    ]
  },
  {
    key: "2018-08-25",
    values: [
      { key: "Female", value: 986 },
      { key: "", value: 381 },
      { key: "Male", value: 2351 },
      { key: "Other", value: 66 }
    ]
  },
  {
    key: "2018-08-26",
    values: [
      { key: "Male", value: 2122 },
      { key: "", value: 293 },
      { key: "Female", value: 770 },
      { key: "Other", value: 51 }
    ]
  },
  {
    key: "2018-08-27",
    values: [
      { key: "Male", value: 4692 },
      { key: "Female", value: 1667 },
      { key: "", value: 245 },
      { key: "Other", value: 103 }
    ]
  },
  {
    key: "2018-08-28",
    values: [
      { key: "Male", value: 5042 },
      { key: "Female", value: 1733 },
      { key: "", value: 285 },
      { key: "Other", value: 92 }
    ]
  },
  {
    key: "2018-08-29",
    values: [
      { key: "", value: 271 },
      { key: "Male", value: 5066 },
      { key: "Female", value: 1853 },
      { key: "Other", value: 116 }
    ]
  },
  {
    key: "2018-08-30",
    values: [
      { key: "", value: 330 },
      { key: "Male", value: 4659 },
      { key: "Female", value: 1739 },
      { key: "Other", value: 110 }
    ]
  },
  {
    key: "2018-08-31",
    values: [
      { key: "", value: 301 },
      { key: "Male", value: 4188 },
      { key: "Female", value: 1532 },
      { key: "Other", value: 77 }
    ]
  }
];

/*
  {
    key: "2018-01-09",
    values: [
      { key: "Customer", value: 250 },
      { key: "Subscriber", value: 3302 }
    ]
  },
*/

var regionDataByDay = {
  labels: [],
  datasets: [
    {
      label: "San Francisco",
      backgroundColor: window.chartColors.blue,
      data: []
    },
    {
      label: "East Bay",
      backgroundColor: window.chartColors.darkerGreen,
      data: []
    },
    {
      label: "San Jose",
      backgroundColor: window.chartColors.yellow,
      data: []
    }
  ]
};

var regionDataByWeek = {
  labels: [
    "Dec 31st to Jan 6th",
    "Jan 7th to Jan 13th",
    "Jan 14th to Jan 20th",
    "Jan 21st to Jan 27th",
    "Jan 28th to Feb 3rd",
    "Feb 4th to Feb 10th",
    "Feb 11th to Feb 17th",
    "Feb 18th to Feb 24th",
    "Feb 25th to Mar 3rd",
    "Mar 4th to Mar 10th",
    "Mar 11th to Mar 17th",
    "Mar 18th to Mar 24th",
    "Mar 25th to Mar 31st",
    "Apr 1st to Apr 7th",
    "Apr 8th to Apr 14th",
    "Apr 15th to Apr 21st",
    "Apr 22nd to Apr 28th",
    "Apr 29th to May 5th",
    "May 6th to May 12th",
    "May 13th to May 19th",
    "May 20th to May 26th",
    "May 27th to Jun 2nd",
    "Jun 3rd to Jun 9th",
    "Jun 10th to Jun 16th",
    "Jun 17th to Jun 23rd",
    "Jun 24th to Jun 30th",
    "Jul 1st to Jul 7th",
    "Jul 8th to Jul 14th",
    "Jul 15th to Jul 21st",
    "Jul 22nd to Jul 28th",
    "Jul 29th to Aug 4th",
    "Aug 5th to Aug 11th",
    "Aug 12th to Aug 18th",
    "Aug 19th to Aug 25th",
    "Aug 26th to Sep 1st"
  ],
  datasets: [
    {
      label: "San Francisco",
      backgroundColor: window.chartColors.blue,
      data: [
        11268,
        14707,
        16154,
        17597,
        20746,
        21942,
        20212,
        16057,
        15115,
        19462,
        15791,
        16898,
        21932,
        18113,
        21228,
        20480,
        26386,
        29315,
        30735,
        29933,
        29730,
        29575,
        33061,
        33516,
        33521,
        35216,
        27035,
        34864,
        34271,
        33820,
        30615,
        31636,
        30250,
        29845,
        26368
      ]
    },
    {
      label: "East Bay",
      backgroundColor: window.chartColors.darkerGreen,
      data: [
        2860,
        3782,
        4573,
        4724,
        5748,
        6104,
        5897,
        4664,
        4512,
        5635,
        4657,
        5198,
        6384,
        5882,
        7086,
        6578,
        7096,
        7623,
        8524,
        8410,
        7945,
        8960,
        9691,
        9937,
        9927,
        10495,
        9169,
        10782,
        10903,
        10548,
        10241,
        10080,
        9793,
        9959,
        8590
      ]
    },
    {
      label: "San Jose",
      backgroundColor: window.chartColors.yellow,
      data: [
        477,
        540,
        689,
        787,
        1150,
        1386,
        1429,
        1197,
        1141,
        1691,
        1447,
        1564,
        1476,
        1918,
        1891,
        1785,
        1917,
        1905,
        2061,
        1936,
        1705,
        1538,
        2002,
        1495,
        1609,
        1508,
        1620,
        1718,
        1697,
        1736,
        1691,
        1663,
        1656,
        2095,
        1966
      ]
    }
  ]
};

var regionDataByMonth = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August"
  ],
  datasets: [
    {
      label: "San Francisco",
      backgroundColor: window.chartColors.blue,
      data: [71609, 77083, 79189, 93192, 133653, 143964, 142884, 135820]
    },
    {
      label: "East Bay",
      backgroundColor: window.chartColors.darkerGreen,
      data: [19069, 22236, 23433, 28463, 36838, 42853, 45541, 44524]
    },
    {
      label: "San Jose",
      backgroundColor: window.chartColors.yellow,
      data: [3147, 5282, 6545, 7976, 8214, 7080, 7487, 8355]
    }
  ]
};

var genderDataByDay = {
  labels: [],
  datasets: [
    {
      label: "Male",
      backgroundColor: window.chartColors.darkBlue,
      data: []
    },
    {
      label: "Female",
      backgroundColor: window.chartColors.red,
      data: []
    }
  ]
};

var genderDataByWeek = {
  labels: [
    "Dec 31st to Jan 6th",
    "Jan 7th to Jan 13th",
    "Jan 14th to Jan 20th",
    "Jan 21st to Jan 27th",
    "Jan 28th to Feb 3rd",
    "Feb 4th to Feb 10th",
    "Feb 11th to Feb 17th",
    "Feb 18th to Feb 24th",
    "Feb 25th to Mar 3rd",
    "Mar 4th to Mar 10th",
    "Mar 11th to Mar 17th",
    "Mar 18th to Mar 24th",
    "Mar 25th to Mar 31st",
    "Apr 1st to Apr 7th",
    "Apr 8th to Apr 14th",
    "Apr 15th to Apr 21st",
    "Apr 22nd to Apr 28th",
    "Apr 29th to May 5th",
    "May 6th to May 12th",
    "May 13th to May 19th",
    "May 20th to May 26th",
    "May 27th to Jun 2nd",
    "Jun 3rd to Jun 9th",
    "Jun 10th to Jun 16th",
    "Jun 17th to Jun 23rd",
    "Jun 24th to Jun 30th",
    "Jul 1st to Jul 7th",
    "Jul 8th to Jul 14th",
    "Jul 15th to Jul 21st",
    "Jul 22nd to Jul 28th",
    "Jul 29th to Aug 4th",
    "Aug 5th to Aug 11th",
    "Aug 12th to Aug 18th",
    "Aug 19th to Aug 25th",
    "Aug 26th to Sep 1st"
  ],
  datasets: [
    {
      label: "Male",
      backgroundColor: window.chartColors.darkBlue,
      data: [9989, 13486, 14909, 16180, 19233, 20386, 19262, 15239, 14952, 18782, 15064, 16471, 19925, 17847, 20784, 20003, 24679, 27062, 28210, 27695, 27073, 26957, 30467, 30813, 31406, 32810, 25774, 32669, 32392, 32337, 29531, 30103, 28732, 29267, 25769]
    },
    {
      label: "Female",
      backgroundColor: window.chartColors.red,
      data: [3203, 4030, 4603, 5072, 6136, 6849, 6376, 5105, 4736, 6217, 5153, 5402, 7217, 6333, 7238, 6683, 8141, 8836, 9879, 9604, 9191, 9407, 10531, 10754, 11094, 11597, 9366, 11646, 11420, 11149, 10886, 10898, 10550, 10282, 9294]
    }
  ]
};

var genderDataByMonth = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August"
  ],
  datasets: [
    {
      label: "Male",
      backgroundColor: window.chartColors.darkBlue,
      data: [65508, 73068, 75302, 89575, 122783, 133448, 135510, 131064]
    },
    {
      label: "Female",
      backgroundColor: window.chartColors.red,
      data: [20298, 24231, 25570, 30482, 42011, 46795, 48214, 47277]
    }
  ]
};

var memberTypeDataByDay = {
  labels: [],
  datasets: [
    {
      label: "Subscriber",
      backgroundColor: window.chartColors.blue,
      data: []
    },
    {
      label: "Customer",
      backgroundColor: window.chartColors.lightDarkerGreen,
      data: []
    }
  ]
};

var memberTypeDataByWeek = {
  labels: [
    "Dec 31st to Jan 6th",
    "Jan 7th to Jan 13th",
    "Jan 14th to Jan 20th",
    "Jan 21st to Jan 27th",
    "Jan 28th to Feb 3rd",
    "Feb 4th to Feb 10th",
    "Feb 11th to Feb 17th",
    "Feb 18th to Feb 24th",
    "Feb 25th to Mar 3rd",
    "Mar 4th to Mar 10th",
    "Mar 11th to Mar 17th",
    "Mar 18th to Mar 24th",
    "Mar 25th to Mar 31st",
    "Apr 1st to Apr 7th",
    "Apr 8th to Apr 14th",
    "Apr 15th to Apr 21st",
    "Apr 22nd to Apr 28th",
    "Apr 29th to May 5th",
    "May 6th to May 12th",
    "May 13th to May 19th",
    "May 20th to May 26th",
    "May 27th to Jun 2nd",
    "Jun 3rd to Jun 9th",
    "Jun 10th to Jun 16th",
    "Jun 17th to Jun 23rd",
    "Jun 24th to Jun 30th",
    "Jul 1st to Jul 7th",
    "Jul 8th to Jul 14th",
    "Jul 15th to Jul 21st",
    "Jul 22nd to Jul 28th",
    "Jul 29th to Aug 4th",
    "Aug 5th to Aug 11th",
    "Aug 12th to Aug 18th",
    "Aug 19th to Aug 25th",
    "Aug 26th to Sep 1st"
  ],
  datasets: [
    {
      label: "Subscriber",
      backgroundColor: window.chartColors.blue,
      data: [12631, 16935, 18687, 20431, 23942, 25580, 24298, 19250, 18961, 23889, 19271, 20581, 24934, 22508, 25786, 24497, 29863, 32450, 33833, 34138, 33387, 32705, 37476, 37989, 38653, 39675, 31009, 40026, 39601, 39259, 36537, 36622, 35302, 35833, 32497]
    },
    {
      label: "Customer",
      backgroundColor: window.chartColors.lightDarkerGreen,
      data: [2146, 2270, 2955, 2896, 4093, 4425, 3799, 3144, 2252, 3440, 3057, 3554, 5481, 3905, 4869, 4578, 5815, 6660, 7704, 6146, 6001, 7371, 7279, 7339, 7296, 8339, 7471, 7960, 7961, 7778, 6940, 7808, 7235, 6705, 4840]
    }
  ]
};

var memberTypeDataByMonth = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August"
  ],
  datasets: [
    {
      label: "Subscriber",
      backgroundColor: window.chartColors.blue,
      data: [82458, 91857, 95075, 109989, 149886, 163085, 165243, 161443]
    },
    {
      label: "Customer",
      backgroundColor: window.chartColors.lightDarkerGreen,
      data: [12344, 14861, 16307, 21180, 29239, 32883, 33979, 30719]
    }
  ]
};

var regionsComparisonData = {
  labels: ["San Francisco", "San Jose", "Oakland", "Berkeley", "Emeryville"],
  datasets: [
    {
      label: "Station interactions",
      yAxisID: "y-axis-1",
      data: [1754607, 108146, 338834, 164217, 22834],
      backgroundColor: window.chartColors.lightDarkestGreen
    },
    {
      label: "Number of stations",
      yAxisID: "y-axis-2",
      data: [144, 45, 80, 37, 10],
      backgroundColor: window.chartColors.darkBlue
    }
  ]
};

tripsByDayAndGender.forEach(day => {
  genderDataByDay.labels.push(moment(day.key, "YYYY-MM-DD"));
  for (var i = 0; i < day.values.length; i++) {
    if (day.values[i].key !== "" && day.values[i].key !== "Other") {
      var target = genderDataByDay.datasets.find(
        dataset => dataset.label === day.values[i].key
      );
      target.data.push({
        x: moment(day.key),
        y: day.values[i].value
      });
    }
  }
});

tripsByDayAndMemberTypeData.forEach(day => {
  memberTypeDataByDay.labels.push(moment(day.key, "YYYY-MM-DD"));
  for (var i = 0; i < day.values.length; i++) {
    var target = memberTypeDataByDay.datasets.find(
      dataset => dataset.label === day.values[i].key
    );
    target.data.push({
      x: moment(day.key).format("MM-DD-YYYY"),
      y: day.values[i].value
    });
  }
});

tripsByDayByRegionData.forEach(day => {
  regionDataByDay.labels.push(
    moment(day.key, "YYYY-MM-DD").format("MM-DD-YYYY")
  );
  for (var i = 0; i < day.values.length; i++) {
    if (day.values[i].key !== "null") {
      var target = regionDataByDay.datasets.find(
        dataset => dataset.label === day.values[i].key
      );
      target.data.push({
        t: day.key,
        y: day.values[i].value
      });
    }
  }
});

document.getElementById("update").addEventListener("click", function() {
  var subject = document.getElementById("subject").value;
  var period = document.getElementById("period").value;
  console.log(period);

  if (subject === "region") {
    if (period === "day") {
      window.totalTrips.config.data = regionDataByDay;
      window.totalTrips.options.title.text = "Trips by Day and Region";
    } else if(period === "week"){
      window.totalTrips.config.data = regionDataByWeek;
      window.totalTrips.options.title.text = "Trips by Week and Region";
    } else if(period === "month"){
      window.totalTrips.config.data = regionDataByMonth;
      window.totalTrips.options.title.text = "Trips by Month and Region";
    }
  } else if (subject === "gender") {
    if (period === "day") {
      window.totalTrips.config.data = genderDataByDay;
      window.totalTrips.options.title.text = "Trips by Day and Gender";
    } else if(period === "week"){
      window.totalTrips.config.data = genderDataByWeek;
      window.totalTrips.options.title.text = "Trips by Week and Gender";
    } else if(period === "month"){
      window.totalTrips.config.data = genderDataByMonth;
      window.totalTrips.options.title.text = "Trips by Month and Gender";
    }

  } else if (subject === "memberType") {
    if (period === "day") {
      window.totalTrips.config.data = memberTypeDataByDay;
      window.totalTrips.options.title.text = "Trips by Day and Member Type";
    } else if(period === "week"){
      window.totalTrips.config.data = memberTypeDataByWeek;
      window.totalTrips.options.title.text = "Trips by Week and Member Type";
    } else if(period === "month"){
      window.totalTrips.config.data = memberTypeDataByMonth;
      window.totalTrips.options.title.text = "Trips by Month and Member Type";
    }

  }
  window.totalTrips.update();
});

window.onload = function() {
  var ctx = document.getElementById("trips-by-day").getContext("2d");
  window.totalTrips = new Chart(ctx, {
    type: "bar",
    data: regionDataByMonth,
    options: {
      title: {
        display: true,
        text: "Trips by Month and Region"
      },
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: function(tooltipItem, data) {
            var label = data.datasets[tooltipItem.datasetIndex].label || "";
            if (label) {
              label += ": " + tooltipItem.yLabel.toLocaleString() + " trips";
            }
            return label;
          },
          footer: function(tooltipItems, data) {
            var sum = 0;
            tooltipItems.forEach(function(tooltipItem) {
              if(data.labels.length > 52){
                sum +=
                sum += data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].y;
              } else {
                sum +=
                sum += data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              }
            });
            return "Sum: " + sum.toLocaleString() + " trips";
          }
        }
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true
          }
        ],
        yAxes: [
          {
            stacked: true,
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Total number of trips"
            },
          }
        ]
      }
    }
  });

  var interactionCtx = document
    .getElementById("stationInteractionChart")
    .getContext("2d");

  window.interactionChart = new Chart(interactionCtx, {
    type: "bar",
    data: regionsComparisonData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
        intersect: true
      },
      scales: {
        yAxes: [
          {
            type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: "left",
            id: "y-axis-1"
          },
          {
            type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: "right",
            id: "y-axis-2",
            gridLines: {
              drawOnChartArea: false
            }
          }
        ],
        xAxes: [
          {
            display: true,
            ticks: {
              autoSkip: false
            }
          }
        ]
      }
    }
  });
};

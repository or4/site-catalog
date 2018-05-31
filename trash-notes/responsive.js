
// resonsive

// by default

//  80% 1600 657
//  90% 1422 584
//  as  1280 600
// 100% 1280 526
// 110% 1163 478
// 125% 1024 420
// 150%  853 340

// by innerWidth

// window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

//  80% 1600 657
//  90% 1422 584
//  as  1280 600
// 100% 1280 526
// 110% 1163 478
// 125% 1024 421
// 150%  853 351

// т.е. в chrome отображается реальный размер экрана, н-р, 1296x922
// innerWidth и innerHeight отображают рассчитываемый размер с учетом увеличения / уменьшения экрана
// innerWidth и innerHeight совпадает с размерами в инспекторе при наведении на elements

// логика расчёта рассчитываемого размера
// 1440 (необходимый) * 0.9 (90%) = 1296 (реальный)
// 1024 (необходимый) * 0.9 (90%) = 922 (реальный)

// 1440 (необходимый) * 0.8 (80%) = 1152 (реальный)
// 1024 (необходимый) * 0.8 (80%) = 819 (реальный)

// еще прикол плагина Resolution test в том, что он
// 1. Учитывает адресную строку и закладки
// 2. Предполагается, что это размер экрана устройства
// 3. В дизайне, конечно не учитываются отступы поэтому на большом устройстве все съедет
//  819 - размер экрана 745px - размер области в Resolution test
//  1152 х 893 - для отображения в Resolution test


//     /* default styles here for older browsers.
//        I tend to go for a 600px - 960px width max but using percentages
//     */
//     @media only screen and (min-width:960px){
//       /* styles for browsers larger than 960px; */
//     }
//     @media only screen and (min-width:1440px){
//         /* styles for browsers larger than 1440px; */
//     }
//     @media only screen and (min-width:2000px){
//         /* for sumo sized (mac) screens */
//     }
//     @media only screen and (max-device-width:480px){
//       /* styles for mobile browsers smaller than 480px; (iPhone) */
//     }
//     @media only screen and (device-width:768px){
//       /* default iPad screens */
//     }
//     /* different techniques for iPad screening */
//     @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
//       /* For portrait layouts only */
//     }

//     @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
//       /* For landscape layouts only */
//     }


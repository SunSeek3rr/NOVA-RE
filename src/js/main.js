import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

import "../scss/main.scss";

gsap.registerPlugin(MorphSVGPlugin);

const duration = {
  topLeft : (Math.random() * (3.2 - 1.6) + 1.6).toFixed(1),
  topRight : (Math.random() * (3.2 - 1.6) + 1.6).toFixed(1),
  center : (Math.random() * (3.2 - 1.6) + 1.6).toFixed(1),
  downLeft : (Math.random() * (3.2 - 1.6) + 1.6).toFixed(1),
  downRight : (Math.random() * (3.2 - 1.6) + 1.6).toFixed(1),
  normal : 2.4
}

const centerBlob = document.querySelector(".blob--center .animated-blob");
const centerBlob1 = centerBlob.getAttribute("d");

const tlCenter = gsap.timeline({ repeat: -1 });

tlCenter
  .to(".blob--center .animated-blob", { morphSVG: "#center-blob3", duration: duration.center, ease: "linear" })
  .to(".blob--center .animated-blob", { morphSVG: "#center-blob4", duration: duration.center, ease: "linear" })
  .to(".blob--center .animated-blob", { morphSVG: "#center-blob2", duration: duration.center, ease: "linear" })
  .to(".blob--center .animated-blob", { morphSVG: centerBlob1, duration: duration.center, ease: "linear" });



const topLeftBlob = document.querySelector(".blob--topLeft .animated-blob");
const topLeftBlob1 = topLeftBlob.getAttribute("d");

const tlTopLeft = gsap.timeline({ repeat: -1 });

tlTopLeft
  .to(".blob--topLeft .animated-blob", { morphSVG: "#topLeft-blob3", duration: duration.topLeft, ease: "linear" })
  .to(".blob--topLeft .animated-blob", { morphSVG: "#topLeft-blob4", duration: duration.topLeft, ease: "linear" })
  .to(".blob--topLeft .animated-blob", { morphSVG: "#topLeft-blob2", duration: duration.topLeft, ease: "linear" })
  .to(".blob--topLeft .animated-blob", { morphSVG: topLeftBlob1, duration: duration.topLeft, ease: "linear" });



const topRightBlob = document.querySelector(".blob--topRight .animated-blob");
const topRightBlob1 = topRightBlob.getAttribute("d");

const tlTopRight = gsap.timeline({ repeat: -1 });

tlTopRight
  .to(".blob--topRight .animated-blob", { morphSVG: "#topRight-blob3", duration: duration.topRight, ease: "linear" })
  .to(".blob--topRight .animated-blob", { morphSVG: "#topRight-blob4", duration: duration.topRight, ease: "linear" })
  .to(".blob--topRight .animated-blob", { morphSVG: "#topRight-blob2", duration: duration.topRight, ease: "linear" })
  .to(".blob--topRight .animated-blob", { morphSVG: topRightBlob1, duration: duration.topRight, ease: "linear" });



const downRightBlob = document.querySelector(".blob--downRight .animated-blob");
const downRightBlob1 = downRightBlob.getAttribute("d");

const tlDownRight = gsap.timeline({ repeat: -1 });

tlDownRight
  .to(".blob--downRight .animated-blob", { morphSVG: "#downRight-blob3", duration: duration.downRight, ease: "linear" })
  .to(".blob--downRight .animated-blob", { morphSVG: "#downRight-blob4", duration: duration.downRight, ease: "linear" })
  .to(".blob--downRight .animated-blob", { morphSVG: "#downRight-blob2", duration: duration.downRight, ease: "linear" })
  .to(".blob--downRight .animated-blob", { morphSVG: downRightBlob1, duration: duration.downRight, ease: "linear" });



const downLeftBlob = document.querySelector(".blob--downLeft .animated-blob");
const downLeftBlob1 = downLeftBlob.getAttribute("d");

const tlDownLeft = gsap.timeline({ repeat: -1 });

tlDownLeft
  .to(".blob--downLeft .animated-blob", { morphSVG: "#downLeft-blob3", duration: duration.downLeft, ease: "linear" })
  .to(".blob--downLeft .animated-blob", { morphSVG: "#downLeft-blob4", duration: duration.downLeft, ease: "linear" })
  .to(".blob--downLeft .animated-blob", { morphSVG: "#downLeft-blob2", duration: duration.downLeft, ease: "linear" })
  .to(".blob--downLeft .animated-blob", { morphSVG: downLeftBlob1, duration: duration.downLeft, ease: "linear" });

gsap.to(".outline--rotatingGradient", {
  rotation: 360,
  transformOrigin: "50% 50%",
  duration: 12,
  repeat: -1,
  ease: "linear"
});



const introBlob = document.querySelector(".blob--intro .animated-blob");
const introBlob1 = introBlob.getAttribute("d");

const tlIntro = gsap.timeline({ repeat: -1 });

tlIntro
  .to(".blob--intro .animated-blob", { morphSVG: "#intro-blob3", duration: duration.center, ease: "linear" })
  .to(".blob--intro .animated-blob", { morphSVG: "#intro-blob4", duration: duration.center, ease: "linear" })
  .to(".blob--intro .animated-blob", { morphSVG: "#intro-blob2", duration: duration.center, ease: "linear" })
  .to(".blob--intro .animated-blob", { morphSVG: introBlob1, duration: duration.center, ease: "linear" });


// const topLeftPaths = {
//     blob2: "M136.092 70.4945C142.302 98.9564 114.988 98.4676 104.745 121.45C94.502 144.433 90.6 132.191 69.4485 137.264C48.2971 142.337 39.2833 119.444 21.044 121.45C2.80461 123.456 -4.51191 87.4863 2.80461 70.4945C10.1211 53.5027 15.9741 46.1715 21.1774 24.4586C26.3807 2.74557 40.0053 -5.48701 69.4485 3.72481C98.8917 12.9366 129.883 42.0326 136.092 70.4945Z",
//     blob3: "M135.932 69.6014C127.746 96.6721 127.482 119.147 104.483 121.136C81.4846 123.125 85.5311 142.26 69.0726 137.129C52.6142 131.999 40.8703 125.573 20.5114 121.136C0.152479 116.699 10.5318 85.0404 2.21297 69.6014C-6.1059 54.1624 11.0212 37.5877 20.6453 23.0427C30.2694 8.49759 34.509 15.3443 69.0726 2.07346C103.636 -11.1974 144.119 42.5307 135.932 69.6014Z",
//     blob4: "M136.516 67.6265C141.114 102.855 111.582 103.08 104.637 119.035C97.6932 134.989 80.9622 127.287 68.7429 134.989C56.5236 142.691 32.2187 134.989 19.5178 119.035C6.8169 103.08 3.44908 84.7691 0.969255 67.6265C-1.51057 50.484 -0.51853 23.3642 19.6535 21.182C39.8256 18.9998 30.3683 -2.6192 68.7429 0.264236C107.118 3.14767 131.918 32.3979 136.516 67.6265Z"
// };

// const tlTopLeftBlur = gsap.timeline({ repeat: -1 });

// tlTopLeftBlur
//   .to(".blob-blur--topLeft", { clipPath: `path('${topLeftPaths.blob3}')`, duration: duration, ease: "linear" })
//   .to(".blob-blur--topLeft", { clipPath: `path('${topLeftPaths.blob4}')`, duration: duration, ease: "linear"  })
//   .to(".blob-blur--topLeft", { clipPath: `path('${topLeftPaths.blob2}')`, duration: duration, ease: "linear" })
//   .to(".blob-blur--topLeft", { clipPath: `path('${document.querySelector('#topLeft-clip path').getAttribute('d')}')`, duration: duration, ease: "linear" });



// const topRightPaths = {
//   blob2: "M234.591 117.573C231.714 146.898 211.297 145.718 211.297 187.311C211.297 228.905 150.692 220.213 119.429 233.804C88.1651 247.395 62.3886 225.239 35.7842 206.275C9.17982 187.311 17.533 152.818 4.26602 117.573C-9.00096 82.3276 10.6539 37.4349 36.0148 37.4349C61.3757 37.4349 76.4342 -8.32892 119.429 1.34217C178.222 17.242 240.652 55.787 234.591 117.573Z",
//   blob3: "M234.587 119.331C231.678 148.569 226.603 156.058 211.032 188.862C195.461 221.665 154.223 246.563 118.139 235.216C82.0543 223.868 38.4573 239.677 33.5604 207.769C28.6635 175.861 -8.24646 152.127 1.69032 119.331C11.6271 86.5347 45.91 74.9067 33.7935 39.4318C21.6771 3.95685 74.6641 -6.19567 118.139 3.4466C177.588 19.299 240.716 57.7292 234.587 119.331Z",
//   blob4: "M234.59 118.223C231.706 147.359 237.178 177.372 211.234 187.511C185.289 197.649 149.358 253.763 119.12 233.702C88.8831 213.641 60.308 226.385 35.2526 206.352C10.1972 186.319 18.923 143.867 3.65031 118.223C-11.6224 92.5796 25.3282 67.5831 35.4838 38.6041C45.6395 9.62503 76.011 -6.86357 119.12 2.74492C178.071 18.5418 240.668 56.8374 234.59 118.223Z",
//   initial: "M234.374 119.66C231.446 149.383 246.176 180.779 210.67 190.343C175.164 199.907 138.799 243.286 117.187 237.465C86.3483 229.158 41.3238 232.741 32.0722 209.564C23.4374 183.139 0 154.913 0 119.66C0 88.1735 4.93418 50.2178 32.3069 38.4373C54.9548 23.5568 73.4367 -7.94608 117.187 1.85594C177.014 17.971 240.542 57.0379 234.374 119.66Z"
// };

// const tlTopRightBlur = gsap.timeline({ repeat: -1 });

// tlTopRightBlur
//   .to(".blob-blur--topRight", { clipPath: `path('${topRightPaths.blob3}')`, duration: duration, ease: "linear" })
//   .to(".blob-blur--topRight", { clipPath: `path('${topRightPaths.blob4}')`, duration: duration, ease: "linear"  })
//   .to(".blob-blur--topRight", { clipPath: `path('${topRightPaths.blob2}')`, duration: duration, ease: "linear" })
//   .to(".blob-blur--topRight", { clipPath: `path('${document.querySelector('#topRight-clip path').getAttribute('d')}')`, duration: duration, ease: "linear" });



// const downLeftPaths = {
//   blob2: "M306.34 150.571C293.004 202.2 284.429 285.652 236.593 265.537C188.757 245.422 181.418 316.196 153.17 308.397C112.862 297.268 54.0126 302.068 41.9203 271.017C30.634 235.614 0 197.8 0 150.571C0 108.387 24.0996 87.7213 42.227 41.7538C60.3543 -4.21373 187.75 -16.0766 218.465 25.7013C249.181 67.4791 319.677 98.9414 306.34 150.571Z",
//   blob3: "M307.444 157.343C298.102 256.525 242.521 228.592 237.445 266.194C232.369 303.797 182.071 314.159 153.722 306.775C113.269 296.238 54.2072 300.782 42.0712 271.383C30.7444 237.863 0 202.06 0 157.343C0 117.402 3.467 61.2101 42.3791 54.3133C81.2911 47.4165 101.331 -23.2931 153.722 7.91072C206.113 39.1145 316.785 58.1601 307.444 157.343Z",
//   blob4: "M304.525 155.589C277.753 209.091 326.277 251.652 273.726 247.306C221.175 242.961 180.343 316.005 152.262 308.452C112.193 297.673 53.6925 302.321 41.6718 272.247C30.4525 237.958 0 201.333 0 155.589C0 114.731 34.4684 100.211 41.9767 50.1935C49.485 0.176517 108.55 25.1543 152.262 2.7257C195.974 -19.7029 331.297 102.086 304.525 155.589Z",
//   initial: "M307.18 155.357C303.343 193.947 322.648 234.709 276.112 247.126C229.576 259.543 181.915 315.863 153.59 308.305C113.171 297.52 54.1606 302.172 42.0351 272.081C30.718 237.772 0 201.127 0 155.357C0 114.477 6.46694 65.1986 42.3427 49.9039C72.0258 30.5841 96.249 -10.3166 153.59 2.4096C232.001 23.3321 315.263 74.0534 307.18 155.357Z"
// };

// const tlDownLeftBlur = gsap.timeline({ repeat: -1 });

// tlDownLeftBlur
//   .to(".blob-blur--downLeft", { clipPath: `path('${downLeftPaths.blob3}')`, duration: duration, ease: "linear" })
//   .to(".blob-blur--downLeft", { clipPath: `path('${downLeftPaths.blob4}')`, duration: duration, ease: "linear"  })
//   .to(".blob-blur--downLeft", { clipPath: `path('${downLeftPaths.blob2}')`, duration: duration, ease: "linear" })
//   .to(".blob-blur--downLeft", { clipPath: `path('${document.querySelector('#downLeft-clip path').getAttribute('d')}')`, duration: duration, ease: "linear" });



// const downRightPaths = {
//   blob2: "M69.2835 34.2353C76.2123 53.1579 59.9361 46.3592 59.7919 59.7133C59.6476 73.0674 42.3772 75.2661 35.0294 67.6203C27.6816 59.9745 14.501 67.6203 10.1501 59.7133C5.79926 51.8063 4.16167 49.0365 0.775311 34.2353C-2.61105 19.4341 5.93643 21.5841 10.2187 11.2172C14.501 0.85023 23.8117 6.06012 35.0294 0.85023C46.2471 -4.35966 62.3548 15.3126 69.2835 34.2353Z",

//   blob3: "M69.8129 36.8447C62.8508 53.2066 70.483 57.1022 62.8508 57.6697C55.2186 58.2371 41.8048 69.2761 35.3937 71.5531C28.9826 73.8301 18.9594 66.8413 10.3945 63.3326C1.82964 59.824 -1.9421 51.6478 0.974507 36.8447C3.89112 22.0416 3.40505 19.6068 10.4634 12.9142C17.5218 6.22152 19.2612 -4.62128 35.3937 2.13627C51.5262 8.89382 76.775 20.4827 69.8129 36.8447Z",

//   blob4: "M70.8109 36.1998C69.9264 45.1914 74.3767 54.6894 63.6493 57.5827C52.9218 60.476 41.9349 73.5991 35.4054 71.8381C26.0882 69.3251 12.4851 70.4089 9.68991 63.3974C7.08109 55.4033 0 46.8646 0 36.1998C0 26.6743 1.49075 15.1919 9.7608 11.6281C16.6034 7.12643 22.1873 -2.40386 35.4054 0.561459C53.4808 5.43661 72.6743 17.2552 70.8109 36.1998Z",

//   initial: "M70.8109 36.1998C69.9264 45.1914 74.3767 54.6894 63.6493 57.5827C52.9218 60.476 41.9349 73.5991 35.4054 71.8381C26.0882 69.3251 12.4851 70.4089 9.68991 63.3974C7.08109 55.4033 0 46.8646 0 36.1998C0 26.6743 1.49075 15.1919 9.7608 11.6281C16.6034 7.12643 22.1873 -2.40386 35.4054 0.561459C53.4808 5.43661 72.6743 17.2552 70.8109 36.1998Z"
// };

// const tlDownRightBlur = gsap.timeline({ repeat: -1 });

// tlDownRightBlur
//   .to(".blob-blur--downRight", { clipPath: `path('${downRightPaths.blob3}')`, duration: duration, ease: "linear" })
//   .to(".blob-blur--downRight", { clipPath: `path('${downRightPaths.blob4}')`, duration: duration, ease: "linear"  })
//   .to(".blob-blur--downRight", { clipPath: `path('${downRightPaths.blob2}')`, duration: duration, ease: "linear" })
//   .to(".blob-blur--downRight", { clipPath: `path('${document.querySelector('#downRight-clip path').getAttribute('d')}')`, duration: duration, ease: "linear" });

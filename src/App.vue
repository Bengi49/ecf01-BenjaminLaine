<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const startApp = ref("true");
const toggleStartApp = () => {
  
const btnAnime = document.getElementsByClassName("btnConfirm");
      // btnAnime.style.opacity = 0;
      setTimeout(() => {
        // btnAnime.style.opacity = 1;
        return (startApp.value = !startApp.value);
      }, 300);
};
</script>

<template>
  <div>
    <div v-if="startApp">
      <div>
        <svg
          width="380"
          height="380"
          viewBox="0 0 380 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            opacity="0.92"
            cx="190"
            cy="191"
            rx="80"
            ry="65"
            fill="#878787"
            fill-opacity="0.5"
          />
          <ellipse
            cx="189"
            cy="187.5"
            rx="79"
            ry="63.5"
            fill="url(#paint0_linear_0_1)"
          />
          <path
            d="M266.5 187.5C266.5 221.742 230.526 249 188 249C145.474 249 111 221.242 111 187C111 152.758 145.474 125 188 125C230.526 125 266.5 153.258 266.5 187.5Z"
            fill="url(#paint1_radial_0_1)"
          />
          <path
            d="M264 187.98C264 220.841 229.298 247 188.277 247C147.255 247 114 220.361 114 187.5C114 154.639 147.255 128 188.277 128C229.298 128 264 155.119 264 187.98Z"
            fill="#969696"
          />
          <path
            d="M262.5 187C262.5 218 233.5 244 187.791 245C147.59 245 115 219.033 115 187C115 154.967 146.5 128.5 187.5 128.5C230.209 128.5 262.5 156 262.5 187Z"
            fill="url(#paint2_radial_0_1)"
          />
          <path
            d="M249.5 187.466C249.5 214.208 225.808 236.637 188.467 237.5C155.624 237.5 129 215.099 129 187.466C129 159.832 154.734 137 188.229 137C223.12 137 249.5 160.723 249.5 187.466Z"
            fill="url(#paint3_radial_0_1)"
          />
          <path
            d="M245.5 187.444C245.5 211.526 223.775 231.723 189.532 232.5C159.415 232.5 135 212.328 135 187.444C135 162.561 158.598 142 189.314 142C221.309 142 245.5 163.363 245.5 187.444Z"
            fill="url(#paint4_radial_0_1)"
          />
          <path
            d="M245.454 141.359C238.828 200.846 245.454 207 194.291 207C139.437 207 147.72 203.308 139.437 141.359C137.228 111.615 141.646 97.4615 194.291 95C245.454 97.4615 247.662 111 245.454 141.359Z"
            fill="url(#paint5_radial_0_1)"
          />
          <path
            d="M245.454 141.359C238.828 200.846 245.454 207 194.291 207C139.437 207 147.72 203.308 139.437 141.359C137.228 111.615 141.646 97.4615 194.291 95C245.454 97.4615 247.662 111 245.454 141.359Z"
            fill="url(#paint6_radial_0_1)"
          />
          <path
            d="M244 143.185C237.94 200.453 244 206 194.554 206C141.539 206 149.802 202.302 141.539 143.185C139.336 117.872 141.539 100 194.554 100C244 100 244 106.163 244 143.185Z"
            fill="url(#paint7_linear_0_1)"
          />
          <path
            d="M244 143.185C237.94 200.453 244 206 194.554 206C141.539 206 149.802 202.302 141.539 143.185C139.336 117.872 141.539 100 194.554 100C244 100 244 106.163 244 143.185Z"
            fill="url(#paint8_linear_0_1)"
          />
          <path
            d="M243 116.5C243 127.822 220.614 137 193 137C165.386 137 143 127.822 143 116.5C143 105.178 166.073 96 193.687 96C221.301 96 243 105.178 243 116.5Z"
            fill="url(#paint9_radial_0_1)"
          />
          <path
            d="M242 115.5C242 126.27 220.062 135 193 135C165.938 135 144 126.27 144 115.5C144 104.73 166.611 96 193.673 96C220.735 96 242 104.73 242 115.5Z"
            fill="#B8B8B8"
          />
          <path
            d="M241 117C241 126.941 219.286 135 192.5 135C165.714 135 144 126.941 144 117C144 107.059 166.38 99 193.166 99C219.952 99 241 107.059 241 117Z"
            fill="#735757"
          />
          <path
            d="M121.887 155.245C121.887 174.738 147.2 166.275 144.845 179.51C136.717 179.51 116 174.738 116 155.245C116 135.753 132.008 129.51 140.136 129.51C146.611 142.01 121.887 135.753 121.887 155.245Z"
            fill="url(#paint10_linear_0_1)"
          />
          <path
            d="M122.176 155.731C119.85 175.223 144.442 166.035 145 179.51C134.962 179.51 117.5 174.01 116.5 155.731C116.5 136.51 131.694 130.51 139.546 130.51C148.511 139.698 122.176 136.628 122.176 155.731Z"
            fill="url(#paint11_linear_0_1)"
          />
          <path
            d="M139 129.584C139 129.53 139.022 129.479 139.06 129.44L140.681 127.819C140.804 127.696 141.013 127.775 141.02 127.948L141.5 138.5L142.145 148.207C142.154 148.33 142.05 148.432 141.928 148.423L140.5 148.311C140.408 148.304 140.334 148.235 140.321 148.143L139.002 139.014C139.001 139.005 139 138.995 139 138.986L139 129.584Z"
            fill="#6F6F6F"
          />
          <path
            d="M239 116.5C239 125.06 218.181 132 192.5 132C166.819 132 146 125.06 146 116.5C146 107.94 167.457 101 193.139 101C218.82 101 239 107.94 239 116.5Z"
            fill="#EDEDED"
            fill-opacity="0.7"
          />
          <path
            d="M238 115.5C238 124.06 217.181 131 191.5 131C165.819 131 145 124.06 145 115.5C145 106.94 166.457 100 192.139 100C217.82 100 238 106.94 238 115.5Z"
            fill="#735757"
          />
          <path
            d="M235 115.5C235 122.404 215.301 128 191 128C166.699 128 147 122.404 147 115.5C147 108.596 167.304 103 191.604 103C215.905 103 235 108.596 235 115.5Z"
            fill="url(#paint12_radial_0_1)"
          />
          <path
            d="M234 117C234 124.18 214.524 130 190.5 130C166.476 130 147 124.18 147 117C147 109.82 167.073 104 191.098 104C215.122 104 234 109.82 234 117Z"
            fill="#735757"
          />
          <path
            d="M233 118C233 124.627 213.972 130 190.5 130C167.028 130 148 124.627 148 118C148 111.373 167.612 106 191.084 106C214.556 106 233 111.373 233 118Z"
            fill="white"
            fill-opacity="0.7"
          />
          <path
            d="M233 118.5C229.132 124.75 212.553 127.875 191 131C167.237 131 149 125.404 149 118.5C149 111.596 168.381 106 191.577 106C214.773 106 233 111.596 233 118.5Z"
            fill="#735757"
          />
          <path
            d="M233.954 182.292C231.791 192.764 226.109 198 216.432 198C206.755 198 174.575 195.092 198.911 191.193C233.954 192.5 222.273 182.292 230.06 164.49C235.414 152.97 235.901 172.867 233.954 182.292Z"
            fill="#C3C3C3"
            fill-opacity="0.25"
          />
          <path
            d="M130.838 133.736C131.918 134.935 128.186 135.452 125.349 138.6C122.512 141.748 121.645 146.336 120.565 145.137C119.485 143.939 121.3 140.849 124.137 137.7C126.974 134.552 129.758 132.538 130.838 133.736Z"
            fill="#D9D9D9"
            fill-opacity="0.5"
          />
          <path
            d="M122.772 166.148C125.538 166.148 122.772 167.989 130.517 170.017C134.389 171.673 137.708 171.673 137.708 173.515C137.708 173.515 135.897 174.351 128.857 170.445C126.644 169.217 126.091 170.445 122.772 166.148Z"
            fill="#D9D9D9"
            fill-opacity="0.5"
          />
          <path
            d="M207 120C205.711 122 200.184 123 193 124C185.079 124 179 122.209 179 120C179 117.791 185.46 116 193.192 116C200.924 116 207 117.791 207 120Z"
            fill="url(#paint13_radial_0_1)"
          />
          <path
            d="M198.43 58.4293C198.43 58.4293 182.026 67.9429 202.855 85.4421C195.922 107.184 187.603 119.822 190.427 102.992C207.834 87.2838 188.605 75.2077 187.603 71.696C184.864 62.0965 202.214 46.8912 198.43 58.4293Z"
            fill="url(#paint14_linear_0_1)"
          />
          <path
            d="M153.022 133.802C153.636 131.33 154.754 135.604 162.007 137.232C172.726 140.813 172.753 137.424 174.901 139.679C174.287 142.151 168.357 139.719 161.693 138.782C157.497 138.192 152.407 136.273 153.022 133.802Z"
            fill="#D9D9D9"
            fill-opacity="0.5"
          />
          <ellipse
            cx="176"
            cy="227.5"
            rx="28"
            ry="14.5"
            fill="#878787"
            fill-opacity="0.5"
          />
          <path
            d="M200.576 227.535C200.576 226.404 201.381 225.414 202.483 225.187L290.06 207.203C291.698 206.867 293.253 207.94 293.519 209.59L293.849 211.637C294.118 213.303 292.967 214.905 291.303 215.181L203.188 229.765C201.806 229.994 200.576 228.944 200.576 227.535Z"
            fill="#959595"
            fill-opacity="0.5"
          />
          <ellipse
            cx="178"
            cy="224.5"
            rx="28"
            ry="15.5"
            fill="url(#paint15_radial_0_1)"
          />
          <path
            d="M204.413 224.098C204.415 222.968 205.219 221.98 206.321 221.754L294.72 203.611C296.358 203.275 297.913 204.348 298.179 205.998L298.51 208.046C298.778 209.712 297.628 211.313 295.964 211.589L207.026 226.331C205.642 226.56 204.411 225.508 204.413 224.098Z"
            fill="url(#paint16_linear_0_1)"
          />
          <ellipse
            cx="178"
            cy="224.5"
            rx="26"
            ry="13.5"
            fill="url(#paint17_linear_0_1)"
          />
          <ellipse
            cx="179"
            cy="225.5"
            rx="25"
            ry="12.5"
            fill="url(#paint18_radial_0_1)"
          />
          <ellipse cx="178" cy="225.5" rx="24" ry="10.5" fill="#B6B6B6" />
          <ellipse cx="180" cy="225.5" rx="21" ry="6.5" fill="#C0BCBC" />
          <path
            d="M189.683 222.817C195.438 223.09 203.442 227.592 196.37 228.679C190.236 232.546 171.483 233.154 171.249 231.331C171.014 229.507 177.252 231.651 184.323 230.564C207.848 226.135 186.679 224.06 189.683 222.817Z"
            fill="#D7D7D7"
            fill-opacity="0.5"
          />
          <ellipse
            cx="5.20689"
            cy="1.60214"
            rx="5.20689"
            ry="1.60214"
            transform="matrix(0.974051 -0.226327 0.190869 0.981616 161.05 223.298)"
            fill="#D7D7D7"
            fill-opacity="0.5"
          />
          <path
            d="M207.503 223.584C207.532 222.704 208.168 221.949 209.026 221.775L294.234 204.465C295.87 204.133 297.421 205.206 297.687 206.853L297.759 207.299C298.027 208.96 296.884 210.558 295.227 210.84L209.592 225.421C208.463 225.613 207.465 224.735 207.503 223.584Z"
            fill="url(#paint19_radial_0_1)"
          />
          <path
            d="M208.864 222.628L295.087 205.399C295.632 205.29 296.147 205.648 296.235 206.196L296.603 208.476C296.692 209.027 296.315 209.558 295.766 209.655L208.565 225.128L208.864 222.628Z"
            fill="url(#paint20_radial_0_1)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="189"
              y1="124"
              x2="189"
              y2="251"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#616161" />
              <stop offset="0.223958" stop-color="#A19999" />
              <stop offset="0.494792" stop-color="#868686" />
              <stop offset="0.979167" stop-color="#797979" />
              <stop offset="1" stop-color="#444444" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(188.75 187) rotate(90) scale(62 77.75)"
            >
              <stop stop-color="#EDEDED" />
              <stop offset="1" stop-color="#AFAEAE" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(188.75 186.75) rotate(90) scale(58.25 73.75)"
            >
              <stop stop-color="#F5F5F5" />
              <stop offset="0.28125" stop-color="#F8F8F8" />
              <stop offset="0.541667" stop-color="#F7F7F7" />
              <stop offset="0.770833" stop-color="#F4F4F4" />
              <stop offset="1" stop-color="#C7C7C7" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(189.25 187.25) rotate(90) scale(50.25 60.25)"
            >
              <stop stop-color="white" />
              <stop offset="0.65625" stop-color="#B9B9B9" />
              <stop offset="0.822917" stop-color="#A3A3A3" />
              <stop offset="1" stop-color="#C9C9C9" />
            </radialGradient>
            <radialGradient
              id="paint4_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(190.25 187.25) rotate(90) scale(45.25 55.25)"
            >
              <stop stop-color="#979797" />
              <stop offset="0.25" stop-color="#6B6B6B" />
              <stop offset="0.375" stop-color="#4F4F4F" />
              <stop offset="0.588542" stop-color="#707070" />
              <stop offset="0.817708" stop-color="#848484" />
              <stop offset="1" stop-color="#DBDBDB" />
            </radialGradient>
            <radialGradient
              id="paint5_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(238.5 111) rotate(115.629) scale(106.475 100.787)"
            >
              <stop stop-color="#545454" />
              <stop offset="0.1875" stop-color="#787878" />
              <stop offset="0.822917" stop-color="#686868" />
              <stop offset="1" stop-color="#5A5A5A" />
            </radialGradient>
            <radialGradient
              id="paint6_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(238.5 111) rotate(115.629) scale(106.475 100.787)"
            >
              <stop stop-color="#545454" />
              <stop offset="0.1875" stop-color="#787878" />
              <stop offset="0.822917" stop-color="#686868" />
              <stop offset="1" stop-color="#5A5A5A" />
            </radialGradient>
            <linearGradient
              id="paint7_linear_0_1"
              x1="192.77"
              y1="100"
              x2="192.77"
              y2="206"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CBCBCB" />
              <stop offset="0.166667" stop-color="#8A8686" />
              <stop offset="0.447917" stop-color="#D4D4D4" />
              <stop offset="0.614583" stop-color="#C1C0C0" />
              <stop offset="0.776042" stop-color="#999999" />
              <stop offset="1" stop-color="#5A5A5A" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_0_1"
              x1="192.77"
              y1="100"
              x2="192.77"
              y2="206"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CBCBCB" />
              <stop offset="0.166667" stop-color="#8A8686" />
              <stop offset="0.447917" stop-color="#D4D4D4" />
              <stop offset="0.614583" stop-color="#C1C0C0" />
              <stop offset="0.776042" stop-color="#999999" />
              <stop offset="1" stop-color="#5A5A5A" />
            </linearGradient>
            <radialGradient
              id="paint9_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(228 118.5) rotate(152.14) scale(39.5885 96.5573)"
            >
              <stop stop-color="#5F5C5C" />
              <stop offset="0.34375" stop-color="#747474" />
              <stop offset="0.557292" stop-color="#9D9D9D" />
              <stop offset="1" stop-color="#757575" />
            </radialGradient>
            <linearGradient
              id="paint10_linear_0_1"
              x1="130.5"
              y1="129.51"
              x2="130.5"
              y2="179.51"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#959595" />
              <stop offset="0.645833" stop-color="#959292" />
              <stop offset="0.817708" stop-color="#969696" />
              <stop offset="1" stop-color="#747474" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_0_1"
              x1="130.5"
              y1="130.51"
              x2="130.5"
              y2="179.51"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A2A2A2" />
              <stop offset="0.177083" stop-color="#B3AEAE" />
              <stop offset="0.463542" stop-color="#CECECE" />
              <stop offset="0.557292" stop-color="#C6C1C1" />
              <stop offset="0.84375" stop-color="#ABABAB" />
              <stop offset="1" stop-color="#666666" />
            </linearGradient>
            <radialGradient
              id="paint12_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(191 115.5) rotate(90) scale(12.5 44)"
            >
              <stop stop-color="#EDEDED" />
              <stop offset="0.838542" stop-color="#B3B3B3" />
              <stop offset="1" stop-color="#EBEBEB" stop-opacity="0.7" />
            </radialGradient>
            <radialGradient
              id="paint13_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(193 120) rotate(90) scale(4 14)"
            >
              <stop stop-color="#B0A2A2" />
              <stop offset="0.296875" stop-color="#9E8585" />
              <stop offset="1" stop-color="#6D4E4E" stop-opacity="0.74" />
            </radialGradient>
            <linearGradient
              id="paint14_linear_0_1"
              x1="182.787"
              y1="80.5488"
              x2="202.521"
              y2="87.0211"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EBEBEB" stop-opacity="0.95" />
              <stop offset="1" stop-color="#EBEBEB" stop-opacity="0.3" />
            </linearGradient>
            <radialGradient
              id="paint15_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(178 209) rotate(90) scale(31 56)"
            >
              <stop offset="0.0333333" stop-color="#676767" />
              <stop offset="0.15625" stop-color="#7C7C7C" />
              <stop offset="0.5" stop-color="#A3A3A3" />
              <stop offset="0.880208" stop-color="#7C7C7C" />
              <stop offset="1" stop-color="#6F6F6F" />
            </radialGradient>
            <linearGradient
              id="paint16_linear_0_1"
              x1="250.6"
              y1="212.078"
              x2="252.15"
              y2="220.116"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#767373" />
              <stop offset="0.192708" stop-color="#919191" />
              <stop offset="0.838542" stop-color="#858585" />
              <stop offset="1" stop-color="#787878" />
            </linearGradient>
            <linearGradient
              id="paint17_linear_0_1"
              x1="178"
              y1="211"
              x2="178"
              y2="238"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7B7B7B" />
              <stop offset="0.166667" stop-color="#B1AFAF" />
              <stop offset="0.875" stop-color="#949494" />
              <stop offset="1" stop-color="#B2AFAF" stop-opacity="0" />
            </linearGradient>
            <radialGradient
              id="paint18_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(179 225.5) rotate(90) scale(12.5 25)"
            >
              <stop stop-color="#BCBCBC" />
              <stop offset="0.171875" stop-color="#B6B1B1" />
              <stop offset="0.84375" stop-color="#ADADAD" />
              <stop offset="1" stop-color="#AFAFAF" />
            </radialGradient>
            <radialGradient
              id="paint19_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(252.213 211.211) rotate(84.2789) scale(7.87593 110.486)"
            >
              <stop stop-color="#B5B5B5" />
              <stop offset="0.130208" stop-color="#A4A4A4" />
              <stop offset="0.848958" stop-color="#969393" />
              <stop offset="1" stop-color="#939393" />
            </radialGradient>
            <radialGradient
              id="paint20_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(252.426 215.82) rotate(80.837) scale(2.16585 44.7829)"
            >
              <stop stop-color="#EDEDED" />
              <stop offset="0.25" stop-color="#D8D7D7" />
              <stop offset="0.5" stop-color="#C6C6C6" />
              <stop offset="0.75" stop-color="#B5B5B5" />
              <stop offset="1" stop-color="#A5A4A4" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <button class="btn-confirm">
        <RouterLink to="/liste-depenses" @click="toggleStartApp"
          >Démarrer
        </RouterLink>
      </button>
    </div>
    <div v-else>
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap");

.btn-confirm {
    background: #2c4885;
    filter: drop-shadow(3px 3px 4px #000);
    transition: scale 4s ease;
    &:hover {
      transform: scale(1.1);
    }
    &::selection {
      transform: scale(1);
    }
  }
</style>

import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function Waves1(props) {
  return (
    <Svg
      width={'100%'}
      height={72}
      viewBox="0 0 360 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <Path
        opacity={0.5}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M360 65.973l-9.9-9.045c-10.2-9.044-30-27.133-50.1-28.942-20.1-1.809-39.9 12.663-60 12.663s-39.9-14.472-60-9.045-39.9 30.751-60 37.987c-20.1 7.235-39.9-3.618-60-9.045C39.9 55.12 20.1 55.12 9.9 55.12H0V0h360v65.973z"
        fill="url(#paint0_linear_29_1527)"
        stroke="#123668"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_29_1527"
          x1={180}
          y1={0}
          x2={180}
          y2={82}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#123668" stopOpacity={0} />
          <Stop offset={1} stopColor="#123668" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Waves1
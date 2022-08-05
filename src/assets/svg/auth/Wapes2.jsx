import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function Waves2(props) {
  return (
    <Svg
      width={'100%'}
      height={82}
      viewBox="0 0 360 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <Path
        opacity={0.5}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 75.973l9.9-9.045c10.2-9.044 30-27.133 50.1-28.942 20.1-1.808 39.9 12.663 60 12.663s39.9-14.471 60-9.045c20.1 5.427 39.9 30.751 60 37.987 20.1 7.235 39.9-3.618 60-9.045 20.1-5.426 39.9-5.426 50.1-5.426h9.9V0H0v75.973z"
        fill="url(#paint0_linear_29_1526)"
        stroke="#123668"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_29_1526"
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

export default Waves2
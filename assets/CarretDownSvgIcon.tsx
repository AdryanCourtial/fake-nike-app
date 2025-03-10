import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const CarretDownSvgIcon = (props: SvgProps) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m20 9-7.5 7.5L5 9"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default CarretDownSvgIcon
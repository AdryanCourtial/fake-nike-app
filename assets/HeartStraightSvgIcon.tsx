import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const HeartStraightSvgIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke={props.color ?? "#767676"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 21 8.378-8.497a4.688 4.688 0 1 0-6.63-6.63L12 7.5l-1.747-1.627a4.688 4.688 0 1 0-6.63 6.63L12 21Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default HeartStraightSvgIcon
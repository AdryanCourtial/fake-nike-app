import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const GlassesSearchSvgIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="00 00 24 24"
    {...props}
  >
    <G
      stroke={props.color ?? "#767676"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M2 9h3M2 13.5h3M14.375 17.25a6.375 6.375 0 1 0 0-12.75 6.375 6.375 0 0 0 0 12.75ZM19.25 15.75 23 19.5" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default GlassesSearchSvgIcon
import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const BadSimpleSvgIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
    viewBox="00 00 24 24"
  >
    <G stroke={props.color ?? "#767676"} strokeWidth={2} clipPath="url(#a)">
      <Path d="M8.147 4.5a2.5 2.5 0 0 1 2.5-2.5h4.47a2.324 2.324 0 0 1 0 4.647h-6.97V4.5Z" />
      <Path
        strokeLinecap="round"
        d="M19.765 6.647h2.323V19.25a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5V6.647h10.456"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default BadSimpleSvgIcon

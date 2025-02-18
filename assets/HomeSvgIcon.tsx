import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const HomeSvgIcon = (props: SvgProps) => (
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
        d="M12.504 3.195a.75.75 0 0 0-1.01 0l-7.5 7.082a.75.75 0 0 0-.244.555V19.5a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75v-8.668a.75.75 0 0 0-.246-.555l-7.5-7.082Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default HomeSvgIcon

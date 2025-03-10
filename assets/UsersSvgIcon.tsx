import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const UsersSvgIcon = (props: SvgProps) => (
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
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path
        strokeLinejoin="round"
        d="M12.559 10.941a4.47 4.47 0 1 0 0-8.941 4.47 4.47 0 0 0 0 8.941Z"
      />
      <Path d="M2.5 21v0a6.706 6.706 0 0 1 6.706-6.706h6.706A6.706 6.706 0 0 1 22.618 21v0" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default UsersSvgIcon
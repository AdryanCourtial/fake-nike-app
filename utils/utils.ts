import { Dimensions } from "react-native";
import { keys } from "ts-transformer-keys"

export const GenerateArray = (length: number) => Array.from({length: length}, (_, i) => i + 1)

export const GenerateKeysFromObject = <T extends Object>() => {
    return keys<T>
}
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
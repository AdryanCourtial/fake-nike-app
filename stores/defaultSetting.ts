import { Dimensions } from 'react-native'
import { create } from 'zustand'

interface DefaultSettings {
    screenWidth: number
    screenHeight: number
}

export const useDefaultSettingStore = create<DefaultSettings>()(() => ({
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height
}))
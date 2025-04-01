import { Dimensions } from 'react-native'
import { create } from 'zustand'
import { Product } from '~/interface/products.interface'

interface DefaultSettings {
    listFavouritesProduct: Product[]
    setFavouriteProduct: (product: Product) => void
}


export const useFavroutiesStore = create<DefaultSettings>()((set) => ({
    listFavouritesProduct: [],
    setFavouriteProduct: (item) =>
        set((state) => ({
            listFavouritesProduct: [...state.listFavouritesProduct, item],
        })),
}))
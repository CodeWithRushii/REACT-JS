import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import theme from '../features/theme/themeSlice'

export const store = configureStore({
    reducer: {
        counterReducer,
        theme
    },
})

export type RootState = ReturnType<typeof store.getState>
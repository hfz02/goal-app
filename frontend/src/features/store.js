import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import goalReducer from './goalSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        goals: goalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: {
                ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],
            },
    }),
})

export default store
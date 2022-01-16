import { configureStore } from '@reduxjs/toolkit'
import { appApi } from './services/ApiService'

const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer
  },
  // подключаем мидлвар к стору (like saga/thunk)
  middleware: (middleware) => middleware().concat(appApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export default store

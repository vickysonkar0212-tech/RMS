import { configureStore } from '@reduxjs/toolkit'
import { AuthApi } from './services/AuthApi'


const store = configureStore({
  reducer: {
    [AuthApi.reducerPath] : AuthApi.reducer

  },
  middleware : (getMiddleware) => {
    return  getMiddleware().concat(AuthApi.middleware)
  }
})

export default store 
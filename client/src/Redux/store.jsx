import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import Logreducer from './loginslice'

const persistConfig = {
  key: 'rishirajProject',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, Logreducer)

export const store = configureStore({
  reducer:{
    login:persistedReducer,
  } ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)


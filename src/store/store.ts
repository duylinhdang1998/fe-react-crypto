import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth.slice";

const rootReducers = {
  auth: authReducer,
};

const reducers = persistReducer(
  {
    key: "arb-storage",
    storage,
    whitelist: ["auth"],
  },
  combineReducers({
    ...rootReducers,
  })
);

const store = configureStore({
  reducer: reducers,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };

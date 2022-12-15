import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {packageApi} from "./services/packageApi";
export const store = configureStore({
  // reducerPath and reducer are created for us, which we can pass straight into the reducer parameter of configureStore.
  reducer: {
    [packageApi.reducerPath]: packageApi.reducer,


  },

  // middleware is also created for us, which will allow us to take advantage of caching, invalidation, polling, and the other features of RTK Query.
  middleware: (getDefaultMiddleware) => {
    return (
      getDefaultMiddleware().concat(packageApi.middleware)
    );
  },
});

// It will enable to refetch the data on certain events, such as refetchOnFocus and refetchOnReconnect.
setupListeners(store.dispatch);

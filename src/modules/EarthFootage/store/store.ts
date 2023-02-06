import { configureStore } from '@reduxjs/toolkit';

import { earthLandsatApi } from '../api';

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [earthLandsatApi.reducerPath]: earthLandsatApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(earthLandsatApi.middleware),
});

export { store as earthLandsatStore };

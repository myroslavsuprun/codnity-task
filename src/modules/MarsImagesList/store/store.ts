import { configureStore } from '@reduxjs/toolkit';

import { marsRoverApi } from '../api';

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [marsRoverApi.reducerPath]: marsRoverApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(marsRoverApi.middleware),
});

export { store as marsImagesStore };

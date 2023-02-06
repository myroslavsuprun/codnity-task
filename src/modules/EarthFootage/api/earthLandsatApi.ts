// Redux
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Misc
import { envVariables } from 'utils';

// Types
import { getEarthLandsatQueryParams, getEarthLandsatResult } from './types';

// **** Variables **** //

const { NASA_API_KEY } = envVariables;
const baseUrl = 'https://api.nasa.gov/planetary/earth/assets';

// **** API **** //

const earthLandsatApi = createApi({
  reducerPath: 'earthLandsatApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getEarthLandsat: builder.query<
      getEarthLandsatResult,
      getEarthLandsatQueryParams
    >({
      query: ({ lon, lat, date }) => {
        return `?api_key=${NASA_API_KEY}&lon=${lon}&lat=${lat}&date=${date}&dim=0.3`;
      },
    }),
  }),
});

// **** Export **** //

export { earthLandsatApi };

export const {
  endpoints: {
    getEarthLandsat: {
      useQueryState: useGetEarthLandsatQueryState,
      useLazyQuerySubscription: useGetEarthLandstatQuerySubscription,
    },
  },
} = earthLandsatApi;

// Redux
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Misc
import { envVariables } from 'utils';

// Types
import { GetMarsImagesQueryParams } from './types';

// **** Variables **** //

const { NASA_API_KEY } = envVariables;

// **** API **** //

const marsRoverApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nasa.gov/mars-photos/api/v1/rovers/',
  }),
  endpoints: (builder) => ({
    getMarsImages: builder.query({
      query: ({ camera, sol }: GetMarsImagesQueryParams) =>
        `/curiosity/photos?sol=${sol}&api_key=${NASA_API_KEY}&camera=${camera}`,
    }),
  }),
});

// **** Export **** //

export { marsRoverApi };

export const { useGetMarsImagesQuery } = marsRoverApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { constants } from '../../constants'

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({ baseUrl: constants.API.endpoint_dev }),
  endpoints: () => ({})
})

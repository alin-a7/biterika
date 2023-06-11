import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

import { Campaign } from "../types";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-api.biterika.team/v1/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getAllCampaign: builder.query<{ campaigns: Campaign[] }, void>({
      query: () => `campaigns/`,
    }),
  }),
});

export const {
  useGetAllCampaignQuery,
  util: { getRunningQueriesThunk },
} = appApi;

export const { getAllCampaign } = appApi.endpoints;

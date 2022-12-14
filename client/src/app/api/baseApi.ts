import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { ClientError } from "graphql-request";

import { RootState } from "../store";

const techNotesHttpAPI = "http://190.160.15.187:8000/graphql";

const baseQuery = graphqlRequestBaseQuery<
  Partial<ClientError> & { statusCode: number; error: string }
>({
  url: techNotesHttpAPI,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
});




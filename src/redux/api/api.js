import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }), //the main url link
  tagTypes: ["sites"],
  endpoints: (builder) => ({
    //getting data from database
    getData: builder.query({
      query: () => ({
        url: `/api/v1/website/get`,
        method: "GET",
      }),
      providesTags: ["sites"],
    }),

    //posting task / Create
    addData: builder.mutation({
      query: (data) => ({
        url: "/api/v1/website/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["sites"], //for make fetch after the action
    }),
    //updating task / Update
    updateData: builder.mutation({
      query: (options) => ({
        url: `/api/v1/website/${options.id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["sites"], //for make fetch after the action
    }),
    //deleting task / Delete
    deleteData: builder.mutation({
      query: (options) => ({
        url: `/api/v1/website/${options.id}`,
        method: "DELETE",
        body: options.data,
      }),
      invalidatesTags: ["sites"], //for make fetch after the action
    }),
  }),
});

//CRUD api hooks
export const {
  useGetDataQuery,
  useAddDataMutation,
  useUpdateDataMutation,
  useDeleteDataMutation,
} = baseApi;

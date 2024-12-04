import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const basequery= fetchBaseQuery({
  baseUrl:`${process.env.NEXT_PUBLIC_API_URL}`,
  prepareHeaders:(headers)
}
)
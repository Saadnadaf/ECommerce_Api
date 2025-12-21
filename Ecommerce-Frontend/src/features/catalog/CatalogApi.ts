import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../app/Models/Product";
import { baseQueryWithErrorHandling } from "../../app/baseApi";

export const  CatalogApi = createApi({
    reducerPath:'CatalogApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints:(builder)=>({
        fetchProducts:builder.query<Product[],void>({
            query:()=>({ url: 'products' })
        }),
         fetchProductsDetail : builder.query<Product,number>({
            query:(productId)=>`products/${productId}`
         })   
    })
});

export const {useFetchProductsDetailQuery,useFetchProductsQuery} = CatalogApi;
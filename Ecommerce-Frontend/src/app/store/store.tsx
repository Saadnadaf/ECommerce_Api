import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice } from "../../features/contact/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { CatalogApi } from "../../features/catalog/CatalogApi";
import { uiSlice } from "../layout/uiSlice";

export function configureTheStore(){
    return legacy_createStore(counterReducer)
}

export const store = configureStore({
    reducer:{
        [CatalogApi.reducerPath]:CatalogApi.reducer,
        counter:counterSlice.reducer,
        ui:uiSlice.reducer
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CatalogApi.middleware)
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
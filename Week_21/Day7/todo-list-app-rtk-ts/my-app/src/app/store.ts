import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice.ts";
// redux-persis
import { 
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // uses localstorage in the browser


const rootReducer = combineReducers({
    todos: todoReducer,
});

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["todos"], // only persist the todos slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    //This tells Redux: “use a persisted reducer”, meaning your todos state gets saved to localStorage
    // and restored automatically on reload.
    reducer: persistedReducer,
    
    // The middleware ignore-list stops Redux Toolkit from nagging about redux-persist’s internal actions.
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                // redux-persist uses some non-serialisable bits internally (such as these types),
                // so this will ignore these actions types
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

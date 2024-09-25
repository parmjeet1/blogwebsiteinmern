import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducers";
import { thunk } from "redux-thunk";
import { authMiddleware } from "../middleware/authMiddleware";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer);
const store= createStore(persistedReducer, applyMiddleware(thunk,authMiddleware));
let persistor = persistStore(store)
export  {persistor,store}; 
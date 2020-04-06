import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reducers from "./reducers";

const persistConfig = {
  key: "skriver-root",
  storage,
  whitelist: ["list"],
};

const pReducer = persistReducer(persistConfig, reducers);

const middleWare = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(pReducer, composeEnhancers(middleWare));

const persistor = persistStore(store);

export { store, persistor };

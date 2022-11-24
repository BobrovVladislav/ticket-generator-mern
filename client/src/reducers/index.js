import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk" //поскольку redux синхронный, нужно это расширение чтобы выполнять асинхронные действия
import userReducer from "./userReducer";
import fileReducer from "./ticketReducer";

const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
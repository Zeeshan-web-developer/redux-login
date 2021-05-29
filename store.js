import { createStore } from "redux";
import root from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(root, composeWithDevTools());
export default store;

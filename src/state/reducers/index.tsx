import { combineReducers } from "redux";
import { bookReducer,  } from "../reducers/bookReducer";

export const reducers = combineReducers({
  allBooks: bookReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>

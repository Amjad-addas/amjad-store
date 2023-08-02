import { combineReducers } from "@reduxjs/toolkit";

import cardReducer from "./cardReducer";
import productReducer from "./productReducer";

 const rootReducer = combineReducers({
    card:cardReducer,
    product:productReducer

})


export default rootReducer
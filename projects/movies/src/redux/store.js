import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./homeSlice";
import entityReducer from "./entityDetailSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    entityDetails: entityReducer,
  }, // Slice
});

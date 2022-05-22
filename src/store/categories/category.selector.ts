import { createSelector } from "reselect";

import { CategoryMap } from "./category.types";
import { CategoriesState } from "./category.reducer";
// fix any after refactor rootStore to typescript
import { RootState } from "../store";

const selectCategotryReducer = (state:RootState):CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategotryReducer],
  (categroiesSlice) => categroiesSlice.categories
);



export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories):CategoryMap => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategotryReducer],
  (categroiesSlice) => categroiesSlice.isLoading
);


import { createSelector } from "reselect";

const selectCategotryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategotryReducer],
  (categroiesSlice) => categroiesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

// export const selectCategoryMap = (state) => {
//   console.log("selector fired");
//   return state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
// };

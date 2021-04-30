import { VISIBILITY_FILTERS } from "../../constants";

export const get_localItemsState = store => store._localItems;

export const get_localItemsList = store =>
  get_localItemsState(store) ? get_localItemsState(store).allKeys : [];

export const getItemByKey = (store, key) =>
  get_localItemsState(store) ? { ...get_localItemsState(store).byKeys[key], key } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
//  */
// export const get_localItems = store =>
//   get_localItemsList(store).map(id => getItemById(store, id));

// export const get_localItemsByVisibilityFilter = (store, visibilityFilter) => {
//   const all_localItems = get_localItems(store);
//   switch (visibilityFilter) {
//     case VISIBILITY_FILTERS.COMPLETED:
//       return all_localItems.filter(_localItem=> _localItem.completed);
//     case VISIBILITY_FILTERS.INCOMPLETE:
//       return all_localItems.filter(_localItem=> !_localItem.completed);
//     case VISIBILITY_FILTERS.ALL:
//     default:
//       return all_localItems;
//   }
// };
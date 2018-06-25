import { Reducer } from 'redux';

import { ActionTypes, ActionsAll } from './actions';
import { AppState } from 'store/reducers';
import { TCategory } from 'core/catalog/categories/types';
import { log } from 'util/logger';
import { capitalizeFirstLetter, isUndefined } from 'core/common';


type TState = {
  error?: any;
  requesting: boolean;
  indexed: {[key: string]: TCategory};
  separated: TCategory[];
};

const initialState: TState = {
  requesting: false,
  indexed: {},
  separated: [],
};

export type TCategoriesState = TState;
export const categoriesInitialState = initialState;
export const categoriesReducer: Reducer<TState> = (state: TState = initialState, action: ActionsAll): TState => {
  switch (action.type) {
    case ActionTypes.LOAD_CATEGORIES:
      return { ...state, requesting: true };
    case ActionTypes.LOAD_INDEXED_CATEGORIES_SUCCESS:
      return { ...state, indexed: action.data, requesting: false, error: false };
    case ActionTypes.LOAD_SEPARATED_CATEGORIES_SUCCESS:
      return { ...state, separated: action.data, requesting: false, error: false };
    case ActionTypes.LOAD_CATEGORIES_FAIL:
      return { ...state, error: action.error, requesting: false };

    default: return state;
  }
};

export const selectCategory = (state: AppState, category: string) => {
  log('selectCategory category', category);
  return state.categories.indexed[category];
};


type CategoryCaptionAccumulator = {
  compositCaption: string;
  compositCategory: string;
};


/**
 * Return Caption as Parent, Child level 1, Child level 2..
 */
export const getCategoryCaption = (state: AppState, category: string) => {
  if (!category) { return '' }

  const splitted = category.split('.');
  const acc = splitted.reduce(
    (acc: CategoryCaptionAccumulator, categoryPart: string) => {
      if (isUndefined(acc.compositCategory)) {
        acc.compositCategory = categoryPart;
        const categorySelected = selectCategory(state, category);
        if (!categorySelected) { return acc }
        acc.compositCaption = capitalizeFirstLetter(categorySelected.name.toLocaleLowerCase());
      } else {
        acc.compositCategory = `${acc.compositCategory}.${categoryPart}`;
        const categorySelected = selectCategory(state, category);
        if (!categorySelected) { return acc }
        acc.compositCaption = `${acc.compositCaption}, ${categorySelected.name.toLocaleLowerCase()}`;
      }
      return acc;
    }, {} as CategoryCaptionAccumulator);

  return acc.compositCaption;
};


export const getCaption = (state: AppState, category: TCategory) => {
  return getCategoryCaption(state, category.idVirtual);
};
